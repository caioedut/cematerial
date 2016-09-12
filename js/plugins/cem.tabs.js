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
        this.$el = $(el);

        // Create element
        this.$list = this.$el.find('.tab-list');
        this.$content = this.$el.find('.tab-content');

        this.$bar = $('<div class="tab-bar"></div>');
        this.updateBar();
        this.$list.prepend(this.$bar);
    };

    Tabs.VERSION = '0.1.0';

    Tabs.DEFAULTS = {};

    Tabs.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        var $handler = $(_relatedTarget);

        // If has OTHER ACTIVE tab, hide
        this.$el.tabs('hide');

        e = $.Event('cem.tabs.beforeShow', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        var $target = CEMaterial.getTarget($handler);
        if (!$target.length) {
            // Get tab content (target panel) index
            var index = $handler.data('index');
            if (typeof index == 'undefined') {
                index = $handler.index() - 1;
            }
            $target = this.$content.eq(index);
        }

        $handler.addClass('tab-active');
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

        e = $.Event('cem.tab.hide', {relatedTarget: _relatedTarget});
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
            } else if (options.show) {
                tabs.show(_relatedTarget);
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

}(jQuery);