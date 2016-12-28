/** ========================================================================
 *
 * CEMaterial Dialogs
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Dialog = function (el, options) {
        this.el = el;
        this.options = extend({}, Dialog.DEFAULTS, el.dataset, options || {});
        this.el['cem.dialog'] = this;
    };

    Dialog.VERSION = '0.1.3';

    Dialog.DEFAULTS = {
        autoclose: true,
        focus: false,
        keyboard: true
    };

    Dialog.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('dialog-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    };

    Dialog.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Show
        e = new Event('cem.dialog.beforeShow', {bubbles: true, cancelable: true, composed: true});
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
        e = new Event('cem.dialog.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Dialog.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.dialog.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('dialog-visible');

        // Event Hide
        e = new Event('cem.dialog.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    // Export Class
    window.Dialog = Dialog;

    // Events
    document
        .on('click', '[data-toggle="dialog"]', function () {
            var target = CEMaterial.getTarget(this, '.dialog');
            var init = new Dialog(target, this.dataset);
            init.toggle(this);
        })
        // Autoclose
        .on('click', '.dialog-visible', function (e) {
            if (this === e.target) {
                var init = this['cem.dialog'] || new Dialog(this);
                if (init.options.autoclose && init.options.autoclose != '0') {
                    init.hide();
                }
            }
        })
        // Escape Key
        .on('keydown', function (e) {
            if (e.which == 27) {
                var ar_hide = [];
                document.querySelectorAll('.dialog-visible').forEach(function (node) {
                    var init = node['cem.dialog'] || new Dialog(node);
                    if (init.options.keyboard && init.options.keyboard != '0') {
                        ar_hide.push(init);
                    }
                });
                ar_hide.length ? ar_hide.pop().hide() : '';
            }
        })
    ;

}();