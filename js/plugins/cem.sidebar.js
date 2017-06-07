/** ========================================================================
 *
 * CEMaterial Sidebars
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Sidebar = function (el, options) {
        this.el = el;
        this.options = extend({}, Sidebar.DEFAULTS, el.dataset, options || {});

        if (this.el['cem.sidebar']) {
            this.backdrop = this.el['cem.sidebar'].backdrop;
        } else {
            this.backdrop = document.createElement('div');
            this.backdrop.classList.add('layout-sidebar-backdrop');
            this.el.parentNode.insertBefore(this.backdrop, this.el.nextSibling);
        }

        this.el['cem.sidebar'] = this;
    };

    Sidebar.VERSION = '0.1.3';

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

    // Export Class
    window.Sidebar = Sidebar;

    // Events
    document
        .on('click', '[data-toggle="sidebar"]', function () {
            var target = CEMaterial.getTarget(this, '.layout-sidebar');
            target = target || this.closest('.layout').querySelector('.layout-sidebar');
            var init = new Sidebar(target, this.dataset);
            init.toggle(this);
        })
        // Autoclose
        .on('click', '.layout-sidebar-visible ~ .layout-sidebar-backdrop', function () {
            var target = this.previousElementSibling;
            var init = target['cem.sidebar'] || new Sidebar(target);
            if (!empty(init.options.autoclose)) {
                init.hide(this);
            }
        })
        // Sidebar Navs
        .on('click', '[data-toggle="nav"]', function () {
            var sidebar = this.closest('.layout-sidebar');
            var init = sidebar['cem.sidebar'] || new Sidebar(sidebar);
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
            if (!window.matchMedia('(max-width: 1023px)').matches) {
                return;
            }

            var el = this;
            var sidebar = el.querySelector('.layout-sidebar');
            var init = sidebar['cem.sidebar'] || new Sidebar(sidebar);

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
            if (!window.matchMedia('(max-width: 1023px)').matches) {
                return;
            }

            var el = this;
            var sidebar = el.querySelector('.layout-sidebar');
            var init = sidebar['cem.sidebar'] || new Sidebar(sidebar);

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
            if (!window.matchMedia('(max-width: 1023px)').matches) {
                return;
            }

            var el = this;
            var sidebar = el.querySelector('.layout-sidebar');
            var init = sidebar['cem.sidebar'] || new Sidebar(sidebar);

            var is_horizontal = Math.abs(e.swipeOffsetX) > Math.abs(e.swipeOffsetY);
            var is_leftedge = e.swipeFromX - el.offsetLeft < 16;
            var is_righttarget = e.target.closest(sidebar) || e.target === init.backdrop;

            var bl_swipe = is_horizontal && (is_leftedge || is_righttarget);

            sidebar.classList.remove('layout-sidebar-swiping');
            sidebar.removeAttribute('style');
            init.backdrop.removeAttribute('style');

            if (bl_swipe) {
                e.swipeOffsetX > 0 ? init.show() : init.hide();
            }
        })
    ;

}();