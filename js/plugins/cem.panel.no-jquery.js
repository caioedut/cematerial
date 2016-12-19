/** ========================================================================
 *
 * CEMaterial Panels
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Panel = function (el, options) {
        this.options = options || {};
        this.el = el;

        this.el['cem.panel'] = this;

        if (this.options.margin && this.options.margin != '0') {
            this.el.classList.add('panel-margin');
        } else {
            this.el.classList.remove('panel-margin');
        }

        if (this.options.popout && this.options.popout != '0') {
            this.el.classList.add('panel-popout');
        } else {
            this.el.classList.remove('panel-popout');
        }

        this.updateHeight();
    };

    Panel.VERSION = '0.1.2';

    Panel.DEFAULTS = {
        margin: false,
        popout: false
    };

    Panel.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('panel-visible') ? this.hide() : this.show(_relatedTarget);
    };

    Panel.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // If has panel group, close PREVIOUS OPENNED PANEL
        var to_hide = this.el.closest('.panel-group').querySelector('.panel-visible');
        if (to_hide) {
            var init = to_hide['cem.panel'] || new Panel(to_hide, extend({}, Panel.DEFAULTS, to_hide.dataset));
            init.hide();
        }

        // Event Before Show
        e = new Event('cem.panel.beforeShow');
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.updateHeight();
        this.el.classList.add('panel-visible');

        // Event Show
        e = new Event('cem.panel.show');
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Panel.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.panel.beforeHide');
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.updateHeight();
        this.el.classList.remove('panel-visible');

        // Event Hide
        e = new Event('cem.panel.hide');
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Panel.prototype.updateHeight = function () {
        this.el.querySelectorAll('.panel-body, .panel-footer').forEach(function (node) {
            var ref = node.cloneNode(true);
            ref.classList.add('panel-clone');
            ref.style.height = 'auto';

            node.parentNode.insertBefore(ref, node.nextSibling);

            var height = ref.offsetHeight;
            ref.parentNode.removeChild(ref);

            node.style.height = height;
        });
    };

    // Events
    document.on('click', '[data-toggle="panel"]', function () {
        var target = this.dataset.target ? document.querySelector(this.dataset.target) : this.closest('.panel');
        var init = target['cem.panel'] || new Panel(target, extend({}, Panel.DEFAULTS, target.dataset, this.dataset));
        init.toggle(this);
    });

}();