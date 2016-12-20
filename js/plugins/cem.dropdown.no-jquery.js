/** ========================================================================
 *
 * CEMaterial Dropdowns
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Dropdown = function (el, options) {
        this.options = options || {};
        this.el = el;

        this.el['cem.dropdown'] = this;

        this.body = this.el.querySelector('.dropdown-body');

        if (this.options.autoclose && this.options.autoclose != '0') {
            this.el.classList.add('dropdown-autoclose');
        } else {
            this.el.classList.remove('dropdown-autoclose');
        }
    };

    Dropdown.VERSION = '0.1.2';

    Dropdown.DEFAULTS = {
        autoclose: true
    };

    Dropdown.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('dropdown-visible') ? this.hide() : this.show(_relatedTarget);
    };

    Dropdown.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Show
        e = new Event('cem.dropdown.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.el.classList.add('dropdown-visible');
        // this.updatePosition();

        // Event Show
        e = new Event('cem.dropdown.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Dropdown.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.dropdown.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('dropdown-visible');

        // Event Hide
        e = new Event('cem.dropdown.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    // Events
    document
        .on('click', '[data-toggle="dropdown"]', function () {
            var target = this.dataset.target ? document.querySelector(this.dataset.target) : this.closest('.dropdown');
            var init = target['cem.dropdown'] || new Dropdown(target, extend({}, Dropdown.DEFAULTS, target.dataset, this.dataset));
            init.toggle(this);
        })
        // Autoclose
        .on('click', function (e) {
            var parents = e.target.parents('.dropdown-visible');
            var drops = document.querySelectorAll('.dropdown-visible.dropdown-autoclose').not(parents);

            drops.forEach(function (el) {
                var init = el['cem.dropdown'] || new Dropdown(el, extend({}, Dropdown.DEFAULTS, el.dataset));
                init.hide();
            });
        })
    ;

}();