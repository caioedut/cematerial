if (!('flex' in document.documentElement.style)) {
    throw new Error('Your browser does not support flexbox layout');
}

/****************************************************
 *                                                  *
 *              HELPERS AND PROTOTYPIES             *
 *                                                  *
 ****************************************************/

function extend() {
    for (var i = 1; i < arguments.length; i++)
        for (var key in arguments[i])
            if (arguments[i].hasOwnProperty(key))
                arguments[0][key] = arguments[i][key];
    return arguments[0];
}

Element.prototype.on = document.on = function (events, child, fn) {
    fn = fn || child;
    events = typeof events == 'string' ? events.split(' ') : events;

    var el = this;

    for (var i in events) {
        this.addEventListener(events[i], function (e) {
            if (typeof child === 'string' && e.target !== document) {
                var delegate_to = e.target.closest(child);
                if (delegate_to) {
                    el = delegate_to;
                } else {
                    return;
                }
            }
            fn.call(el, e);
        });
    }

    return this;
};

Element.prototype.is = function (node_or_selector) {
    if (typeof node_or_selector === 'string') {
        return this.matches(node_or_selector);
    } else if (node_or_selector instanceof Element) {
        return this === node_or_selector;
    }
    return false;
};

Element.prototype.closest = function (selector) {
    selector = typeof selector === 'function' ? selector.call(this, this) : selector;
    return this.is(selector) ? this : (this.parentNode === document ? null : this.parentNode.closest(selector));
};

Element.prototype.parents = function (selector) {
    var parents = [];

    var parent = this.parentNode;
    while (parent !== document) {
        if (selector) {
            if (parent.matches(selector)) {
                parents.push(parent);
            }
        } else {
            parents.push(parent);
        }
        parent = parent.parentNode;
    }

    return parents;
};

Element.prototype.parentsUntil = function (node_or_selector, include_until) {
    var parents = [];

    var parent = this.parentNode;

    if (typeof node_or_selector === 'string') {
        while (parent !== document && !parent.matches(node_or_selector)) {
            parents.push(parent);
            parent = parent.parentNode;
        }
    } else {
        while (parent !== document && parent !== node_or_selector) {
            parents.push(parent);
            parent = parent.parentNode;
        }
    }

    if (include_until && parent !== document) {
        parents.push(parent);
    }

    return parents;
};

NodeList.prototype.filter = function (criteria, filter_not) {
    var nodes = [];

    if (typeof criteria === 'function') {
        this.forEach(function (node, i) {
            if (criteria.call(node, node, i)) {
                nodes.push(node);
            }
        });
    } else {
        var arr = criteria instanceof Array ? criteria : [criteria];

        this.forEach(function (node) {
            var add_node = !!filter_not;

            arr.forEach(function (filter) {
                if (node.is(filter)) {
                    add_node = !add_node;
                }
            });

            if (add_node) {
                nodes.push(node);
            }
        });
    }

    return nodes;
};

NodeList.prototype.not = function (sel_or_arr) {
    return this.filter(sel_or_arr, true);
};


/****************************************************
 *                                                  *
 *                      PLUGINS                     *
 *                                                  *
 ****************************************************/

/** ========================================================================
 *
 * CEMaterial Dialogs
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Dialog = function (el, options) {
        this.options = options || {};
        this.el = el;

        this.el['cem.dialog'] = this;

        if (this.options.autoclose && this.options.autoclose != '0') {
            this.el.classList.add('dialog-autoclose');
        } else {
            this.el.classList.remove('dialog-autoclose');
        }

        if (this.options.keyboard && this.options.keyboard != '0') {
            this.el.classList.add('dialog-keyboard');
        } else {
            this.el.classList.remove('dialog-keyboard');
        }
    };

    Dialog.VERSION = '0.1.2';

    Dialog.DEFAULTS = {
        autoclose: true,
        focus: false,
        keyboard: true
    };

    Dialog.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('dialog-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    };

    Dialog.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Show
        e = new Event('cem.dialog.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.el.classList.add('dialog-visible');

        // Auto Focus
        if (this.options.focus) {
            var el_focus = this.el.querySelector(this.options.focus);
            if (el_focus && el_focus.focus) {
                setTimeout(function () {
                    el_focus.focus();
                }, 400);
            }
        }

        // Event Show
        e = new Event('cem.dialog.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Dialog.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.dialog.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('dialog-visible');

        // Event Hide
        e = new Event('cem.dialog.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    // Events

    document
        .on('click', '[data-toggle="dialog"]', function () {
            var target = this.dataset.target ? document.querySelector(this.dataset.target) : this.closest('.dialog');
            var init = target['cem.dialog'] || new Dialog(target, extend({}, Dialog.DEFAULTS, target.dataset, this.dataset));
            init.toggle(this);
        })
        // Autoclose
        .on('click', '.dialog-visible.dialog-autoclose', function (e) {
            if (this === e.target) {
                var init = this['cem.dialog'] || new Dialog(this, extend({}, Dialog.DEFAULTS, this.dataset));
                init.hide();
            }
        })
        // Escape Key
        .on('keydown', function (e) {
            if (e.which == 27) {
                var target = document.querySelectorAll('.dialog-visible.dialog-keyboard');
                target.length ? target[target.length - 1]['cem.dialog'].hide() : '';
            }
        })
    ;

}();


/** ========================================================================
 *
 * CEMaterial Dropdowns
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Dropdown = function (el, options) {
        this.options = options || {};
        this.el = el;

        this.el['cem.dropdown'] = this;

        this.body = this.el.querySelector('.dropdown-body');

        if (this.options.autoclose && this.options.autoclose != '0') {
            this.el.classList.add('dropdown-autoclose');
        } else {
            this.el.classList.remove('dropdown-autoclose');
        }
    };

    Dropdown.VERSION = '0.1.2';

    Dropdown.DEFAULTS = {
        autoclose: true
    };

    Dropdown.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('dropdown-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    };

    Dropdown.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Show
        e = new Event('cem.dropdown.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.el.classList.add('dropdown-visible');
        // this.updatePosition();

        // Event Show
        e = new Event('cem.dropdown.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Dropdown.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.dropdown.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('dropdown-visible');

        // Event Hide
        e = new Event('cem.dropdown.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    // Events
    document
        .on('click', '[data-toggle="dropdown"]', function () {
            var target = this.dataset.target ? document.querySelector(this.dataset.target) : this.closest('.dropdown');
            var init = target['cem.dropdown'] || new Dropdown(target, extend({}, Dropdown.DEFAULTS, target.dataset, this.dataset));
            init.toggle(this);
        })
        // Autoclose
        .on('click', function (e) {
            var parents = e.target.parents('.dropdown-visible');
            var drops = document.querySelectorAll('.dropdown-visible.dropdown-autoclose').not(parents);

            drops.forEach(function (el) {
                var init = el['cem.dropdown'] || new Dropdown(el, extend({}, Dropdown.DEFAULTS, el.dataset));
                init.hide();
            });
        })
    ;

}();


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
        var target = this.dataset.target ? document.querySelector(this.dataset.target) : this.closest('.panel');
        var init = target['cem.panel'] || new Panel(target, extend({}, Panel.DEFAULTS, target.dataset, this.dataset));
        init.toggle(this);
    });

}();


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


/** ========================================================================
 *
 * CEMaterial Swipe
 *
 * ======================================================================== */

+(function () {

    var swipe_touch = 'ontouchstart' in document.documentElement;

    // Event creation

    document
        .on(swipe_touch ? 'touchstart' : 'mousedown', function (e) {
            document.swipe = {
                target: e.target,
                pos_x: e.pageX || (e.touches ? e.touches[0].pageX : 0),
                pos_y: e.pageY || (e.touches ? e.touches[0].pageY : 0),
                event_params: {
                    pageX: e.pageX || (e.touches ? e.touches[0].pageX : 0),
                    pageY: e.pageY || (e.touches ? e.touches[0].pageY : 0)
                },
                /**
                 * 0 = No swipe
                 * 1 = Swipe start
                 * 2 = Swipe move
                 */
                status: 1
            };
        })
        .on(swipe_touch ? 'touchmove' : 'mousemove', function (e) {
            if (!document.swipe) {
                return true;
            }

            var data = document.swipe;

            var target_x = e.pageX || (e.touches ? e.touches[0].pageX : 0);
            var target_y = e.pageY || (e.touches ? e.touches[0].pageY : 0);

            data = extend(data, {
                event_params: {
                    direction: {
                        bottom: data.pos_y < target_y,
                        left: data.pos_x > target_x,
                        right: data.pos_x < target_x,
                        top: data.pos_y > target_y
                    },
                    swipeDirectionX: data.event_params.pageX > target_x ? 'left' : 'right',
                    swipeDirectionY: data.event_params.pageY > target_y ? 'top' : 'bottom',
                    swipeFromX: data.pos_x,
                    swipeFromY: data.pos_y,
                    swipeToX: target_x,
                    swipeToY: target_y,
                    swipeOffsetX: target_x - data.pos_x,
                    swipeOffsetY: target_y - data.pos_y,

                    // Default
                    pageX: target_x,
                    pageY: target_y,
                    preventDefault: e.preventDefault
                }
            });

            document.swipe = data;

            if (data.status == 1) {
                // Event swipestart
                var evt = new Event('swipestart', {bubbles: true, cancelable: true, composed: true});
                evt = extend(evt, data.event_params);
                data.target.dispatchEvent(evt);

                data = extend(data, {status: 2});
                document.swipe = data;
            }

            if (data.status != 2) {
                return true;
            }

            // Evets swipeleft, swiperight, swipetop, swipebottom
            for (var i in data.event_params.direction) {
                if (data.event_params.direction[i]) {
                    evt = new Event('swipe' + i, {bubbles: true, cancelable: true, composed: true});
                    evt = extend(evt, data.event_params);
                    data.target.dispatchEvent(evt);
                }
            }

            evt = new Event('swipemove', {bubbles: true, cancelable: true, composed: true});
            evt = extend(evt, data.event_params);
            data.target.dispatchEvent(evt);
        })
        .on(swipe_touch ? 'touchend' : 'mouseup dragend', function () {
            if (!document.swipe) {
                return true;
            }

            var data = document.swipe;

            if (data.status) {
                if (data.status == 2) {
                    var evt = new Event('swipeend', {bubbles: true, cancelable: true, composed: true});
                    evt = extend(evt, data.event_params);
                    data.target.dispatchEvent(evt);
                }

                data = extend(data, {status: 0});
                document.swipe = data;
            }
        })
    ;

})();


/** ========================================================================
 *
 * CEMaterial Tabs
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Tabs = function (el, options) {
        this.options = options || {};
        this.el = el.closest('.tabs');

        this.el['cem.tabs'] = this;

        // Create element
        this.list = this.el.querySelector('.tabs-nav');
        this.content = this.el.querySelectorAll('.tabs-list > .tab-content');

        if (!this.options.swipe || this.options.swipe == '0') {
            this.el.classList.add('tabs-noswipe');
        } else {
            this.el.classList.remove('tabs-noswipe');
        }

        this.bar = document.createElement('div');
        this.bar.classList.add('tabs-bar');
        this.updateBar();
        this.list.insertBefore(this.bar, this.list.firstChild);
    };

    Tabs.VERSION = '0.1.7';

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

            this.list.querySelectorAll('[data-toggle="tab"]').forEach(function (node, i) {
                var target_index = Array.prototype.indexOf.call(node.parentNode, node);
                if (document.querySelector(node.dataset.target) === target || i == target_index) {
                    nav = node;
                }
            });
        } else {
            target = document.querySelector(handler.dataset.target);
            nav = handler;

            if (!target) {
                // Get tab content (target panel) by index
                var nav_index = Array.prototype.indexOf.call(this.list, nav);
                target = this.list.querySelector(':nth-child(' + nav_index + ')');
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

    // Events
    document
        .on('click', '[data-toggle="tab"]', function () {
            var target = this.closest('.tabs');
            var init = target['cem.tabs'] || new Tabs(target, extend({}, Tabs.DEFAULTS, target.dataset, this.dataset));
            init.show(this);
        })
        .on('swipestart', '.tabs:not(.tabs-noswipe) .tabs-list', function () {
            var tabs = this.closest('.tabs');
            var init = tabs['cem.tabs'] || new Tabs(tabs, extend({}, Tabs.DEFAULTS, tabs.dataset));

            init.bar.classList.add('no-transition');
            this.querySelector('.tab-visible').classList.add('no-transition');

            // GET TRANSLATE X VALUE
            init.bar.dataset.translateX = init.bar.style.transform.replace(/\D/g, '');
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


/** ========================================================================
 *
 * CEMaterial Tooltips
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Tooltip = function (el, options) {
        this.options = options || {};
        this.el = el;

        this.el['cem.tooltip'] = this;

        // Create element
        this.tooltip = document.createElement('span');
        this.tooltip.classList.add('tooltip');

        if (this.options.wrap) {
            this.tooltip.classList.add('tooltip-wrap');
        } else {
            this.tooltip.classList.remove('tooltip-wrap');
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

        var offset = {top: this.el.offsetTop, left: this.el.offsetLeft};
        var width = this.tooltip.offsetWidth;

        // Offset left (MIN = 0px)
        var left = Math.max(offset.left + (this.el.offsetWidth / 2) - (width / 2), 0);

        // Offset left (MAX = BODY WIDTH - TOOLTIP WIDTH)
        left = Math.min(left, document.body.offsetWidth - width);

        // Update css position
        this.tooltip.style.top = offset.top + this.el.offsetHeight;
        this.tooltip.style.left = left;
        this.tooltip.classList.add('tooltip-visible');
    };

    // Events
    document
        .on('focusin mouseover', '[data-tooltip]', function () {
            var init = this['cem.tooltip'] || new Tooltip(this, extend({}, Tooltip.DEFAULTS, this.dataset));
            init.show(this);
        })
        .on('focusout mouseout', '[data-tooltip]', function () {
            var init = this['cem.tooltip'] || new Tooltip(this, extend({}, Tooltip.DEFAULTS, this.dataset));
            init.hide(this);
        })
        .on('wheel mousewheel DOMMouseScroll touchstart', function () {
            document.querySelectorAll('.tooltip-visible').forEach(function (node) {
                node.parentNode.removeChild(node);
            });
        })
    ;

}();


/****************************************************
 *                                                  *
 *               CEMATERIAL FUNCTIONS               *
 *                                                  *
 ****************************************************/

document.on('DOMContentLoaded', function () {

    // Prepare and init CEMaterial
    CEMaterial.init(document);
    document.on('DOMNodeInserted', function (e) {
        CEMaterial.init(e.target);
    });

    // Label toggle, text fields
    var texts = '.input:not([type="radio"]):not([type="checkbox"]):not([type="button"])';
    document
        .on('focus', texts, function () {
            CEMaterial.onFocus(this);
        })
        .on('blur', texts, function () {
            CEMaterial.onBlur(this);
        })
    ;

    // Text field auto grow
    document.on('input', '.input-autogrow', function () {
        CEMaterial.inputAutoGrow(this);
    });

    // Table checkbox toggle
    document.on('click', '[data-toggle="table"]', function (e) {
        e.stopPropagation();

        var target = this.dataset.target ? document.querySelector(this.dataset.target) : this.closest('table');
        var checked = this.checked;

        target.querySelectorAll('input[type="checkbox"]').forEach(function (node) {
            node.checked = checked;
        });
    });

});


var CEMaterial = {
    init: function (target) {
        CEMaterial.onBlur(
            target.querySelectorAll('.label-float .input').filter(function (node) {
                return node.value;
            })
        );

        CEMaterial.inputAutoGrow(target.querySelectorAll('.input-autogrow'));
    },
    getTarget: function (node, parent) {
        return node.dataset.target || node.getAttribute('href') || node.closest(parent) || null;
    },
    getLabels: function (node) {
        var label = [node.closest('label,.label')];

        if (node.id) {
            label.push(document.querySelector('label[for="' + node.id + '"]'));
        }

        return label;
    },
    onFocus: function (nodes) {
        if (nodes && nodes.length) {
            nodes.forEach(function (node) {
                CEMaterial.getLabels(node).forEach(function (label) {
                    label.classList.add('label-active', 'label-focus');
                });
            });
        }
    },
    onBlur: function (nodes) {
        if (nodes.length) {
            nodes.forEach(function (node) {
                // Check LABEL FLOATING
                var value = node.value || '';
                var has_value = value instanceof Array ? value.length : value.trim();

                CEMaterial.getLabels(node).forEach(function (label) {
                    label.classList.remove('label-focus');
                    has_value ? label.classList.add('label-active') : label.classList.remove('label-active');
                });
            });
        }
    },
    inputAutoGrow: function (nodes) {
        nodes.forEach(function (node) {
            if (node.is('textarea')) {
                node.style.height = '';
                node.style.height = node.scrollHeight + 'px';
            } else if (node.is('input') && node.value) {
                node.size = node.value.length;
            }
        });
    }
};