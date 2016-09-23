/** ========================================================================
 *
 * CEMaterial Sidebars
 *
 * ======================================================================== */

+function ($) {
    'use strict';

    var $doc = $(document);

    // CLASS

    var Sidebar = function (el, options) {
        this.options = options || {};
        this.$el = $(el);

        this.$backdrop = $('<div class="layout-sidebar-backdrop"></div>').insertAfter(this.$el);

        if (this.options.autoclose) {
            var that = this;
            $doc.on('click', function (e) {
                that.$el.not($(e.target).closest('.layout-sidebar-visible')).sidebar('hide');
            });
        }
    };

    Sidebar.VERSION = '0.1.1';

    Sidebar.DEFAULTS = {
        autoclose: true
    };

    Sidebar.prototype.toggle = function (_relatedTarget) {
        return this.$el.hasClass('layout-sidebar-visible') ? this.hide() : this.show(_relatedTarget);
    };

    Sidebar.prototype.show = function (_relatedTarget) {
        var that = this;
        var e; // Event handler

        e = $.Event('cem.sidebar.beforeShow', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Show sidebar
        setTimeout(function () {
            that.$el.addClass('layout-sidebar-visible');
        }, 1);

        e = $.Event('cem.sidebar.show', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Sidebar.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.sidebar.beforeHide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Hide sidebar
        this.$el.removeClass('layout-sidebar-visible');

        e = $.Event('cem.sidebar.hide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    // SIDEBAR - JQUERY PLUGIN

    function Plugin(action, _relatedTarget) {
        return this.each(function () {
            var $this = $(this);
            var options = $.extend({}, Sidebar.DEFAULTS, $this.data(), typeof action == 'object' ? action : {});

            var sidebar = $this.data('cem.sidebar');

            if (!sidebar) {
                sidebar = new Sidebar(this, options);
                $this.data('cem.sidebar', sidebar);
            }

            if (typeof action == 'string') {
                sidebar[action](_relatedTarget);
            }
        });
    }

    $.fn.sidebar = Plugin;
    $.fn.sidebar.Constructor = Sidebar;

    // SIDEBAR - DATA API
    $doc.on('click', '[data-toggle="sidebar"]', function (e) {
        var $this = $(this);
        var $target = CEMaterial.getTarget($this, '.layout-sidebar');

        $this.is('a') ? e.preventDefault() : '';

        Plugin.call($target, 'toggle', this);
    });

    $doc
        .on('swipestart', '.layout', function (e) {
            var $el = $(e.target).closest('.layout');
            var $sidebar = $el.find('.layout-sidebar').first();

            // GET TRANSLATE X VALUE
            var translate_x = parseInt($sidebar.css('transform').split(',')[4]);

            // Create a backdrop if not exists (INIT SIDEBAR PLUGIN)
            if (!$sidebar.data('cem.sidebar')) {
                $sidebar.sidebar();
            }

            if (e.swipeFromX - $el.offset().left < 32 || ($sidebar.data('cem.sidebar') && $(e.target).is($sidebar.data('cem.sidebar').$backdrop))) {
                $sidebar.addClass('layout-sidebar-swiping').data('translateX', translate_x);
            }
        })
        .on('swipemove', '.layout', function (e) {
            var $el = $(e.target).closest('.layout');
            var $sidebar = $el.find('.layout-sidebar').first();

            if (e.swipeFromX - $el.offset().left < 32 || ($sidebar.data('cem.sidebar') && $(e.target).is($sidebar.data('cem.sidebar').$backdrop))) {
                e.preventDefault();

                var translate_x = $sidebar.data('translateX');

                // Offset (translateX) | MIN = 0 | MAX = SIDEBAR WIDTH
                var width = $sidebar.outerWidth();
                var offset = Math.max(0, Math.min(width, translate_x + e.swipeOffsetX));

                // Backdrop opacity percent
                var opacity = offset / width;

                $sidebar.css('transform', 'translateX(' + offset + 'px)');
                $sidebar.data('cem.sidebar').$backdrop.css('opacity', opacity);
            }
        })
        .on('swipeend', '.layout', function (e) {
            var $el = $(e.target).closest('.layout');
            var $sidebar = $el.find('.layout-sidebar').first();

            $sidebar.removeClass('layout-sidebar-swiping').removeAttr('style');
            $sidebar.data('cem.sidebar').$backdrop.removeAttr('style');

            if (e.swipeFromX - $el.offset().left < 32 || ($sidebar.data('cem.sidebar') && $(e.target).is($sidebar.data('cem.sidebar').$backdrop))) {
                if (e.swipeDirectionX == 'left') {
                    $sidebar.sidebar('hide');
                } else {
                    $sidebar.sidebar('show');
                }
            }
        })
    ;

}(jQuery);