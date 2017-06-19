/** ========================================================================
 *
 * CEMaterial Toasts
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Toast = function (message, options) {
        this.options = extend({}, Toast.DEFAULTS, options || {});
        this.options.message = message;

        this.parent = typeof this.options.parent === 'string' ? document.querySelector(this.options.parent) : this.options.parent;
        this.body = this.parent.querySelector('.layout-toast');

        if (!this.body) {
            this.body = document.createElement('div');
            this.body.classList.add('layout-toast');
            this.body.innerHTML = '<div class="toast"></div>';
            this.parent.appendChild(this.body);
        }

        this.el = this.body.querySelector('.toast');

        if (!this.el) {
            this.el = document.createElement('div');
            this.el.classList.add('toast');
            this.body.appendChild(this.el);
        }

        this.body.appendChild(this.el);
        this.el['cem.toast'] = this;
    };

    Toast.VERSION = '0.0.2';

    Toast.DEFAULTS = {
        duration: 4000,
        parent: 'body > .layout',
        timeout: null
    };

    Toast.prototype.show = function (_relatedTarget) {
        var that = this;
        var e; // Event handler

        // Event Before Show
        e = new CustomEvent('cem.toast.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        if (Toast.DEFAULTS.timeout) {
            clearTimeout(Toast.DEFAULTS.timeout);
        }

        var delay = 1;

        if (this.el.classList.contains('toast-visible')) {
            setTimeout(this.hide.bind(this), 1);
            delay = 400;
        }

        setTimeout(function () {
            that.el.innerHTML = '<div class="toast-body grid grid-middle grid-nowrap"><div class="grid-col col-fill">' + that.options.message + '</div></div>';

            setTimeout(function () {
                that.el.style.marginBottom = (-that.el.offsetHeight) + 'px';
            }, 1);

            if (!empty(that.options.actions)) {
                var body = that.el.querySelector('.toast-body');
                var btn_body = document.createElement('div');

                btn_body.classList.add('grid-col');

                var dft = {
                    color: 'blue-6', onClick: function () {
                    }
                };
                that.options.actions.forEach(function (opts) {
                    opts = extend({}, dft, opts);

                    var btn = document.createElement('button');
                    btn.setAttribute('type', 'button');
                    btn.classList.add('btn', 'btn-flat', 'text-' + opts.color);
                    btn.innerHTML = opts.label;
                    btn.on('click', opts.onClick.bind(btn, that));

                    btn_body.appendChild(btn);
                });

                body.appendChild(btn_body);
            }

            that.el.classList.add('toast-visible');
        }, delay);

        // Check duration
        if (!empty(this.options.duration)) {
            Toast.DEFAULTS.timeout = setTimeout(this.hide.bind(this), this.options.duration);
        }

        // Event Show
        e = new CustomEvent('cem.toast.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Toast.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new CustomEvent('cem.toast.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('toast-visible');

        // Event Hide
        e = new CustomEvent('cem.toast.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    // Export Class
    window.Toast = Toast;

    // Events
    document.on('click', '[data-toggle="toast"][data-toast]', function () {
        var init = new Toast(this.dataset.toast, extend({}, this.dataset, {
            parent: this.closest('.layout')
        }));
        init.show(this);
    });

    window.addEventListener('resize', function () {
        document.querySelectorAll('.toast').forEach(function (node) {
            node.parentNode.removeChild(node);
        });
    });

}();