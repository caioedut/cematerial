/** ========================================================================
 *
 * CEMaterial Dropdowns
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Dropdown = function (el, options) {
        this.el = el;
        this.options = extend({}, Dropdown.DEFAULTS, el.dataset, options || {});
        this.el['cem.dropdown'] = this;

        this.body = this.el.querySelector('.dropdown-body');
    };

    Dropdown.VERSION = '0.1.3';

    Dropdown.DEFAULTS = {
        autoclose: true
    };

    Dropdown.prototype.toggle = function (_relatedTarget, e) {
        return this.el.classList.contains('dropdown-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget, e);
    };

    Dropdown.prototype.show = function (_relatedTarget, originalEvent) {
        var e; // Event handler

        // Event Before Show
        e = new CustomEvent('cem.dropdown.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.el.classList.add('dropdown-visible');
        // this.updatePosition();

        // For Context Menu{
        this.updatePosition(originalEvent);

        // Event Show
        e = new CustomEvent('cem.dropdown.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Dropdown.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new CustomEvent('cem.dropdown.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('dropdown-visible');

        // Event Hide
        e = new CustomEvent('cem.dropdown.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Dropdown.prototype.updatePosition = function (e) {
        if (this.body.dataset.nativeClasses) {
            this.body.setAttribute('class', this.body.dataset.nativeClasses);
        } else {
            this.body.dataset.nativeClasses = this.body.classList.toString();
        }

        if (!e) {
            this.body.style.position = '';
            this.body.style.bottom = '';
            this.body.style.right = '';
            this.body.style.top = '';
            this.body.style.left = '';
            return false;
        }

        this.body.style.position = 'fixed';
        this.body.style.bottom = 'auto';
        this.body.style.right = 'auto';
        this.body.style.top = e.pageY + 'px';
        this.body.style.left = e.pageX + 'px';

        // Check horizontal EDGE
        if (document.documentElement.clientWidth - e.clientX < this.body.offsetWidth) {
            this.body.style.left = (e.clientX - this.body.offsetWidth) + 'px';
            this.body.classList.remove('left', 'left-inverse');
            this.body.classList.add('right');
        } else {
            this.body.classList.remove('right', 'right-inverse');
            this.body.classList.add('left');
        }

        // Check vertical EDGE
        if (document.documentElement.clientHeight - e.clientY < this.body.offsetHeight) {
            this.body.style.top = (e.clientY - this.body.offsetHeight) + 'px';
            this.body.classList.remove('top', 'top-inverse');
            this.body.classList.add('bottom');
        } else {
            this.body.classList.remove('bottom', 'bottom-inverse');
            this.body.classList.add('top');
        }
    };

    // Export Class
    window.Dropdown = Dropdown;

    // Events
    document
        .on('click', '[data-toggle="dropdown"]', function () {
            var target = CEMaterial.getTarget(this, '.dropdown');
            var init = new Dropdown(target, this.dataset);
            init.toggle(this);
        })
        // Autoclose
        .on('click touchstart contextmenu', function (e) {
            var parents = e.target.parents('.dropdown-visible');
            var drops = document.querySelectorAll('.dropdown-visible').not(parents);

            drops.forEach(function (node) {
                var init = node['cem.dropdown'] || new Dropdown(node);
                if (!empty(init.options.autoclose)) {
                    init.hide();
                }
            });
        })
        // Context Menu (contextmenu)
        .on('contextmenu', '[data-toggle="contextmenu"]', function (e) {
            var target = CEMaterial.getTarget(this);

            if (!target) {
                target = this.querySelector('.contextmenu');
            }

            if (!target) {
                target = this.querySelector('.dropdown');
            }

            if (target && !e.target.closest('.dropdown-body')) {
                e.preventDefault();
                var init = new Dropdown(target, this.dataset);
                init.show(this, e);
            }
        })
    ;

}();