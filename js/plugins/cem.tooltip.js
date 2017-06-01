/** ========================================================================
 *
 * CEMaterial Tooltips
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Tooltip = function (el, options) {
        this.el = el;
        this.options = extend({}, Tooltip.DEFAULTS, el.dataset, options || {});

        if (this.el['cem.tooltip']) {
            this.tooltip = this.el['cem.tooltip'].tooltip;
        } else {
            this.tooltip = document.createElement('span');
            this.tooltip.classList.add('tooltip');
        }

        this.el['cem.tooltip'] = this;

        if (this.options.wrap) {
            this.tooltip.classList.add('tooltip-wrap');
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
        e = new Event('cem.tooltip.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.updateTitle();
        this.updatePosition();

        // Event Show
        e = new Event('cem.tooltip.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Tooltip.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.tooltip.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        if (this.tooltip.parentNode) {
            this.tooltip.parentNode.removeChild(this.tooltip);
        }

        // Event Hide
        e = new Event('cem.tooltip.hide', {bubbles: true, cancelable: true, composed: true});
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

        var offset = this.el.offset();
        var width = this.tooltip.offsetWidth;

        // Offset left (MIN = 0px)
        var left = Math.max(offset.left + (this.el.offsetWidth / 2) - (width / 2), 0);

        // Offset left (MAX = BODY WIDTH - TOOLTIP WIDTH)
        left = Math.min(left, document.body.offsetWidth - width);

        // Update css position
        this.tooltip.style.top = (offset.top + this.el.offsetHeight) + 'px';
        this.tooltip.style.left = left + 'px';

        this.tooltip.classList.add('tooltip-visible');
    };

    // Export Class
    window.Tooltip = Tooltip;

    // Events
    document
        .on('focusin mouseover', '[data-tooltip]', function () {
            var init = this['cem.tooltip'] || new Tooltip(this);
            init.show(this);
        })
        .on('focusout mouseout', '[data-tooltip]', function () {
            var init = this['cem.tooltip'] || new Tooltip(this);
            init.hide(this);
        })
        .on('wheel mousewheel DOMMouseScroll touchstart', function () {
            document.querySelectorAll('.tooltip-visible').forEach(function (node) {
                node.parentNode.removeChild(node);
            });
        })
    ;

}();