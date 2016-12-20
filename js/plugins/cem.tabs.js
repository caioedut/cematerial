/** ========================================================================
 *
 * CEMaterial Tabs
 *
 * ======================================================================== */

+function ($) {
    'use strict';

    // CLASS

    var Tabs = function (el, options) {
        this.options = options || {};
        this.$el = $(el).closest('.tabs');

        // Create element
        this.$list = this.$el.find('.tabs-nav');
        this.$content = this.$el.find('.tabs-list > .tab-content');

        if (!this.options.swipe) {
            this.$el.addClass('tabs-noswipe');
        }

        this.$bar = $('<div class="tabs-bar"></div>');
        this.updateBar();
        this.$list.prepend(this.$bar);
    };

    Tabs.VERSION = '0.1.7';

    Tabs.DEFAULTS = {
        swipe: true
    };

    Tabs.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        if (!_relatedTarget) {
            return;
        }

        var $handler = $(_relatedTarget);

        var $target,
            $nav;

        if ($handler.is('.tab-content')) {
            $target = $handler;
            $nav = this.$el.find('.tabs-nav > [data-toggle="tab"]').filter(function (i) {
                return $(CEMaterial.getTarget($(this))).is($target) || i == $target.index();
            });
        } else {
            $target = CEMaterial.getTarget($handler);
            $nav = $handler;

            if (!$target.length) {
                // Get tab content (target panel) by index
                $target = this.$content.eq($nav.index() - 1);
            }
        }

        // If has OTHER ACTIVE tab, hide
        this.$el.tabs('hide');

        e = $.Event('cem.tabs.beforeShow', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        $nav.addClass('tab-active');
        $target.addClass('tab-visible');

        this.updateBar();

        e = $.Event('cem.tabs.show', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Tabs.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.tabs.beforeHide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Hide tab
        this.$list.find('.tab-active').removeClass('tab-active');
        this.$el.find('.tab-content.tab-visible').removeClass('tab-visible');

        e = $.Event('cem.tabs.hide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Tabs.prototype.updateBar = function () {
        var $active = this.$list.find('.tab-active');

        var pos = $active.position();
        var scroll = this.$list.scrollLeft();

        var left = scroll + pos.left;

        if (pos.left + $active.outerWidth() > this.$list.outerWidth()) {
            this.$list.animate({
                scrollLeft: left - this.$list.outerWidth() + $active.outerWidth()
            }, 200);
        } else if (pos.left < 0) {
            this.$list.animate({
                scrollLeft: left
            }, 200);
        }

        // Update bar css
        this.$bar.css({
            transform: 'translateX(' + left + 'px)',
            width: $active.outerWidth()
        });
    };

    // TABS - JQUERY PLUGIN

    function Plugin(action, _relatedTarget) {
        return this.each(function () {
            var $this = $(this);
            var options = $.extend({}, Tabs.DEFAULTS, $this.data(), typeof action == 'object' ? action : {});

            var tabs = $this.data('cem.tabs');

            if (!tabs) {
                tabs = new Tabs(this, options);
                $this.data('cem.tabs', tabs);
            }

            if (typeof action == 'string') {
                tabs[action](_relatedTarget);
            }
        });
    }

    $.fn.tabs = Plugin;
    $.fn.tabs.Constructor = Tabs;

    // TABS - DATA API
    $(document).on('click', '[data-toggle="tab"]', function (e) {
        var $this = $(this);
        var $target = $this.closest('.tabs');

        $this.is('a') ? e.preventDefault() : '';

        Plugin.call($target, 'show', this);
    });

    $(document)
        .on('swipestart', '.tabs:not(.tabs-noswipe) .tabs-list', function () {
            var $tabs = $(this).closest('.tabs');

            if (!$tabs.data('cem.tabs')) {
                $tabs.tabs();
            }

            var $bar = $tabs.find('.tabs-bar');

            $tabs.find('.tabs-bar').addClass('no-transition');
            $(this).find('.tab-visible').addClass('no-transition');

            // GET TRANSLATE X VALUE
            var translate_x = parseInt($bar.css('transform').split(',')[4]);
            $bar.data('translateX', translate_x);
        })
        .on('swipemove', '.tabs:not(.tabs-noswipe) .tabs-list', function (e) {
            var is_horizontal = Math.abs(e.swipeOffsetX) > Math.abs(e.swipeOffsetY);
            var is_parent_scrollable = $(e.target).parentsUntil($(this)).filter(function () {
                return this.scrollWidth > $(this).outerWidth();
            }).length;

            if (is_horizontal && !is_parent_scrollable) {
                var $el = $(this);
                var $active = $el.find('.tab-visible');
                var $bar = $el.closest('.tabs').find('.tabs-bar');

                e.preventDefault();

                // Move tab content
                $active.css('marginLeft', e.swipeOffsetX);

                // Move tab bar
                var translateX = $bar.data('translateX') - (e.swipeOffsetX / $el.outerWidth() * 100);
                $bar.css('transform', 'translateX(' + translateX + 'px)');
            }
        })
        .on('swipeend', '.tabs:not(.tabs-noswipe) .tabs-list', function (e) {
            var is_horizontal = Math.abs(e.swipeOffsetX) > Math.abs(e.swipeOffsetY);
            var is_parent_scrollable = $(e.target).parentsUntil($(this)).filter(function () {
                return this.scrollWidth > $(this).outerWidth();
            }).length;

            var $el = $(this);
            var $active = $el.find('.tab-visible');
            var $bar = $el.closest('.tabs').find('.tabs-bar');

            var offset_start = $active.outerWidth() * 0.3;
            var $new;

            if (is_horizontal && !is_parent_scrollable) {
                if (Math.abs(e.swipeOffsetX) > offset_start) {
                    if (e.swipeOffsetX > 0) {
                        $new = $active.prev('.tab-content');
                    } else {
                        $new = $active.next('.tab-content');
                    }
                }
            }

            $new = $new && $new.length ? $new : $active;

            Plugin.call($el.closest('.tabs'), 'show', $new.get(0));

            // Reset tab content
            $active.css('marginLeft', '');

            $bar.removeClass('no-transition');
            $active.removeClass('no-transition');

        })
    ;

}(jQuery);