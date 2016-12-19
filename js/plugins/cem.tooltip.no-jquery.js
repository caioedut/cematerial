/** ========================================================================
 *
 * CEMaterial Tooltips
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Tooltip = function (el, options) {
        this.options = options || {};
        this.el = el;

        this.el['cem.tooltip'] = this;

        // Create element
        this.tooltip = document.createElement('span');
        this.tooltip.classList.add('tooltip');

        if (this.options.wrap) {
            this.tooltip.classList.add('tooltip-wrap');
        } else {
            this.tooltip.classList.remove('tooltip-wrap');
        }
    };

    Tooltip.VERSION = '0.1.2';

    Tooltip.DEFAULTS = {
        html: false,
        wrap: false
    };

    Tooltip.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // Close others openned
        document.querySelectorAll('.tooltip-visible').forEach(function (node) {
            node.parentNode.removeChild(node);
        });

        // Event Before Show
        e = new Event('cem.tooltip.beforeShow');
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.updateTitle();
        this.updatePosition();

        // Event Show
        e = new Event('cem.tooltip.show');
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Tooltip.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.tooltip.beforeHide');
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.tooltip.parentNode.removeChild(this.tooltip);

        // Event Hide
        e = new Event('cem.tooltip.hide');
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Tooltip.prototype.updateTitle = function () {
        if (!this.el.dataset.tooltip) {
            this.el.dataset.tooltip = this.el.getAttribute('title');
        }

        var title = this.el.dataset.tooltip;

        // Strip tags
        if (!this.options.html) {
            var tmp = document.createElement('div');
            tmp.innerHTML = title;
            title = tmp.textContent || tmp.innerText;
        }

        this.tooltip.innerHTML = title;
    };

    Tooltip.prototype.updatePosition = function () {
        document.body.appendChild(this.tooltip);

        var offset = {top: this.el.offsetTop, left: this.el.offsetLeft};
        var width = this.tooltip.offsetWidth;

        // Offset left (MIN = 0px)
        var left = Math.max(offset.left + (this.el.offsetWidth / 2) - (width / 2), 0);

        // Offset left (MAX = BODY WIDTH - TOOLTIP WIDTH)
        left = Math.min(left, document.body.offsetWidth - width);

        // Update css position
        this.tooltip.style.top = offset.top + this.el.offsetHeight;
        this.tooltip.style.left = left;
        this.tooltip.classList.add('tooltip-visible');
    };

    // Events
    document
        //focus
        .on('mouseover', '[data-tooltip]', function () {
            var init = this['cem.tooltip'] || new Tooltip(this, extend({}, Tooltip.DEFAULTS, this.dataset));
            init.show(this);
        })
        // blur
        .on('mouseout', '[data-tooltip]', function () {
            var init = this['cem.tooltip'] || new Tooltip(this, extend({}, Tooltip.DEFAULTS, this.dataset));
            init.hide(this);
        })
        // .on('wheel mousewheel DOMMouseScroll touchstart', function () {
        //     document.querySelectorAll('.tooltip-visible').forEach(function (node) {
        //         node.parentNode.removeChild(node);
        //     });
        // })
    ;

}();