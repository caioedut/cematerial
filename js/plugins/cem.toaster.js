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

        this.parent = this.options.parent == 'string' ? document.querySelector(this.options.parent) : this.options.parent;
        this.body = this.parent.querySelector(':scope > .layout-toast');

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

        // this.el.innerHTML = '<div class="toast-body">' + message + '</div>';

        // if (!this.options.multiple) {
        //     this.body.innerHTML = '';
        // }

        this.body.appendChild(this.el);
        this.el['cem.toast'] = this;
    };

    Toast.VERSION = '0.0.2';

    Toast.DEFAULTS = {
        duration: 3000,
        parent: 'body > .layout',
        multiple: false
    };

    // Toast.prototype.toggle = function (_relatedTarget) {
    //     return this.el.classList.contains('toast-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    // };

    Toast.prototype.show = function (_relatedTarget) {
        var that = this;
        var e; // Event handler

        // Event Before Show
        e = new Event('cem.toast.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        var delay = 1;

        if (this.el.classList.contains('toast-visible')) {
            this.hide();
            delay = 400;
        }

        setTimeout(function () {
            that.el.innerHTML = '<div class="toast-body">' + that.options.message + '</div>';
            that.el.classList.add('toast-visible');
        }, delay);

        // var old_toast = this.body.querySelector('.toast');
        //
        // if (old_toast) {
        //     old_toast['cem.toast'].hide();
        //
        //     setTimeout(function () {
        //         that.el.classList.add('toast-visible');
        //     }, 1000);
        // }

        // Show
        // if (!this.options.multiple) {
        //     console.log("AAA");
        //     var toast = this.body.querySelector('.toast');
        //     console.log(toast)
        //     if (toast) {
        //         toast['cem.toast'].hide();
        //         setTimeout(function () {
        //             that.el.classList.add('toast-visible');
        //         }, 400);
        //     }
        // } else {
        //     setTimeout(function () {
        //         that.el.classList.add('toast-visible');
        //     }, 1);
        // }

        // Check duration
        // if (this.options.duration && this.options.duration != '0') {
        //     setTimeout(this.hide.bind(this), this.options.duration)
        // }

        // Event Show
        e = new Event('cem.toast.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Toast.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.toast.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('toast-visible');

        // Event Hide
        e = new Event('cem.toast.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    // Export Class
    window.Toast = Toast;

    // Events

    document
        .on('click', '[data-toggle="toast"][data-toast]', function () {
            var init = new Toast(this.dataset.toast, extend({}, this.dataset, {
                parent: this.closest('.layout')
            }));
            init.show(this);
        })
    ;

}();