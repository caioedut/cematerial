/** ========================================================================
 *
 * CEMaterial Dialogs
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Dialog = function (el, options) {
        this.options = options || {};
        this.el = el;

        this.el['cem.dialog'] = this;

        if (this.options.autoclose && this.options.autoclose != '0') {
            this.el.classList.add('dialog-autoclose');
        } else {
            this.el.classList.remove('dialog-autoclose');
        }

        if (this.options.keyboard && this.options.keyboard != '0') {
            this.el.classList.add('dialog-keyboard');
        } else {
            this.el.classList.remove('dialog-keyboard');
        }
    };

    Dialog.VERSION = '0.1.2';

    Dialog.DEFAULTS = {
        autoclose: true,
        focus: false,
        keyboard: true
    };

    Dialog.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('dialog-visible') ? this.hide() : this.show(_relatedTarget);
    };

    Dialog.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Show
        e = new Event('cem.dialog.beforeShow');
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.el.classList.add('dialog-visible');

        // Auto Focus
        if (this.options.focus) {
            var el_focus = this.el.querySelector(this.options.focus);
            if (el_focus && el_focus.focus) {
                setTimeout(function () {
                    el_focus.focus();
                }, 400);
            }
        }

        // Event Show
        e = new Event('cem.dialog.show');
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Dialog.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.dialog.beforeHide');
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('dialog-visible');

        // Event Hide
        e = new Event('cem.dialog.hide');
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    // Events

    document
        .on('click', '[data-toggle="dialog"]', function () {
            var target = this.dataset.target ? document.querySelector(this.dataset.target) : this.closest('.dialog');
            var init = target['cem.dialog'] || new Dialog(target, extend({}, Dialog.DEFAULTS, target.dataset, this.dataset));
            init.toggle(this);
        })
        // Autoclose
        .on('click', '.dialog-visible.dialog-autoclose', function (e) {
            if (this === e.target) {
                var init = this['cem.dialog'] || new Dialog(this, extend({}, Dialog.DEFAULTS, this.dataset));
                init.hide();
            }
        })
        // Escape Key
        .on('keydown', function (e) {
            if (e.which == 27) {
                var target = document.querySelectorAll('.dialog-visible.dialog-keyboard');
                target.length ? target[target.length - 1]['cem.dialog'].hide() : '';
            }
        })
    ;

}();
