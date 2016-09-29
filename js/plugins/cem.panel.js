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
            this.$el.addClass('panel-margin');
        }

        if (this.options.popout) {
            this.$el.addClass('panel-popout');
        }

        this.updateHeight();
    };

    Panel.VERSION = '0.1.2';

    Panel.DEFAULTS = {
        margin: false,
        popout: false
    };

    Panel.prototype.toggle = function (_relatedTarget) {
        return this.$el.hasClass('panel-visible') ? this.hide() : this.show(_relatedTarget);
    };

    Panel.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // If has panel group, close PREVIOUS OPENNED PANEL
        this.$el.closest('.panel-group').find('.panel.panel-visible').panel('hide');

        e = $.Event('cem.panel.beforeShow', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Show panel
        this.updateHeight();
        this.$el.addClass('panel-visible');

        e = $.Event('cem.panel.show', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Panel.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.panel.beforeHide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Hide panel
        this.updateHeight();
        this.$el.removeClass('panel-visible');

        e = $.Event('cem.panel.hide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Panel.prototype.updateHeight = function () {
        this.$el.find('.panel-body, .panel-footer').each(function () {
            var $el = $(this);

            var $ref = $el.clone().insertAfter($el).addClass('panel-clone').css('height', 'auto');
            var height = $ref.outerHeight();
            $ref.remove();

            $el.css('height', height);
        });
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