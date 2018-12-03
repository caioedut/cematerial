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

        if (!this.el.querySelector('.dialog-content')) {
            var content = document.createElement('div');
            content.classList.add('dialog-content');

            var children = this.el.children;

            for (var i = children.length - 1; i >= 0; i--) {
                content.insertBefore(children[i], content.firstChild);
            }

            this.el.appendChild(content);
        }
    };

    Dialog.VERSION = '0.1.3';

    Dialog.DEFAULTS = {
        autoclose: true,
        keyboard: true
    };

    Dialog.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('dialog-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    };

    Dialog.prototype.show = function (_relatedTarget) {
        var e, // Event handler
            el = this.el;

        // Event Before Show
        e = new CustomEvent('cem.dialog.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        setTimeout(function () {
            el.classList.add('dialog-visible');
        }, 1);

        // Event Show
        e = new CustomEvent('cem.dialog.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Dialog.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new CustomEvent('cem.dialog.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('dialog-visible');

        // Event Hide
        e = new CustomEvent('cem.dialog.hide', {bubbles: true, cancelable: true, composed: true});
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
        .on('click touchstart', '.dialog-visible', function (e) {
            if (this === e.target) {
                var init = this['cem.dialog'] || new Dialog(this);
                if (!empty(init.options.autoclose)) {
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
                    if (!empty(init.options.keyboard)) {
                        ar_hide.push(init);
                    }
                });
                ar_hide.length ? ar_hide.pop().hide() : '';
            }
        })
    ;

}();