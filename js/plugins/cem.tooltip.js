/** ========================================================================
 *
 * CEMaterial Tooltips
 *
 * ======================================================================== */

+function ($) {
    'use strict';

    // CLASS

    var Tooltip = function (el, options) {
        this.options = options || {};
        this.$el = $(el);

        // Create element
        this.$tooltip = $('<span class="tooltip"></span>');

        if (this.options.wrap) {
            this.$tooltip.removeClass('tooltip-nowrap');
        } else {
            this.$tooltip.addClass('tooltip-nowrap');
        }
    };

    Tooltip.VERSION = '0.1.1';

    Tooltip.DEFAULTS = {
        html: false,
        wrap: false
    };

    Tooltip.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.tooltip.beforeShow', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        this.updateTitle();
        this.updatePosition();

        e = $.Event('cem.tooltip.show', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Tooltip.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.tooltip.beforeHide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Hide tooltip
        this.$tooltip.removeClass('tooltip-visible').remove();

        e = $.Event('cem.tooltip.hide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Tooltip.prototype.updateTitle = function () {
        if (!this.$el.data('tooltip')) {
            this.$el.data('tooltip', this.$el.attr('title'));
        }

        var title = this.$el.data('tooltip');

        // Strip tags
        if (!this.options.html) {
            title = $("<div/>").html(title).text();
        }

        this.$tooltip.html(title);
    };

    Tooltip.prototype.updatePosition = function () {
        this.$tooltip.appendTo('body');

        var offset = this.$el.offset();
        var width = this.$tooltip.outerWidth();

        // Offset left (MIN = 0px)
        var left = Math.max(offset.left + (this.$el.outerWidth() / 2) - (width / 2), 0);

        // Offset left (MAX = BODY WIDTH - TOOLTIP WIDTH)
        left = Math.min(left, $('body').outerWidth() - width);

        // Update css position
        this.$tooltip.css({
            top: offset.top + this.$el.outerHeight(),
            left: left
        }).addClass('tooltip-visible');
    };

    // TOOLTIP - JQUERY PLUGIN

    function Plugin(action, _relatedTarget) {
        return this.each(function () {
            var $this = $(this);
            var options = $.extend({}, Tooltip.DEFAULTS, $this.data(), typeof action == 'object' ? action : {});

            var tooltip = $this.data('cem.tooltip');

            if (!tooltip) {
                tooltip = new Tooltip(this, options);
                $this.data('cem.tooltip', tooltip);
            }

            if (typeof action == 'string') {
                tooltip[action](_relatedTarget);
            }
        });
    }

    $.fn.tooltip = Plugin;
    $.fn.tooltip.Constructor = Tooltip;

    // TOOLTIP - DATA API
    $(document)
        .on('mouseover focus', '[data-tooltip]', function () {
            Plugin.call($(this), 'show', this);
        })
        .on('mouseleave blur', '[data-tooltip]', function () {
            Plugin.call($(this), 'hide', this);
        });

}(jQuery);