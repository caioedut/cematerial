/** ========================================================================
 *
 * CEMaterial Sidebars
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Sidebar = function (el, options) {
        this.options = options || {};
        this.el = el;

        this.el['cem.sidebar'] = this;

        this.backdrop = document.createElement('div');
        this.backdrop.classList.add('layout-sidebar-backdrop');
        this.el.parentNode.insertBefore(this.backdrop, this.el.nextSibling);

        if (this.options.autoclose && this.options.autoclose != '0') {
            this.el.classList.add('sidebar-autoclose');
        } else {
            this.el.classList.remove('sidebar-autoclose');
        }
    };

    Sidebar.VERSION = '0.1.1';

    Sidebar.DEFAULTS = {
        autoclose: true
    };

    Sidebar.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('layout-sidebar-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    };

    Sidebar.prototype.show = function (_relatedTarget) {
        var that = this;
        var e; // Event handler

        // Event Before Show
        e = new Event('cem.sidebar.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        setTimeout(function () {
            that.el.classList.add('layout-sidebar-visible');
        }, 1);

        // Event Show
        e = new Event('cem.sidebar.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Sidebar.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.sidebar.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('layout-sidebar-visible');

        // Event Hide
        e = new Event('cem.sidebar.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    // Events
    document
        .on('click', '[data-toggle="sidebar"]', function () {
            var target = this.dataset.target ? document.querySelector(this.dataset.target) : this.closest('.layout-sidebar');
            target = target || this.closest('.layout').querySelector('.layout-sidebar');
            var init = target['cem.sidebar'] || new Sidebar(target, extend({}, Sidebar.DEFAULTS, target.dataset, this.dataset));
            init.toggle(this);
        })
        // Autoclose
        .on('click', '.layout-sidebar-visible.sidebar-autoclose ~ .layout-sidebar-backdrop', function () {
            var target = this.previousElementSibling;
            var init = target['cem.sidebar'] || new Sidebar(target, extend({}, Sidebar.DEFAULTS, target.dataset));
            init.hide(this);
        })
        // Sidebar Navs
        .on('click', '[data-toggle="nav"]', function () {
            var sidebar = this.closest('.layout-sidebar');
            var init = sidebar['cem.sidebar'] || new Sidebar(sidebar, extend({}, Sidebar.DEFAULTS, sidebar.dataset));
            init.show(this);

            // Sidenav click
            var target = sidebar.querySelector(this.dataset.target);
            if (target) {
                if (target.classList.contains('nav-hidden')) {
                    sidebar.querySelectorAll('.layout-nav').forEach(function (node) {
                        node.classList.add('nav-hidden');
                    });
                    target.classList.remove('nav-hidden');
                } else {
                    sidebar.querySelectorAll('.layout-nav').forEach(function (node) {
                        node.classList.remove('nav-hidden');
                    });
                    target.classList.add('nav-hidden');
                }
            }
        })
    ;


    document
        .on('swipestart', '.layout', function (e) {
            var el = this;
            var sidebar = el.querySelector('.layout-sidebar');
            var init = sidebar['cem.sidebar'] || new Sidebar(sidebar, extend({}, Sidebar.DEFAULTS, sidebar.dataset));

            // GET TRANSLATE X VALUE
            var translate_x = parseInt(window.getComputedStyle(sidebar, null).getPropertyValue('transform').split(',')[4]);

            var is_leftedge = e.swipeFromX - el.offsetLeft < 16;
            var is_righttarget = e.target.closest(sidebar) || e.target === init.backdrop;

            var bl_swipe = is_leftedge || is_righttarget;

            if (bl_swipe) {
                sidebar.classList.add('layout-sidebar-swiping');
                sidebar.dataset.translateX = translate_x;
            }
        })
        .on('swipemove', '.layout', function (e) {
            var el = this;
            var sidebar = el.querySelector('.layout-sidebar');
            var init = sidebar['cem.sidebar'] || new Sidebar(sidebar, extend({}, Sidebar.DEFAULTS, sidebar.dataset));

            var is_horizontal = Math.abs(e.swipeOffsetX) > Math.abs(e.swipeOffsetY);
            var is_leftedge = e.swipeFromX - el.offsetLeft < 16;
            var is_righttarget = e.target.closest(sidebar) || e.target === init.backdrop;

            var bl_swipe = is_horizontal && (is_leftedge || is_righttarget);

            if (bl_swipe) {
                e.preventDefault();

                var translate_x = sidebar.dataset.translateX;

                // Offset (translateX) | MIN = 0 | MAX = SIDEBAR WIDTH
                var width = sidebar.offsetWidth;
                var offset = Math.max(0, Math.min(width, parseInt(translate_x) + parseInt(e.swipeOffsetX)));

                // Backdrop opacity percent
                var opacity = offset / width;

                sidebar.style.transform = 'translateX(' + offset + 'px)';
                init.backdrop.style.opacity = opacity;
            }
        })
        .on('swipeend', '.layout', function (e) {
            var el = this;
            var sidebar = el.querySelector('.layout-sidebar');
            var init = sidebar['cem.sidebar'] || new Sidebar(sidebar, extend({}, Sidebar.DEFAULTS, sidebar.dataset));

            sidebar.classList.remove('layout-sidebar-swiping');
            sidebar.removeAttribute('style');
            init.backdrop.removeAttribute('style');

            var is_horizontal = Math.abs(e.swipeOffsetX) > Math.abs(e.swipeOffsetY);
            var is_leftedge = e.swipeFromX - el.offsetLeft < 16;
            var is_righttarget = e.target.closest(sidebar) || e.target === init.backdrop;

            var bl_swipe = is_horizontal && (is_leftedge || is_righttarget);

            if (bl_swipe) {
                e.swipeDirectionX == 'left' ? init.hide() : init.show();
            }
        })
    ;

}();