/** ========================================================================
 *
 * CEMaterial Modals
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Modal = function (el, options) {
        this.el = el;
        this.options = extend({}, Modal.DEFAULTS, el.dataset, options || {});

        if (!this.el['cem.modal']) {
            CEMaterial.eventScrollAddShadow(this.el.querySelector('.modal-header'), this.el.querySelector('.modal-body'));
        }

        this.el['cem.modal'] = this;
    };

    Modal.VERSION = '0.1.0';

    Modal.DEFAULTS = {
        focus: false
    };

    Modal.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('modal-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    };

    Modal.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Show
        e = new Event('cem.modal.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.el.classList.add('modal-visible');

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
        e = new Event('cem.modal.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Modal.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.modal.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('modal-visible');

        // Event Hide
        e = new Event('cem.modal.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    // Export Class
    window.Modal = Modal;

    // Events
    document.on('click', '[data-toggle="modal"]', function () {
        var target = CEMaterial.getTarget(this, '.modal');
        var init = new Modal(target, this.dataset);
        init.toggle(this);
    });

}();