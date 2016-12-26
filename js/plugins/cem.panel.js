/** ========================================================================
 *
 * CEMaterial Panels
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Panel = function (el, options) {
        this.el = el;
        this.options = extend({}, Panel.DEFAULTS, el.dataset, options || {});
        this.el['cem.panel'] = this;

        if (this.options.margin && this.options.margin != '0') {
            this.el.classList.add('panel-margin');
        }

        if (this.options.popout && this.options.popout != '0') {
            this.el.classList.add('panel-popout');
        }

        this.updateHeight();
    };

    Panel.VERSION = '0.1.3';

    Panel.DEFAULTS = {
        margin: false,
        popout: false
    };

    Panel.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('panel-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
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
        e = new Event('cem.panel.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.updateHeight();
        this.el.classList.add('panel-visible');

        // Event Show
        e = new Event('cem.panel.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Panel.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.panel.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.updateHeight();
        this.el.classList.remove('panel-visible');

        // Event Hide
        e = new Event('cem.panel.hide', {bubbles: true, cancelable: true, composed: true});
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
        var target = CEMaterial.getTarget(this, '.panel');
        var init = new Panel(target, this.dataset);
        init.toggle(this);
    });

}();