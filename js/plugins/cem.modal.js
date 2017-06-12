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
        this.el['cem.modal'] = this;
    };

    Modal.VERSION = '0.1.0';

    Modal.DEFAULTS = {};

    Modal.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('modal-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    };

    Modal.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Show
        e = new CustomEvent('cem.modal.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.el.classList.add('modal-visible');

        // Event Show
        e = new CustomEvent('cem.modal.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Modal.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new CustomEvent('cem.modal.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('modal-visible');

        // Event Hide
        e = new CustomEvent('cem.modal.hide', {bubbles: true, cancelable: true, composed: true});
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