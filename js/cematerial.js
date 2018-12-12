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

function empty(mixedVar) {
    //  discuss at: http://locutus.io/php/empty/
    // original by: Philippe Baumann
    //    input by: Onno Marsman (https://twitter.com/onnomarsman)
    //    input by: LH
    //    input by: Stoyan Kyosev (http://www.svest.org/)
    // bugfixed by: Kevin van Zonneveld (http://kvz.io)
    // improved by: Onno Marsman (https://twitter.com/onnomarsman)
    // improved by: Francesco
    // improved by: Marc Jansen
    // improved by: Rafał Kukawski (http://blog.kukawski.pl)
    //   example 1: empty(null)
    //   returns 1: true
    //   example 2: empty(undefined)
    //   returns 2: true
    //   example 3: empty([])
    //   returns 3: true
    //   example 4: empty({})
    //   returns 4: true
    //   example 5: empty({'aFunc' : function () { alert('humpty'); } })
    //   returns 5: false
    var undef;
    var key;
    var i;
    var len;
    var emptyValues = [undef, null, false, 0, '', '0', 'null', 'false'];
    for (i = 0, len = emptyValues.length; i < len; i++) {
        if (mixedVar === emptyValues[i]) {
            return true;
        }
    }
    if (typeof mixedVar === 'object') {
        for (key in mixedVar) {
            if (mixedVar.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

(function () {
    if (typeof window.CustomEvent === "function") return false; //If not IE

    function CustomEvent(event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

(function (doc, proto) {
    try { // check if browser supports :scope natively
        doc.querySelector(':scope body');
    } catch (err) { // polyfill native methods if it doesn't
        ['querySelector', 'querySelectorAll'].forEach(function (method) {
            var nativ = proto[method];
            proto[method] = function (selectors) {
                if (/(^|,)\s*:scope/.test(selectors)) { // only if selectors contains :scope
                    var id = this.id; // remember current element id
                    this.id = 'ID_' + Date.now(); // assign new unique id
                    selectors = selectors.replace(/((^|,)\s*):scope/g, '$1#' + this.id); // replace :scope with #ID
                    var result = doc[method](selectors);
                    this.id = id; // restore previous id
                    return result;
                } else {
                    return nativ.call(this, selectors); // use native code for other selectors
                }
            }
        });
    }
})(window.document, Element.prototype);

Element.prototype.matches =
    Element.prototype.matches ||
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {
        }
        return i > -1;
    };

Element.prototype.on = document.on = function (events, child, fn, capture) {
    fn = fn || child;
    events = typeof events === 'string' ? events.split(' ') : events;

    var el = this === document ? document.documentElement : this;

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
        }, capture);
    }

    return this;
};

Element.prototype.css = function (property, value) {
    if (typeof value === 'undefined') {
        return window.getComputedStyle(this, null).getPropertyValue(property);
    }

    property = property.replace(/\-/g, ' ')
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
            return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
        })
        .replace(/\s+/g, '');

    this.style[property] = value;
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

Element.prototype.siblings = function () {
    return NodeList.prototype.not.call(this.parentNode.children, this);
};

Element.prototype.closest = function (selector) {
    selector = typeof selector === 'function' ? selector.call(this, this) : selector;
    return this.is(selector) ? this : (!this.parentNode || this.parentNode === document ? null : this.parentNode.closest(selector));
};

Element.prototype.parents = function (selector) {
    var parents = [];

    var parent = this.parentNode;
    while (parent && parent !== document) {
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

Element.prototype.offset = function () {
    if (!this.getClientRects().length) {
        return {top: 0, left: 0};
    }

    var rect = this.getBoundingClientRect();

    // Make sure element is not hidden (display: none)
    if (rect.width || rect.height) {
        var doc = this.ownerDocument.documentElement;
        return {
            top: rect.top + window.pageYOffset - doc.clientTop,
            left: rect.left + window.pageXOffset - doc.clientLeft
        };
    }

    return rect;
};

NodeList.prototype.forEach = Array.prototype.forEach;

NodeList.prototype.toArray = function () {
    var nodes = [];
    this.forEach(function (node) {
        nodes.push(node);
    });
    return nodes;
};

NodeList.prototype.filter = function (criteria, filter_not) {
    var nodes = [];

    if (typeof criteria === 'function') {
        Array.prototype.forEach.call(this, function (node, i) {
            if (criteria.call(node, node, i)) {
                nodes.push(node);
            }
        });
    } else {
        var arr = criteria instanceof Array ? criteria : [criteria];

        Array.prototype.forEach.call(this, function (node) {
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
    return NodeList.prototype.filter.call(this, sel_or_arr, true);
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
        this.el = el;
        this.options = extend({}, Dialog.DEFAULTS, el.dataset, options || {});
        this.el['cem.dialog'] = this;

        if (!this.el.querySelector('.dialog-content')) {
            var content = document.createElement('div');
            content.classList.add('dialog-content');

            var children = this.el.children;

            for (var i = children.length - 1; i >= 0; i--) {
                content.insertBefore(children[i], content.firstChild);
            }

            this.el.appendChild(content);
        }
    };

    Dialog.VERSION = '0.1.3';

    Dialog.DEFAULTS = {
        autoclose: true,
        keyboard: true
    };

    Dialog.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('dialog-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    };

    Dialog.prototype.show = function (_relatedTarget) {
        var e, // Event handler
            el = this.el;

        // Event Before Show
        e = new CustomEvent('cem.dialog.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        setTimeout(function () {
            el.classList.add('dialog-visible');
        }, 1);

        // Event Show
        e = new CustomEvent('cem.dialog.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Dialog.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new CustomEvent('cem.dialog.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('dialog-visible');

        // Event Hide
        e = new CustomEvent('cem.dialog.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    // Export Class
    window.Dialog = Dialog;

    // Events
    document
        .on('click', '[data-toggle="dialog"]', function () {
            var target = CEMaterial.getTarget(this, '.dialog');
            var init = new Dialog(target, this.dataset);
            init.toggle(this);
        })
        // Autoclose
        .on('click touchstart', '.dialog-visible', function (e) {
            if (this === e.target) {
                var init = this['cem.dialog'] || new Dialog(this);
                if (!empty(init.options.autoclose)) {
                    init.hide();
                }
            }
        })
        // Escape Key
        .on('keydown', function (e) {
            if (e.which == 27) {
                var ar_hide = [];
                document.querySelectorAll('.dialog-visible').forEach(function (node) {
                    var init = node['cem.dialog'] || new Dialog(node);
                    if (!empty(init.options.keyboard)) {
                        ar_hide.push(init);
                    }
                });
                ar_hide.length ? ar_hide.pop().hide() : '';
            }
        })
    ;

}();


/** ========================================================================
 *
 * CEMaterial Modals
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Modal = function (el, options) {
        this.el = el;
        this.options = extend({}, Modal.DEFAULTS, el.dataset, options || {});
        this.el['cem.modal'] = this;
    };

    Modal.VERSION = '0.1.0';

    Modal.DEFAULTS = {};

    Modal.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('modal-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    };

    Modal.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Show
        e = new CustomEvent('cem.modal.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.el.classList.add('modal-visible');

        // Event Show
        e = new CustomEvent('cem.modal.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Modal.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new CustomEvent('cem.modal.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('modal-visible');

        // Event Hide
        e = new CustomEvent('cem.modal.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    // Export Class
    window.Modal = Modal;

    // Events
    document.on('click', '[data-toggle="modal"]', function () {
        var target = CEMaterial.getTarget(this, '.modal');
        var init = new Modal(target, this.dataset);
        init.toggle(this);
    });

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
        this.el = el;
        this.options = extend({}, Dropdown.DEFAULTS, el.dataset, options || {});
        this.el['cem.dropdown'] = this;

        this.body = this.el.querySelector('.dropdown-body');
    };

    Dropdown.VERSION = '0.1.3';

    Dropdown.DEFAULTS = {
        autoclose: true
    };

    Dropdown.prototype.toggle = function (_relatedTarget, e) {
        return this.el.classList.contains('dropdown-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget, e);
    };

    Dropdown.prototype.show = function (_relatedTarget, originalEvent) {
        var e; // Event handler

        // Event Before Show
        e = new CustomEvent('cem.dropdown.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.el.classList.add('dropdown-visible');
        // this.updatePosition();

        // For Context Menu{
        this.updatePosition(originalEvent);

        // Event Show
        e = new CustomEvent('cem.dropdown.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Dropdown.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new CustomEvent('cem.dropdown.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('dropdown-visible');

        // Event Hide
        e = new CustomEvent('cem.dropdown.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Dropdown.prototype.updatePosition = function (e) {
        if (this.body.dataset.nativeClasses) {
            this.body.setAttribute('class', this.body.dataset.nativeClasses);
        } else {
            this.body.dataset.nativeClasses = this.body.classList.toString();
        }

        if (!e) {
            this.body.style.position = '';
            this.body.style.bottom = '';
            this.body.style.right = '';
            this.body.style.top = '';
            this.body.style.left = '';
            return false;
        }

        this.body.style.position = 'fixed';
        this.body.style.bottom = 'auto';
        this.body.style.right = 'auto';
        this.body.style.top = e.pageY + 'px';
        this.body.style.left = e.pageX + 'px';

        // Check horizontal EDGE
        if (document.documentElement.clientWidth - e.clientX < this.body.offsetWidth) {
            this.body.style.left = (e.clientX - this.body.offsetWidth) + 'px';
            this.body.classList.remove('left', 'left-inverse');
            this.body.classList.add('right');
        } else {
            this.body.classList.remove('right', 'right-inverse');
            this.body.classList.add('left');
        }

        // Check vertical EDGE
        if (document.documentElement.clientHeight - e.clientY < this.body.offsetHeight) {
            this.body.style.top = (e.clientY - this.body.offsetHeight) + 'px';
            this.body.classList.remove('top', 'top-inverse');
            this.body.classList.add('bottom');
        } else {
            this.body.classList.remove('bottom', 'bottom-inverse');
            this.body.classList.add('top');
        }
    };

    // Export Class
    window.Dropdown = Dropdown;

    // Events
    document
        .on('click', '[data-toggle="dropdown"]', function () {
            var target = CEMaterial.getTarget(this, '.dropdown');
            var init = new Dropdown(target, this.dataset);
            init.toggle(this);
        })
        // Autoclose
        .on('click touchstart contextmenu', function (e) {
            var parents = e.target.parents('.dropdown-visible');
            var drops = document.querySelectorAll('.dropdown-visible').not(parents);

            drops.forEach(function (node) {
                var init = node['cem.dropdown'] || new Dropdown(node);
                if (!empty(init.options.autoclose)) {
                    init.hide();
                }
            });
        })
        // Context Menu (contextmenu)
        .on('contextmenu', '[data-toggle="contextmenu"]', function (e) {
            var target = CEMaterial.getTarget(this);

            if (!target) {
                target = this.querySelector('.contextmenu');
            }

            if (!target) {
                target = this.querySelector('.dropdown');
            }

            if (target && !e.target.closest('.dropdown-body')) {
                e.preventDefault();
                var init = new Dropdown(target, this.dataset);
                init.show(this, e);
            }
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
        this.el = el;
        this.options = extend({}, Panel.DEFAULTS, el.dataset, options || {});

        if (!empty(this.options.arrow)) {
            this.el.classList.add('panel-arrow');
        }

        if (!empty(this.options.margin)) {
            this.el.classList.add('panel-margin');
        }

        if (!empty(this.options.popout)) {
            this.el.classList.add('panel-popout');
        }

        if (!this.el['cem.panel']) {
            this.updateHeight();
        }

        this.el['cem.panel'] = this;
    };

    Panel.VERSION = '0.1.3';

    Panel.DEFAULTS = {
        arrow: false,
        margin: false,
        popout: false
    };

    Panel.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('panel-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    };

    Panel.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // If has panel group, close PREVIOUS OPENNED PANEL
        var group = this.el.closest('.panel-group');
        if (group) {
            var to_hide = group.querySelector('.panel-visible');
            if (to_hide) {
                var init = to_hide['cem.panel'] || new Panel(to_hide, extend({}, Panel.DEFAULTS, to_hide.dataset));
                init.hide();
            }
        }

        // Event Before Show
        e = new CustomEvent('cem.panel.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.updateHeight();
        this.el.classList.add('panel-visible');

        // Event Show
        e = new CustomEvent('cem.panel.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Panel.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new CustomEvent('cem.panel.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.updateHeight();
        this.el.classList.remove('panel-visible');

        // Event Hide
        e = new CustomEvent('cem.panel.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Panel.prototype.updateHeight = function () {
        this.el.querySelectorAll('.panel-body, .panel-footer').forEach(function (node) {
            node.style.height = node.scrollHeight + 'px';
        });
    };

    // Export Class
    window.Panel = Panel;

    // Events
    document.on('click', '[data-toggle="panel"]', function () {
        var target = CEMaterial.getTarget(this, '.panel');
        var init = new Panel(target, this.dataset);
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
        e = new CustomEvent('cem.sidebar.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        setTimeout(function () {
            that.el.classList.add('layout-sidebar-visible');
        }, 1);

        // Event Show
        e = new CustomEvent('cem.sidebar.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Sidebar.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new CustomEvent('cem.sidebar.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.el.classList.remove('layout-sidebar-visible');

        // Event Hide
        e = new CustomEvent('cem.sidebar.hide', {bubbles: true, cancelable: true, composed: true});
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

            if (!sidebar) {
                return;
            }

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

            if (!sidebar) {
                return;
            }

            var init = sidebar['cem.sidebar'] || new Sidebar(sidebar);

            // GET TRANSLATE X VALUE
            var translate_x = parseInt(sidebar.css('transform').split(',')[4]);

            var is_horizontal = Math.abs(e.swipeOffsetX) > Math.abs(e.swipeOffsetY);
            var is_leftedge = e.swipeFromX - el.offsetLeft < 16;
            var is_righttarget = e.target.closest(sidebar) || e.target === init.backdrop;

            var bl_swipe = is_horizontal && (is_leftedge || is_righttarget);

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

            if (!sidebar) {
                return;
            }

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

            if (!sidebar) {
                return;
            }

            var init = sidebar['cem.sidebar'] || new Sidebar(sidebar);

            var is_horizontal = Math.abs(e.swipeOffsetX) > Math.abs(e.swipeOffsetY);
            var is_leftedge = e.swipeFromX - el.offsetLeft < 16;
            var is_righttarget = e.target.closest(sidebar) || e.target === init.backdrop;

            var bl_swipe = is_horizontal && (is_leftedge || is_righttarget);

            sidebar.classList.remove('layout-sidebar-swiping');
            // sidebar.removeAttribute('style');
            // init.backdrop.removeAttribute('style');

            if (bl_swipe) {
                if (e.swipeOffsetX > 0) {
                    sidebar.classList.add('layout-sidebar-visible');
                    setTimeout(init.show.bind(init), 100);
                } else {
                    init.hide();
                }
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
                var evt = new CustomEvent('swipestart', {bubbles: true, cancelable: true, composed: true});
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
                    evt = new CustomEvent('swipe' + i, {bubbles: true, cancelable: true, composed: true});
                    evt = extend(evt, data.event_params);
                    data.target.dispatchEvent(evt);
                }
            }

            evt = new CustomEvent('swipemove', {bubbles: true, cancelable: true, composed: true});
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
                    var evt = new CustomEvent('swipeend', {bubbles: true, cancelable: true, composed: true});
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
        .on('swipestart', '.tabs-list:not(.tabs-noswipe)', function () {
            var tabs = this.closest('.tabs');

            if (!tabs) {
                return;
            }

            var nav = tabs.querySelector(':scope .tabs-nav');

            if (!nav) {
                return;
            }

            var anchor = nav.querySelector('[data-toggle="tab"]:first-of-type');
            new Tabs(anchor, anchor.dataset);

            var contents = this.querySelectorAll(':scope .tab-content');
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

            var nav = tabs.querySelector(':scope .tabs-nav');

            if (!nav) {
                return;
            }

            var contents = this.querySelectorAll(':scope .tab-content');
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
        .on('swipeend', '.tabs-list:not(.tabs-noswipe)', function () {
            var tabs = this.closest('.tabs');

            if (!tabs) {
                return;
            }

            var nav = tabs.querySelector(':scope .tabs-nav');

            if (!nav) {
                return;
            }

            var contents = this.querySelectorAll(':scope .tab-content');
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


/** ========================================================================
 *
 * CEMaterial Ripple (Waves)
 *
 * ======================================================================== */
+function () {
    document.on('mousedown touchstart', '.waves', function (e) {
        var el = this;

        var posx = el.offset().left,
            posy = el.offset().top,
            width = el.offsetWidth,
            height = el.offsetHeight;

        var ripple = el.querySelector('.ripple');

        if (ripple) {
            el.removeChild(ripple);
        }

        ripple = document.createElement('span');
        ripple.classList.add('ripple');

        // Add ripple element
        el.insertBefore(ripple, el.firstChild);

        // Remove ripple on ending animation
        ripple.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            el.removeChild(ripple);
        });

        // Get bigger
        var size = Math.max(width, height);

        // Get center
        var x = e.pageX - posx - (size / 2),
            y = e.pageY - posy - (size / 2);

        ripple.style.height = size + 'px';
        ripple.style.width = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        setTimeout(function () {
            ripple.classList.add('ripple-animate');
        }, 50);
    });
}();


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
                    color: 'blue-5',
                    onClick: function () {
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


/** ========================================================================
 *
 * CEMaterial Tooltips
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Tooltip = function (el, options) {
        this.el = el;
        this.options = extend({}, Tooltip.DEFAULTS, el.dataset, options || {});

        if (this.el['cem.tooltip']) {
            this.tooltip = this.el['cem.tooltip'].tooltip;
        } else {
            this.tooltip = document.createElement('span');
            this.tooltip.classList.add('tooltip');
        }

        this.el['cem.tooltip'] = this;

        if (this.options.wrap) {
            this.tooltip.classList.add('tooltip-wrap');
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
        e = new CustomEvent('cem.tooltip.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.updateTitle();
        this.updatePosition();

        // Event Show
        e = new CustomEvent('cem.tooltip.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Tooltip.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new CustomEvent('cem.tooltip.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        if (this.tooltip.parentNode) {
            this.tooltip.parentNode.removeChild(this.tooltip);
        }

        // Event Hide
        e = new CustomEvent('cem.tooltip.hide', {bubbles: true, cancelable: true, composed: true});
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

        var offset = this.el.offset();
        var width = this.tooltip.offsetWidth;

        // Offset left (MIN = 0px)
        var left = Math.max(offset.left + (this.el.offsetWidth / 2) - (width / 2), 0);

        // Offset left (MAX = BODY WIDTH - TOOLTIP WIDTH)
        left = Math.min(left, document.body.offsetWidth - width);

        // Update css position
        this.tooltip.style.top = (offset.top + this.el.offsetHeight) + 'px';
        this.tooltip.style.left = left + 'px';

        this.tooltip.classList.add('tooltip-visible');
    };

    // Export Class
    window.Tooltip = Tooltip;

    // Events
    document
        .on('focusin mouseover', '[data-tooltip]', function () {
            var init = this['cem.tooltip'] || new Tooltip(this);
            init.show(this);
        })
        .on('focusout mouseout', '[data-tooltip]', function () {
            var init = this['cem.tooltip'] || new Tooltip(this);
            init.hide(this);
        })
        .on('wheel mousewheel DOMMouseScroll touchstart click', function () {
            document.querySelectorAll('.tooltip-visible').forEach(function (node) {
                node.parentNode.removeChild(node);
            });
        })
    ;

}();


/** ========================================================================
 *
 * CEMaterial Datepicker
 *
 * ======================================================================== */

+function () {
    'use strict';

    // CLASS

    var Datepicker = function (options, input) {
        this.el = document.querySelector('.datepicker-dialog');
        this.options = extend({}, Datepicker.DEFAULTS, options || {});
        this.input = input;

        var date;

        // Date value
        if (this.options.date) {
            date = this.options.date;
        } else if (input && input.value) {
            date = input.value;
        } else {
            date = (new Date()).toISOString();
        }

        this.date = Datepicker.prepareDate(date);
        this.dateBase = Datepicker.prepareDate(this.date);

        this.min = this.options.min ? Datepicker.prepareDate(this.options.min) : null;
        this.max = this.options.max ? Datepicker.prepareDate(this.options.max) : null;

        this.createDatepicker();

        this.dialog = new Dialog(this.el, this.options);
        this.el['cem.datepicker'] = this;

        this.generateDays();
    };

    Datepicker.VERSION = '0.0.2';

    Datepicker.DEFAULTS = {
        color: 'blue-5',
        locale: navigator.language || navigator.languages[0] || 'en-us',
        btnConfirm: 'Ok',
        btnCancel: 'Cancel',
        btnClear: 'Clear',
        min: null,
        max: null
    };

    Datepicker.prepareDate = function (date) {
        // Check if is numeric value
        if (!isNaN(parseFloat(date)) && isFinite(date)) {
            var sum = parseInt(date);
            date = new Date();
            date.setDate(date.getDate() + sum);
        }

        if (date instanceof Date) {
            date = date.toISOString();
        }

        var y, m, d;

        date = date.substr(0, 10).split('/').reverse().join('-').split('-');
        y = parseInt(date[0]);
        m = parseInt(date[1]) - 1;
        d = parseInt(date[2]);

        return Datepicker.getDateNoTimezone(y, m, d);
    };

    Datepicker.getDateNoTimezone = function (y, m, d) {
        // date = date ? (date instanceof Date ? date : new Date(date)) : new Date();
        // var timezone_offset = (new Date()).getTimezoneOffset() * 60000;
        // return (new Date(date.getTime() + timezone_offset));

        var date;

        if (typeof d !== 'undefined') {
            date = new Date(y, m, d);
        } else if (typeof m !== 'undefined') {
            date = new Date(y, m);
        } else if (typeof y !== 'undefined') {
            date = new Date(y);
        } else {
            date = new Date();
        }

        return date;

    };

    Datepicker.prototype.getWeekdays = function () {
        var locale = this.options.locale;
        return [1, 2, 3, 4, 5, 6, 7].map(function (item) {
            return Datepicker.getDateNoTimezone(2017, 0, item).toLocaleDateString(locale, {weekday: 'long'});
        })
    };

    Datepicker.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('dialog-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    };

    Datepicker.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Show
        e = new CustomEvent('cem.datepicker.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.dialog.show(_relatedTarget);

        // Event Show
        e = new CustomEvent('cem.datepicker.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Datepicker.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new CustomEvent('cem.datepicker.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.dialog.hide(_relatedTarget);

        // Event Hide
        e = new CustomEvent('cem.datepicker.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Datepicker.prototype.createDatepicker = function () {
        if (!this.el) {
            this.el = document.createElement('div');
            this.el.classList.add('dialog');
            this.el.classList.add('datepicker-dialog', 'no-select');

            var content = document.createElement('div');
            content.classList.add('dialog-content');

            this.el.appendChild(content);
            document.body.appendChild(this.el);
        }
    };

    Datepicker.prototype.generateDays = function () {
        var today = new Date();
        var html = '';

        html += '' +
            '<div class="dialog-header bg-' + this.options.color + '">' +
            '<a class="datepicker-yearselect">' +
            this.date.getFullYear() +
            '</a>' +
            '<br/>' +
            '<a class="datepicker-date datepicker-active">' +
            this.date.toLocaleDateString(this.options.locale, {weekday: 'short', day: 'numeric', month: 'short'}) +
            '</a>' +
            '</div>' +
            '<div class="dialog-body">' +
            '<div class="grid grid-nowrap grid-middle xs-text-center">' +
            '<button class="grid-col btn btn-circle btn-xl datepicker-dec" type="button">' +
            '<i class="md-icon md-icon-sm">chevron_left</i>' +
            '</button>' +
            '<div class="grid-col col-fill datepicker-month">' +
            this.dateBase.toLocaleDateString(this.options.locale, {month: 'long', year: 'numeric'}) +
            '</div>' +
            '<button class="grid-col btn btn-circle btn-xl datepicker-inc" type="button">' +
            '<i class="md-icon md-icon-sm">chevron_right</i>' +
            '</button>' +
            '</div>' +
            '<div class="datepicker-body">' +
            '<table class="no-shadow">' +
            '<thead>' +
            '<tr class="datepicker-week">';

        this.getWeekdays().forEach(function (item) {
            html += '<th>' + item.substr(0, 1).toUpperCase() + '</th>';
        });

        html += '' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>';

        // Discover date offset and last month day
        var offset_day = Datepicker.getDateNoTimezone(new Date(this.dateBase.getFullYear(), this.dateBase.getMonth(), 1)).getDay();
        var last_day = (new Date((new Date(this.dateBase.getFullYear(), this.dateBase.getMonth() + 1, 1)) - 1)).getDate();

        var i, days = [];

        for (i = 0; i < offset_day; i++) {
            days.push('');
        }

        for (i = 1; i <= last_day; i++) {
            days.push(i);
        }

        for (i in days) {
            var day = days[i];

            if (i % 7 === 0) {
                html += '<tr>';
            }

            if (day > 0) {
                var classes = [];

                var is_today = today.getDate() === day && today.getMonth() === this.dateBase.getMonth() && today.getFullYear() === this.dateBase.getFullYear();
                var is_selectedday = this.date.getDate() === day && this.date.getMonth() === this.dateBase.getMonth() && this.date.getFullYear() === this.dateBase.getFullYear();

                var dt_check = parseInt(this.dateBase.toISOString().substr(0, 8).replace(/\D/g, '') + (day < 10 ? '0' + day : day));

                // Check min date
                if (this.min && dt_check < parseInt(this.min.toISOString().substr(0, 10).replace(/\D/g, ''))) {
                    classes.push('datepicker-disabled');
                }

                // Check max date
                if (this.max && dt_check > parseInt(this.max.toISOString().substr(0, 10).replace(/\D/g, ''))) {
                    classes.push('datepicker-disabled');
                }

                if (is_selectedday) {
                    classes.push('bg-' + this.options.color);
                } else if (is_today) {
                    classes.push('body-2 text-' + this.options.color);
                }

                html += '' +
                    '<td class="datepicker-day">' +
                    '<a class="' + classes.join(' ') + '" data-day="' + day + '">' + day + '</a>' +
                    '</td>';
            } else {
                html += '<td></td>';
            }

            if (i % 7 === 6) {
                html += '</tr>';
            }
        }

        html += '' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>' +
            '</div>' +
            '<div class="dialog-footer">' +
            '<button class="btn btn-flat text-' + this.options.color + ' datepicker-confirm" type="button" data-toggle="dialog">' + this.options.btnConfirm + '</button>' +
            '<button class="btn btn-flat text-' + this.options.color + '" type="button" data-toggle="dialog">' + this.options.btnCancel + '</button>';

        if (this.options.btnClear) {
            html += '<button class="btn btn-flat pull-left text-' + this.options.color + ' datepicker-clear" type="button" data-toggle="dialog">' + this.options.btnClear + '</button>';
        }

        html += '</div>';

        this.el.querySelector('.dialog-content').innerHTML = html;

        var yearlist = this.el.querySelector('.datepicker-yearlist');
        if (yearlist) {
            yearlist.classList.remove('visible');
            this.el.querySelector('.datepicker-active').classList.remove('datepicker-active');
            this.el.querySelector('.datepicker-yearselect').classList.add('datepicker-active');
        }
    };

    Datepicker.prototype.generateYears = function () {
        var yearlist = this.el.querySelector('.datepicker-yearlist');

        if (!yearlist) {
            yearlist = document.createElement('div');
            yearlist.classList.add('datepicker-yearlist');
            this.el.querySelector('.datepicker-body').appendChild(yearlist);
        }

        var year = this.dateBase.getFullYear();
        var min = Math.min(year - 150, (new Date()).getFullYear() - 150);
        var max = Math.max(year + 150, (new Date()).getFullYear() + 150);
        var html = '';

        for (min; min <= max; min++) {
            html += '<a class="datepicker-year ' + (min === year ? 'selected text-' + this.options.color : '') + '" data-year="' + min + '">' + min + '</a>';
        }

        yearlist.innerHTML = html;
        yearlist.scrollTop = yearlist.querySelector('.datepicker-year.selected').offsetTop - (yearlist.clientHeight / 2) + 28;

        yearlist.classList.add('visible');
        this.el.querySelector('.datepicker-active').classList.remove('datepicker-active');
        this.el.querySelector('.datepicker-yearselect').classList.add('datepicker-active');

    };

    // Export Class
    window.Datepicker = Datepicker;

    // Events
    document
        .on('focusin', 'input[data-toggle="datepicker"]', function () {
            var init = new Datepicker(this.dataset, this);
            init.toggle(this);
        })
        .on('click', '[data-toggle="datepicker"]:not(input)', function () {
            var $input = this.is('input') ? this : CEMaterial.getTarget(this);
            var init = new Datepicker(this.dataset, $input);
            init.toggle(this);
        })
        .on('click', '.datepicker-yearselect', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            init.generateYears();
        })
        .on('click', '.datepicker-year', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            init.dateBase.setYear(this.dataset.year);
            init.generateDays();
        })
        .on('click', '.datepicker-date', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            init.dateBase = Datepicker.getDateNoTimezone(init.date);
            init.generateDays();
        })
        .on('click', '.datepicker-dec', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            init.dateBase.setDate(1);
            init.dateBase.setMonth(init.dateBase.getMonth() - 1);
            init.generateDays();
        })
        .on('click', '.datepicker-inc', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            init.dateBase.setDate(1);
            init.dateBase.setMonth(init.dateBase.getMonth() + 1);
            init.generateDays();
        })
        .on('click', '.datepicker-day a:not(.datepicker-disabled)', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            init.date.setDate(this.dataset.day);
            init.date.setMonth(init.dateBase.getMonth());
            init.date.setFullYear(init.dateBase.getFullYear());
            init.generateDays();
        })
        .on('click', '.datepicker-confirm', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            if (init.input) {
                init.input.value = init.date.toLocaleDateString(init.options.locale);
                init.input.dataset.date = init.date.toISOString();
                // Event change
                init.input.dispatchEvent(new CustomEvent('change'));
            }
        })
        .on('click', '.datepicker-clear', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            if (init.input) {
                init.input.value = '';
                delete init.input.dataset.date;
                // Event change
                init.input.dispatchEvent(new CustomEvent('change'));
            }
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

    // Auto initialize Datepicker Plugin (works first animation)
    new Datepicker();

    // @deprecated
    // document.on('DOMNodeInserted', function (e) {
    //     CEMaterial.init(e.target);
    // });

    // Add shadow on scroll
    document.addEventListener('scroll', function (e) {
        var component,
            parent;

        if (e.target === document) {
            return;
        }

        if (e.target.is('.layout-body')) {
            component = '.layout';
        } else if (e.target.is('.dialog-body')) {
            component = '.dialog';
        } else if (e.target.is('.modal-body')) {
            component = '.modal';
        }

        if (component) {
            parent = e.target.closest(component);
            if (parent) {
                var header = parent.querySelector(component + '-header');
                var body = parent.querySelector(component + '-body');

                if (header && body) {
                    if (body.scrollTop) {
                        header.classList.add('raised-xs');
                    } else {
                        header.classList.remove('raised-xs');
                    }
                }
            }
        }
    }, true);

    // Label toggle, text fields
    var texts = '.input:not([type="radio"]):not([type="checkbox"]):not([type="button"])';
    document
        .on('focusin', texts, function () {
            CEMaterial.onFocus(this);
        })
        .on('focusout', texts, function () {
            CEMaterial.onBlur(this);
        })
    ;

    // Text field auto grow
    document.on('input', '.input-autogrow', function () {
        CEMaterial.inputAutoGrow(this);
    });

    // Auto Focus
    document.on('click', '[data-focus]', function () {
        var options = this.dataset,
            target = options.focus,
            delay = options.delay || 100;

        if (target) {
            target = document.querySelector((options.target || '') + ' ' + target);
            if (target) {
                setTimeout(target.focus.bind(target), delay);
            }
        }

    });

});


var CEMaterial = {
    init: function (target) {
        if (target instanceof Node) {
            target.querySelectorAll('.label-float .input')
                .filter(function (node) {
                    return node.value;
                })
                .forEach(function (node) {
                    CEMaterial.onBlur(node);
                });

            target.querySelectorAll('.input-autogrow').forEach(function (node) {
                CEMaterial.inputAutoGrow(node);
            });
        }
    },
    getTarget: function (node, parent) {
        return node.dataset.target ? document.querySelector(node.dataset.target) : node.closest(parent);
    },
    getLabels: function (node) {
        var label = [node.closest('label,.label')];

        if (node.id) {
            label = label.concat(document.querySelectorAll('label[for="' + node.id + '"]').toArray());
        }

        return label.filter(function (node) {
            return node;
        });
    },
    onFocus: function (node) {
        if (node) {
            CEMaterial.getLabels(node).forEach(function (label) {
                label.classList.add('label-active', 'label-focus');
            });
        }
    },
    onBlur: function (node) {
        if (node) {
            // Check LABEL FLOATING
            var value = node.value || '';
            var has_value = value instanceof Array ? value.length : value.trim();

            CEMaterial.getLabels(node).forEach(function (label) {
                label.classList.remove('label-focus');
                has_value ? label.classList.add('label-active') : label.classList.remove('label-active');
            });
        }
    },
    inputAutoGrow: function (node) {
        if (node) {
            if (node.is('textarea')) {
                node.style.height = '';
                node.style.height = node.scrollHeight + 'px';
            } else if (node.is('input') && node.value) {
                node.size = node.value.length;
            }
        }
    }
};