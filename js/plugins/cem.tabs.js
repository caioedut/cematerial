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

            this.list.classList.add('tabs-processed');
            this.updatePosition();
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
        e = new CustomEvent('cem.tabs.beforeShow', {bubbles: true, cancelable: true, composed: true});
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
            this.updatePosition();
        }

        // Event Show
        e = new CustomEvent('cem.tabs.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Tabs.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new CustomEvent('cem.tabs.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('tab-active');

        // Event Hide
        e = new CustomEvent('cem.tabs.hide', {bubbles: true, cancelable: true, composed: true});
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

    Tabs.prototype.updatePosition = function () {
        var active = this.nav.querySelector('.tab-active');
        var index = 0;

        this.nav.querySelectorAll('[data-toggle="tab"]').forEach(function (node, i) {
            index = node === active ? i : index;
        });

        this.list.querySelector('.tab-content').css('marginLeft', (-100 * index) + '%');
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
        .on('swipestart', '.tabs-list:not(.tabs-noswipe)', function (e) {
            var tabs = this.closest('.tabs');

            if (!tabs) {
                return;
            }

            var nav = tabs.querySelector(':scope > .tabs-nav');

            if (!nav) {
                return;
            }

            var anchor = nav.querySelector('[data-toggle="tab"]:first-of-type');
            var init = new Tabs(anchor, anchor.dataset);

            var contents = this.querySelectorAll(':scope > .tab-content');
            var bar = nav.querySelector('.tabs-bar');
            var first = contents[0];

            first.dataset.offset = parseInt(first.css('margin-left'));
            first.classList.add('no-transition');

            if (bar) {
                bar.dataset.translateX = parseInt(bar.css('transform').split(',')[4]);
                bar.classList.add('no-transition');
            }
        })
        .on('swipemove', '.tabs-list:not(.tabs-noswipe)', function (e) {
            var is_horizontal = Math.abs(e.swipeOffsetX) > Math.abs(e.swipeOffsetY);
            var tabs = this.closest('.tabs');

            if (!is_horizontal || !tabs) {
                return;
            }

            var nav = tabs.querySelector(':scope > .tabs-nav');

            if (!nav) {
                return;
            }

            var contents = this.querySelectorAll(':scope > .tab-content');
            var bar = nav.querySelector('.tabs-bar');
            var first = contents[0];

            var offset = parseInt(first.dataset.offset);

            // Move the tab content
            first.style.marginLeft = (offset + e.swipeOffsetX) + 'px';

            // Move tab bar
            if (bar) {
                var translateX = bar.dataset.translateX - (e.swipeOffsetX / this.offsetWidth * 100 / 2);
                bar.style.transform = 'translateX(' + translateX + 'px)';
            }
        })
        .on('swipeend', '.tabs-list:not(.tabs-noswipe)', function (e) {
            var tabs = this.closest('.tabs');

            if (!tabs) {
                return;
            }

            var nav = tabs.querySelector(':scope > .tabs-nav');

            if (!nav) {
                return;
            }

            var contents = this.querySelectorAll(':scope > .tab-content');
            var bar = nav.querySelector('.tabs-bar');
            var first = contents[0];

            var width = this.offsetWidth;
            var margin = parseInt(first.css('margin-left'));

            var index = Math.abs(Math.round(margin / width));

            if (margin > 0) {
                // index = contents.length - 1;
                index = 0;
            } else if (index >= contents.length) {
                // index = 0;
                index = contents.length - 1;
            }

            first.classList.remove('no-transition');

            if (bar) {
                bar.classList.remove('no-transition');
            }

            var anchor = nav.querySelector('[data-toggle="tab"]:nth-of-type(' + (index + 1) + ')');
            var init = new Tabs(anchor, anchor.dataset);
            init.show(anchor);
        })
    ;
}();