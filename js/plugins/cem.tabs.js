/** ========================================================================
 *
 * CEMaterial Tabs
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Tabs = function (el, options) {
        this.el = el;
        this.options = extend({}, Tabs.DEFAULTS, el.dataset, options || {});

        this.parent = this.el.closest('.tabs');
        this.nav = this.el.closest('.tabs-nav');

        if (this.parent) {
            this.list = this.parent.querySelector('.tabs-list');
            this.content = this.list.querySelector(this.options.target);
        } else {
            this.content = document.querySelector(this.options.target);
            this.list = this.content ? this.content.closest('.tabs-list') : null;
        }

        var nav = this.el;

        if (!this.content && this.nav && this.list) {
            var index = 0;
            this.nav.querySelectorAll('[data-toggle="tab"]').forEach(function (node, i) {
                index = node === nav ? i + 1 : index;
            });
            this.content = this.list.querySelector('.tab-content:nth-child(' + index + ')');
        }

        // BAR
        if (this.nav) {
            this.bar = this.nav.querySelector('.tabs-bar');

            if (this.bar) {
                this.updateBar();
            } else {
                this.bar = document.createElement('div');
                this.bar.classList.add('tabs-bar');
                this.updateBar();
                this.nav.insertBefore(this.bar, this.nav.firstChild);
            }
        }

        this.el['cem.tabs'] = this;

        if (this.list) {
            if (empty(this.options.swipe)) {
                this.list.classList.add('tabs-noswipe');
            }
        }
    };

    Tabs.VERSION = '0.1.8';

    Tabs.DEFAULTS = {
        swipe: true
    };

    Tabs.prototype.show = function (_relatedTarget) {
        var that = this;
        var e; // Event handler

        // Event Before Show
        e = new Event('cem.tabs.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        if (this.content) {
            // Hide others navs
            if (this.nav) {
                this.el.siblings().forEach(function (node) {
                    if (node.classList.contains('tab-active')) {
                        var init = node['cem.tabs'] || new Tabs(node);
                        init.hide(that);
                    }
                });
            }

            // Hide Others Contents
            if (this.list) {
                this.content.siblings().forEach(function (node) {
                    if (node.classList.contains('tab-visible')) {
                        node.classList.remove('tab-visible');
                    }
                });
            }

            // Tab Nav
            this.el.classList.add('tab-active');
            this.updateBar();

            // Tab Content
            this.content.classList.add('tab-visible');
        }

        // Event Show
        e = new Event('cem.tabs.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Tabs.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.tabs.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('tab-active');

        // Event Hide
        e = new Event('cem.tabs.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Tabs.prototype.updateBar = function () {
        var active = this.nav.querySelector('.tab-active');

        var pos = {left: active.offsetLeft - this.nav.scrollLeft};
        var scroll = this.nav.scrollLeft;

        var left = scroll + pos.left;

        if (pos.left + active.offsetWidth > this.nav.offsetWidth) {
            this.nav.scrollLeft = left - this.nav.offsetWidth + active.offsetWidth;
        } else if (pos.left < 0) {
            this.nav.scrollLeft = left;
        }

        // Update bar css
        this.bar.style.transform = 'translateX(' + left + 'px)';
        this.bar.style.width = active.offsetWidth + 'px';
    };

    // Export Class
    window.Tabs = Tabs;

    // Events
    document
        .on('click', '[data-toggle="tab"]', function () {
            // var target = this.closest('.tabs');
            var init = new Tabs(this, this.dataset);
            init.show(this);
        })
    // .on('swipestart', '.tabs:not(.tabs-noswipe) .tabs-list', function () {
    //     var tabs = this.closest('.tabs');
    //     var init = tabs['cem.dropdown'] || new Tabs(tabs);
    //
    //     if (!empty(init.options.swipe)) {
    //         init.bar.classList.add('no-transition');
    //         this.querySelector('.tab-visible').classList.add('no-transition');
    //
    //         // GET TRANSLATE X VALUE
    //         init.bar.dataset.translateX = init.bar.style.transform.replace(/\D/g, '');
    //     }
    // })
    // .on('swipemove', '.tabs:not(.tabs-noswipe) .tabs-list', function (e) {
    //     var is_horizontal = Math.abs(e.swipeOffsetX) > Math.abs(e.swipeOffsetY);
    //     var is_parent_scrollable = false;
    //
    //     // Check parent scrollable
    //     e.target.parentsUntil(this).forEach(function (node) {
    //         if (node.scrollWidth > node.offsetWidth) {
    //             is_parent_scrollable = true;
    //         }
    //     });
    //
    //     if (is_horizontal && !is_parent_scrollable) {
    //         var active = this.querySelector('.tab-visible');
    //         var bar = this.closest('.tabs').querySelector('.tabs-bar');
    //
    //         e.preventDefault();
    //
    //         // Move tab content
    //         active.style.marginLeft = e.swipeOffsetX;
    //
    //         // Move tab bar
    //         var translateX = bar.dataset.translateX - (e.swipeOffsetX / this.offsetWidth * 100);
    //         bar.style.transform = 'translateX(' + translateX + 'px)';
    //     }
    // })
    // .on('swipeend', '.tabs:not(.tabs-noswipe) .tabs-list', function (e) {
    //     var is_horizontal = Math.abs(e.swipeOffsetX) > Math.abs(e.swipeOffsetY);
    //     var is_parent_scrollable = false;
    //
    //     // Check parent scrollable
    //     e.target.parentsUntil(this).forEach(function (node) {
    //         if (node.scrollWidth > node.offsetWidth) {
    //             is_parent_scrollable = true;
    //         }
    //     });
    //
    //     var active = this.querySelector('.tab-visible');
    //     var bar = this.closest('.tabs').querySelector('.tabs-bar');
    //
    //     var offset_start = active.offsetWidth * 0.3;
    //     var new_active;
    //
    //     if (is_horizontal && !is_parent_scrollable) {
    //         if (Math.abs(e.swipeOffsetX) > offset_start) {
    //             if (e.swipeOffsetX > 0) {
    //                 new_active = active.previousElementSibling;
    //             } else {
    //                 new_active = active.nextElementSibling;
    //             }
    //         }
    //     }
    //
    //     bar.classList.remove('no-transition');
    //     active.classList.remove('no-transition');
    //
    //     new_active = new_active || active;
    //     this.closest('.tabs')['cem.tabs'].show(new_active);
    //
    //     // Reset tab content
    //     active.style.marginLeft = '';
    // })
    ;

}();