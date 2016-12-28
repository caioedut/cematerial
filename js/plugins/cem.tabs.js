/** ========================================================================
 *
 * CEMaterial Tabs
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Tabs = function (el, options) {
        this.el = el.closest('.tabs');
        this.options = extend({}, Tabs.DEFAULTS, el.dataset, options || {});

        this.list = this.el.querySelector('.tabs-nav');
        this.content = this.el.querySelectorAll('.tabs-list > .tab-content');

        if (this.el['cem.sidebar']) {
            this.bar = this.el['cem.sidebar'].bar;
            this.updateBar();
        } else {
            this.bar = document.createElement('div');
            this.bar.classList.add('tabs-bar');
            this.updateBar();
            this.list.insertBefore(this.bar, this.list.firstChild);
        }

        this.el['cem.tabs'] = this;

        if (!this.options.swipe || this.options.swipe == '0') {
            this.el.classList.add('tabs-noswipe');
        }
    };

    Tabs.VERSION = '0.1.8';

    Tabs.DEFAULTS = {
        swipe: true
    };

    Tabs.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        if (!_relatedTarget) {
            return;
        }

        var handler = _relatedTarget;

        var target,
            nav;

        if (handler.matches('.tab-content')) {
            target = handler;

            var target_index = 0;
            this.el.querySelectorAll('.tab-content').forEach(function (node, i) {
                target_index = node === target ? i : target_index;
            });

            this.list.querySelectorAll('[data-toggle="tab"]').forEach(function (node, i) {
                if (document.querySelector(node.dataset.target) === target || i == target_index) {
                    nav = node;
                }
            });
        } else {
            target = document.querySelector(handler.dataset.target);
            nav = handler;

            if (!target) {
                // Get tab content (target panel) by index
                var nav_index = 0;
                this.list.querySelectorAll('[data-toggle="tab"]').forEach(function (node, i) {
                    nav_index = node === nav ? i + 1 : nav_index;
                });

                target = this.el.querySelector('.tab-content:nth-child(' + nav_index + ')');
            }
        }

        // Close others openned
        this.hide();

        // Event Before Show
        e = new Event('cem.tabs.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        nav.classList.add('tab-active');
        target.classList.add('tab-visible');
        this.updateBar();

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
        this.list.querySelector('.tab-active').classList.remove('tab-active');
        this.el.querySelector('.tab-content.tab-visible').classList.remove('tab-visible');

        // Event Hide
        e = new Event('cem.tabs.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Tabs.prototype.updateBar = function () {
        var active = this.list.querySelector('.tab-active');

        var pos = {left: active.offsetLeft - this.list.scrollLeft};
        var scroll = this.list.scrollLeft;

        var left = scroll + pos.left;

        if (pos.left + active.offsetWidth > this.list.offsetWidth) {
            this.list.scrollLeft = left - this.list.offsetWidth + active.offsetWidth;
            // this.$list.animate({
            //     scrollLeft: left - this.$list.offsetWidth + $active.offsetWidth
            // }, 200);
        } else if (pos.left < 0) {
            this.list.scrollLeft = left;
            // this.$list.animate({
            //     scrollLeft: left
            // }, 200);
        }

        // Update bar css
        this.bar.style.transform = 'translateX(' + left + 'px)';
        this.bar.style.width = active.offsetWidth;
    };

    // Export Class
    window.Tabs = Tabs;

    // Events
    document
        .on('click', '[data-toggle="tab"]', function () {
            var target = this.closest('.tabs');
            var init = new Tabs(target, this.dataset);
            init.show(this);
        })
        .on('swipestart', '.tabs .tabs-list', function () {
            var tabs = this.closest('.tabs');
            var init = tabs['cem.dropdown'] || new Tabs(tabs);

            if (init.options.swipe && init.options.swipe != '0') {
                init.bar.classList.add('no-transition');
                this.querySelector('.tab-visible').classList.add('no-transition');

                // GET TRANSLATE X VALUE
                init.bar.dataset.translateX = init.bar.style.transform.replace(/\D/g, '');
            }
        })
        .on('swipemove', '.tabs:not(.tabs-noswipe) .tabs-list', function (e) {
            var is_horizontal = Math.abs(e.swipeOffsetX) > Math.abs(e.swipeOffsetY);
            var is_parent_scrollable = false;

            // Check parent scrollable
            e.target.parentsUntil(this).forEach(function (node) {
                if (node.scrollWidth > node.offsetWidth) {
                    is_parent_scrollable = true;
                }
            });

            if (is_horizontal && !is_parent_scrollable) {
                var active = this.querySelector('.tab-visible');
                var bar = this.closest('.tabs').querySelector('.tabs-bar');

                e.preventDefault();

                // Move tab content
                active.style.marginLeft = e.swipeOffsetX;

                // Move tab bar
                var translateX = bar.dataset.translateX - (e.swipeOffsetX / this.offsetWidth * 100);
                bar.style.transform = 'translateX(' + translateX + 'px)';
            }
        })
        .on('swipeend', '.tabs:not(.tabs-noswipe) .tabs-list', function (e) {
            var is_horizontal = Math.abs(e.swipeOffsetX) > Math.abs(e.swipeOffsetY);
            var is_parent_scrollable = false;

            // Check parent scrollable
            e.target.parentsUntil(this).forEach(function (node) {
                if (node.scrollWidth > node.offsetWidth) {
                    is_parent_scrollable = true;
                }
            });

            var active = this.querySelector('.tab-visible');
            var bar = this.closest('.tabs').querySelector('.tabs-bar');

            var offset_start = active.offsetWidth * 0.3;
            var new_active;

            if (is_horizontal && !is_parent_scrollable) {
                if (Math.abs(e.swipeOffsetX) > offset_start) {
                    if (e.swipeOffsetX > 0) {
                        new_active = active.previousElementSibling;
                    } else {
                        new_active = active.nextElementSibling;
                    }
                }
            }

            bar.classList.remove('no-transition');
            active.classList.remove('no-transition');

            new_active = new_active || active;
            this.closest('.tabs')['cem.tabs'].show(new_active);

            // Reset tab content
            active.style.marginLeft = '';
        })
    ;

}();