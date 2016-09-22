/** ========================================================================
 *
 * CEMaterial Panels
 *
 * ======================================================================== */

+function ($) {
    'use strict';

    // CLASS

    var Panel = function (el, options) {
        this.options = options || {};
        this.$el = $(el);

        if (this.options.margin) {
            this.$el.removeClass('panel-nomargin');
        } else {
            this.$el.addClass('panel-nomargin');
        }

        if (this.options.scale) {
            this.$el.removeClass('panel-noscale');
        } else {
            this.$el.addClass('panel-noscale');
        }
    };

    Panel.VERSION = '0.1.1';

    Panel.DEFAULTS = {
        margin: true,
        scale: true
    };

    Panel.prototype.toggle = function (_relatedTarget) {
        return this.$el.hasClass('panel-visible') ? this.hide() : this.show(_relatedTarget);
    };

    Panel.prototype.show = function (_relatedTarget) {
        var that = this;
        var e; // Event handler

        // If has panel group, close PREVIOUS OPENNED PANEL
        this.$el.closest('.panel-group').find('.panel.panel-visible').panel('hide');

        e = $.Event('cem.panel.beforeShow', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Show panel
        this.$el.find('.panel-body, .panel-footer').finish().slideDown(200, function () {
            e = $.Event('cem.panel.show', {relatedTarget: _relatedTarget});
            that.$el.trigger(e);
        });
        this.$el.addClass('panel-processed panel-visible');
    };

    Panel.prototype.hide = function (_relatedTarget) {
        var that = this;
        var e; // Event handler

        e = $.Event('cem.panel.beforeHide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Hide panel
        this.$el.find('.panel-body, .panel-footer').finish().slideUp(200, function () {
            e = $.Event('cem.panel.hide', {relatedTarget: _relatedTarget});
            that.$el.trigger(e);
        });
        this.$el.addClass('panel-processed').removeClass('panel-visible');
    };

    // PANEL - JQUERY PLUGIN

    function Plugin(action, _relatedTarget) {
        return this.each(function () {
            var $this = $(this);
            var options = $.extend({}, Panel.DEFAULTS, $this.data(), typeof action == 'object' ? action : {});

            var panel = $this.data('cem.panel');

            if (!panel) {
                panel = new Panel(this, options);
                $this.data('cem.panel', panel);
            }

            if (typeof action == 'string') {
                panel[action](_relatedTarget);
            }
        });
    }

    $.fn.panel = Plugin;
    $.fn.panel.Constructor = Panel;

    // PANEL - DATA API
    $(document).on('click', '[data-toggle="panel"]', function (e) {
        var $this = $(this);
        var $target = CEMaterial.getTarget($this, '.panel');

        $this.is('a') ? e.preventDefault() : '';

        Plugin.call($target, 'toggle', this);
    });

}(jQuery);