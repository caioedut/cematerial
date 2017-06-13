/** ========================================================================
 *
 * CEMaterial $el (DOM)
 *
 * ======================================================================== */

+function () {
    'use strict';

    var $el = function (query, context) {
        context = context || document;

        if (!(this instanceof $el)) {
            return new $el(query, context);
        }

        if (query instanceof $el) {
            return $el;
        }

        this.context = context;
        this.nodes = [];

        if (document === query) {
            this.nodes.push(document.documentElement);
        } else if (query instanceof Element) {
            this.nodes.push(query);
        } else {
            var nodes = typeof query === 'object' ? query : context.querySelectorAll(query);

            for (var i in nodes) {
                if (nodes[i] instanceof Element) {
                    this.nodes.push(nodes[i]);
                }
            }
        }

        this.length = this.nodes.length;
    };

    $el.prototype = {
        get: function (index) {
            return this.nodes[index];
        },
        first: function () {
            return $el(this.nodes[0]);
        },
        last: function () {
            return $el(this.nodes[this.nodes.length - 1]);
        },
        find: function (query) {
            return $el(query, this.get(0));
        },
        is: function (query) {
            var el = this.get(0);
            if (typeof query === 'string') {
                return el.matches(query);
            } else if (query instanceof Element) {
                return el === query;
            }
            return false;
        },
        each: function (callback) {
            return this.nodes.forEach(callback, this);
        },
        closest: function (query) {
            var el = this.get(0);
            query = typeof query === 'function' ? query.call(this, this) : query;
            return this.is(query) ? this : (!el.parentNode || el.parentNode === document ? $el() : $el(el.parentNode).closest(query));
        },
        offset: function () {
            var el = this.get(0);

            if (!el.getClientRects().length) {
                return {top: 0, left: 0};
            }

            var rect = el.getBoundingClientRect();

            // Make sure element is not hidden (display: none)
            if (rect.width || rect.height) {
                var doc = el.ownerDocument.documentElement;
                return {
                    top: rect.top + window.pageYOffset - doc.clientTop,
                    left: rect.left + window.pageXOffset - doc.clientLeft
                };
            }

            return rect;
        },
        filter: function (query, filter_not) {
            var nodes = [];

            if (typeof query === 'function') {
                Array.prototype.forEach.call(this.nodes, function (node, i) {
                    if (query.call(node, node, i)) {
                        nodes.push(node);
                    }
                });
            } else {
                var arr = query instanceof Array ? query : [query];

                Array.prototype.forEach.call(this.nodes, function (node) {
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

            return $el(nodes);
        },
        not: function (query) {
            return this.filter(query, true);
        },
        children: function () {
            return $el(this.get(0).children);
        },
        siblings: function () {
            var el = this.get(0);
            return $el(el.parentNode).children().not(el);
        },
        parents: function (query) {
            var el = this.get(0),
                parent = el.parentNode,
                nodes = [];

            while (parent && parent !== document) {
                if (query) {
                    if ($el(parent).is(query)) {
                        nodes.push(parent);
                    }
                } else {
                    nodes.push(parent);
                }
                parent = parent.parentNode;
            }

            return $el(nodes);
        }
    };


    // Export Class
    window.$el = $el;

}();

/**
document.on('DOMContentLoaded', function () {

    var el = $el('#buttons');
    var t = el;
    t = el.first();
    t = el.last();
    t = el.find('.md-icon');
    t = el.closest('div');
    t = el.offset();
    t = el.filter('section');
    t = el.not('section');
    t = el.siblings();
    t = el.parents();

    console.log(t);

});
 **/