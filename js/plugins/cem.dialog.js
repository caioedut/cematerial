/** ========================================================================
 *
 * CEMaterial Dialogs
 *
 * ======================================================================== */

+function ($) {
    'use strict';

    // CLASS

    var Dialog = function (el, options) {
        var that = this;

        this.options = options || {};
        this.$el = $(el);

        if (this.options.remote) {
            this.$el
                .find('.dialog-content')
                .load(this.options.remote, $.proxy(function () {
                    this.$element.trigger('cem.dialog.loaded');
                }, this))
        }

        if (this.options.autoclose) {
            this.$el.on('click', function (e) {
                var target = $(e.target);
                if (target.is(that.$el)) {
                    that.hide(target);
                }
            });
        }

        if (this.options.keyboard) {
            $(document).on('keydown', function (e) {
                var target = $(e.target);
                if (e.which == 27) {
                    that.hide(target);
                }
            });
        }
    };

    Dialog.VERSION = '0.1.0';

    Dialog.DEFAULTS = {
        autoclose: true,
        focus: false,
        keyboard: false
    };

    Dialog.prototype.toggle = function (_relatedTarget) {
        return this.$el.hasClass('dialog-visible') ? this.hide() : this.show(_relatedTarget);
    };

    Dialog.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.dialog.beforeShow', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Show dialog
        this.$el.addClass('dialog-visible');

        // Focus
        if (this.options.focus) {
            this.$el.find(this.options.focus).focus();
        }

        e = $.Event('cem.dialog.show', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Dialog.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.dialog.beforeHide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Hide dialog
        this.$el.removeClass('dialog-visible');

        e = $.Event('cem.dialog.hide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    // DIALOG - JQUERY PLUGIN

    function Plugin(action, _relatedTarget) {
        return this.each(function () {
            var $this = $(this);
            var options = $.extend({}, Dialog.DEFAULTS, $this.data(), typeof action == 'object' ? action : {});

            var dialog = $this.data('cem.dialog');

            if (!dialog) {
                dialog = new Dialog(this, options);
                $this.data('cem.dialog', dialog);
            }

            if (typeof action == 'string') {
                dialog[action](_relatedTarget);
            } else if (options.show) {
                dialog.show(_relatedTarget);
            }
        });
    }

    $.fn.dialog = Plugin;
    $.fn.dialog.Constructor = Dialog;

    // DIALOG - DATA API
    $(document).on('click', '[data-toggle="dialog"]', function (e) {
        var $this = $(this);
        var $target = CEMaterial.getTarget($this, '.dialog');

        $this.is('a') ? e.preventDefault() : '';

        Plugin.call($target, 'toggle', this);
    });

}(jQuery);