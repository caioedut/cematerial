/** ========================================================================
 *
 * CEMaterial Sidebars
 *
 * ======================================================================== */

+function ($) {
    'use strict';

    // CLASS

    var Sidebar = function (el, options) {
        this.options = options || {};
        this.$el = $(el);

        this.$backdrop = $('<div class="layout-sidebar-backdrop"></div>').insertAfter(this.$el);

        if (this.options.autoclose) {
            $(document).on('click', function (e) {
                $('.layout-sidebar-visible').not($(e.target).closest('.layout-sidebar-visible')).sidebar('hide');
            });
        }
    };

    Sidebar.VERSION = '0.1.0';

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
    $(document).on('click', '[data-toggle="sidebar"]', function (e) {
        var $this = $(this);
        var $target = CEMaterial.getTarget($this, '.layout-sidebar');

        $this.is('a') ? e.preventDefault() : '';

        Plugin.call($target, 'toggle', this);
    });

}(jQuery);