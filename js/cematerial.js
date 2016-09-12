if (typeof jQuery === 'undefined') {
    throw new Error('CEMaterial requires jQuery');
}

/** ========================================================================
 *
 * CEMaterial Dialogs
 *
 * ======================================================================== */

+function ($) {
    'use strict';

    // CLASS

    var Dialog = function (el, options) {
        var that = this;

        this.options = options || {};
        this.$el = $(el);

        if (this.options.remote) {
            this.$el
                .find('.dialog-content')
                .load(this.options.remote, $.proxy(function () {
                    this.$element.trigger('cem.dialog.loaded');
                }, this))
        }

        if (this.options.autoclose) {
            this.$el.on('click', function (e) {
                var target = $(e.target);
                if (target.is(that.$el)) {
                    that.hide(target);
                }
            });
        }

        if (this.options.keyboard) {
            $(document).on('keydown', function (e) {
                var target = $(e.target);
                if (e.which == 27 && that == Dialog.OPENED[Dialog.OPENED.length - 1]) {
                    that.hide(target);
                }
            });
        }
    };

    Dialog.VERSION = '0.1.0';

    Dialog.DEFAULTS = {
        autoclose: true,
        focus: false,
        keyboard: true
    };

    Dialog.OPENED = [];

    Dialog.prototype.toggle = function (_relatedTarget) {
        return this.$el.hasClass('dialog-visible') ? this.hide() : this.show(_relatedTarget);
    };

    Dialog.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.dialog.beforeShow', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Show dialog
        this.$el.addClass('dialog-visible');

        // Focus
        if (this.options.focus) {
            this.$el.find(this.options.focus).focus();
        }

        // Add to Dialog.OPENED
        var last = Dialog.OPENED[Dialog.OPENED.length - 1];
        if (this != last) {
            Dialog.OPENED.push(this);
        }

        e = $.Event('cem.dialog.show', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Dialog.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.dialog.beforeHide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Hide dialog
        this.$el.removeClass('dialog-visible');

        // Remove from Dialog.OPENED
        var last = Dialog.OPENED[Dialog.OPENED.length - 1];
        if (this == last) {
            Dialog.OPENED.pop();
        }

        e = $.Event('cem.dialog.hide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    // DIALOG - JQUERY PLUGIN

    function Plugin(action, _relatedTarget) {
        return this.each(function () {
            var $this = $(this);
            var options = $.extend({}, Dialog.DEFAULTS, $this.data(), typeof action == 'object' ? action : {});

            var dialog = $this.data('cem.dialog');

            if (!dialog) {
                dialog = new Dialog(this, options);
                $this.data('cem.dialog', dialog);
            }

            if (typeof action == 'string') {
                dialog[action](_relatedTarget);
            } else if (options.show) {
                dialog.show(_relatedTarget);
            }
        });
    }

    $.fn.dialog = Plugin;
    $.fn.dialog.Constructor = Dialog;

    // DIALOG - DATA API
    $(document).on('click', '[data-toggle="dialog"]', function (e) {
        var $this = $(this);
        var $target = CEMaterial.getTarget($this, '.dialog');

        $this.is('a') ? e.preventDefault() : '';

        Plugin.call($target, 'toggle', this);
    });

}(jQuery);


/** ========================================================================
 *
 * CEMaterial Panels
 *
 * ======================================================================== */

+function ($) {
    'use strict';

    // CLASS

    var Panel = function (el, options) {
        this.options = options || {};
        this.$el = $(el);

        if (this.options.margin) {
            this.$el.removeClass('panel-nomargin');
        } else {
            this.$el.addClass('panel-nomargin');
        }

        if (this.options.scale) {
            this.$el.removeClass('panel-noscale');
        } else {
            this.$el.addClass('panel-noscale');
        }
    };

    Panel.VERSION = '0.1.0';

    Panel.DEFAULTS = {
        margin: true,
        scale: true
    };

    Panel.prototype.toggle = function (_relatedTarget) {
        return this.$el.hasClass('panel-visible') ? this.hide() : this.show(_relatedTarget);
    };

    Panel.prototype.show = function (_relatedTarget) {
        var that = this;
        var e; // Event handler

        // If has panel group, close PREVIOUS OPENNED PANEL
        this.$el.closest('.panel-group').find('.panel.panel-visible').panel('hide');

        e = $.Event('cem.panel.beforeShow', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Show panel
        this.$el.find('.panel-body, .panel-footer').finish().slideDown(200, function () {
            e = $.Event('cem.panel.show', {relatedTarget: _relatedTarget});
            that.$el.trigger(e);
        });
        this.$el.addClass('panel-processed panel-visible');
    };

    Panel.prototype.hide = function (_relatedTarget) {
        var that = this;
        var e; // Event handler

        e = $.Event('cem.panel.beforeHide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Hide panel
        this.$el.find('.panel-body, .panel-footer').finish().slideUp(200, function () {
            e = $.Event('cem.panel.hide', {relatedTarget: _relatedTarget});
            that.$el.trigger(e);
        });
        this.$el.addClass('panel-processed').removeClass('panel-visible');
    };

    // PANEL - JQUERY PLUGIN

    function Plugin(action, _relatedTarget) {
        return this.each(function () {
            var $this = $(this);
            var options = $.extend({}, Panel.DEFAULTS, $this.data(), typeof action == 'object' ? action : {});

            var panel = $this.data('cem.panel');

            if (!panel) {
                panel = new Panel(this, options);
                $this.data('cem.panel', panel);
            }

            if (typeof action == 'string') {
                panel[action](_relatedTarget);
            } else if (options.show) {
                panel.show(_relatedTarget);
            }
        });
    }

    $.fn.panel = Plugin;
    $.fn.panel.Constructor = Panel;

    // PANEL - DATA API
    $(document).on('click', '[data-toggle="panel"]', function (e) {
        var $this = $(this);
        var $target = CEMaterial.getTarget($this, '.panel');

        $this.is('a') ? e.preventDefault() : '';

        Plugin.call($target, 'toggle', this);
    });

}(jQuery);


/** ========================================================================
 *
 * CEMaterial Dropdowns
 *
 * ======================================================================== */

+function ($) {
    'use strict';

    // CLASS

    var Dropdown = function (el, options) {
        this.options = options || {};
        this.$el = $(el);

        if (this.options.autoclose) {
            $(document).on('click', function (e) {
                var target = $(e.target);
                $('.dropdown-visible').not(target.parents('.dropdown-visible')).dropdown('hide');
            });
        }
    };

    Dropdown.VERSION = '0.1.0';

    Dropdown.DEFAULTS = {
        autoclose: true
    };

    Dropdown.prototype.toggle = function (_relatedTarget) {
        return this.$el.hasClass('dropdown-visible') ? this.hide() : this.show(_relatedTarget);
    };

    Dropdown.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // If has OTHER OPENNED dropdown, close
        $(document).find('.dropdown.dropdown-visible').not(this.$el.parents('.dropdown-visible')).dropdown('hide');

        e = $.Event('cem.dropdown.beforeShow', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Show dropdown
        this.$el.addClass('dropdown-visible');

        e = $.Event('cem.dropdown.show', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Dropdown.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.dropdown.beforeHide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Hide dropdown
        this.$el.removeClass('dropdown-visible');

        e = $.Event('cem.dropdown.hide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    // DROPDOWN - JQUERY PLUGIN

    function Plugin(action, _relatedTarget) {
        return this.each(function () {
            var $this = $(this);
            var options = $.extend({}, Dropdown.DEFAULTS, $this.data(), typeof action == 'object' ? action : {});

            var dropdown = $this.data('cem.dropdown');

            if (!dropdown) {
                dropdown = new Dropdown(this, options);
                $this.data('cem.dropdown', dropdown);
            }

            if (typeof action == 'string') {
                dropdown[action](_relatedTarget);
            } else if (options.show) {
                dropdown.show(_relatedTarget);
            }
        });
    }

    $.fn.dropdown = Plugin;
    $.fn.dropdown.Constructor = Dropdown;

    // DROPDOWN - DATA API
    $(document).on('click', '[data-toggle="dropdown"]', function (e) {
        var $this = $(this);
        var $target = CEMaterial.getTarget($this, '.dropdown');

        $this.is('a') ? e.preventDefault() : '';

        Plugin.call($target, 'toggle', this);
    });

}(jQuery);


/** ========================================================================
 *
 * CEMaterial Tooltips
 *
 * ======================================================================== */

+function ($) {
    'use strict';

    // CLASS

    var Tooltip = function (el, options) {
        this.options = options || {};
        this.$el = $(el);

        // Create element
        this.$tooltip = $('<span class="tooltip"></span>');

        if (!this.options.wrap) {
            this.$tooltip.addClass('tooltip-nowrap');
        }
    };

    Tooltip.VERSION = '0.1.0';

    Tooltip.DEFAULTS = {
        html: false,
        wrap: false
    };

    Tooltip.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.tooltip.beforeShow', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        this.updateTitle();
        this.updatePosition();

        e = $.Event('cem.tooltip.show', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Tooltip.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.tooltip.beforeHide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Hide tooltip
        this.$tooltip.removeClass('tooltip-visible').remove();

        e = $.Event('cem.tooltip.hide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Tooltip.prototype.updateTitle = function () {
        if (!this.$el.data('tooltip')) {
            this.$el.data('tooltip', this.$el.attr('title'));
        }

        var title = this.$el.data('tooltip');

        // Strip tags
        if (!this.options.html) {
            title = $("<div/>").html(title).text();
        }

        this.$tooltip.html(title);
    };

    Tooltip.prototype.updatePosition = function () {
        this.$tooltip.appendTo('body');

        var offset = this.$el.offset();
        var width = this.$tooltip.outerWidth();

        // Offset left (MIN = 0px)
        var left = Math.max(offset.left + (this.$el.outerWidth() / 2) - (width / 2), 0);

        // Offset left (MAX = BODY WIDTH - TOOLTIP WIDTH)
        left = Math.min(left, $('body').outerWidth() - width);

        // Update css position
        this.$tooltip.css({
            top: offset.top + this.$el.outerHeight(),
            left: left
        }).addClass('tooltip-visible');
    };

    // TOOLTIP - JQUERY PLUGIN

    function Plugin(action, _relatedTarget) {
        return this.each(function () {
            var $this = $(this);
            var options = $.extend({}, Tooltip.DEFAULTS, $this.data(), typeof action == 'object' ? action : {});

            var tooltip = $this.data('cem.tooltip');

            if (!tooltip) {
                tooltip = new Tooltip(this, options);
                $this.data('cem.tooltip', tooltip);
            }

            if (typeof action == 'string') {
                tooltip[action](_relatedTarget);
            } else if (options.show) {
                tooltip.show(_relatedTarget);
            }
        });
    }

    $.fn.tooltip = Plugin;
    $.fn.tooltip.Constructor = Tooltip;

    // TOOLTIP - DATA API
    $(document)
        .on('mouseover focus', '[data-tooltip]', function () {
            Plugin.call($(this), 'show', this);
        })
        .on('mouseleave blur', '[data-tooltip]', function () {
            Plugin.call($(this), 'hide', this);
        });

}(jQuery);


/** ========================================================================
 *
 * CEMaterial Tabs
 *
 * ======================================================================== */

+function ($) {
    'use strict';

    // CLASS

    var Tabs = function (el, options) {
        this.options = options || {};
        this.$el = $(el);

        // Create element
        this.$list = this.$el.find('.tab-list');
        this.$content = this.$el.find('.tab-content');

        this.$bar = $('<div class="tab-bar"></div>');
        this.updateBar();
        this.$list.prepend(this.$bar);
    };

    Tabs.VERSION = '0.1.0';

    Tabs.DEFAULTS = {};

    Tabs.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        var $handler = $(_relatedTarget);

        // If has OTHER ACTIVE tab, hide
        this.$el.tabs('hide');

        e = $.Event('cem.tabs.beforeShow', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        var $target = CEMaterial.getTarget($handler);
        if (!$target.length) {
            // Get tab content (target panel) index
            var index = $handler.data('index');
            if (typeof index == 'undefined') {
                index = $handler.index() - 1;
            }
            $target = this.$content.eq(index);
        }

        $handler.addClass('tab-active');
        $target.addClass('tab-visible');

        this.updateBar();

        e = $.Event('cem.tabs.show', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Tabs.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        e = $.Event('cem.tabs.beforeHide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);

        // Hide tab
        this.$list.find('.tab-active').removeClass('tab-active');
        this.$el.find('.tab-content.tab-visible').removeClass('tab-visible');

        e = $.Event('cem.tab.hide', {relatedTarget: _relatedTarget});
        this.$el.trigger(e);
    };

    Tabs.prototype.updateBar = function () {
        var $active = this.$list.find('.tab-active');

        var pos = $active.position();
        var scroll = this.$list.scrollLeft();
        var left = scroll + pos.left;

        if (pos.left + $active.outerWidth() > this.$list.outerWidth()) {
            this.$list.animate({
                scrollLeft: left - this.$list.outerWidth() + $active.outerWidth()
            }, 200);
        } else if (pos.left < 0) {
            this.$list.animate({
                scrollLeft: left
            }, 200);
        }

        // Update bar css
        this.$bar.css({
            transform: 'translateX(' + left + 'px)',
            width: $active.outerWidth()
        });
    };

    // TABS - JQUERY PLUGIN

    function Plugin(action, _relatedTarget) {
        return this.each(function () {
            var $this = $(this);
            var options = $.extend({}, Tabs.DEFAULTS, $this.data(), typeof action == 'object' ? action : {});

            var tabs = $this.data('cem.tabs');

            if (!tabs) {
                tabs = new Tabs(this, options);
                $this.data('cem.tabs', tabs);
            }

            if (typeof action == 'string') {
                tabs[action](_relatedTarget);
            } else if (options.show) {
                tabs.show(_relatedTarget);
            }
        });
    }

    $.fn.tabs = Plugin;
    $.fn.tabs.Constructor = Tabs;

    // TABS - DATA API
    $(document).on('click', '[data-toggle="tab"]', function (e) {
        var $this = $(this);
        var $target = $this.closest('.tabs');

        $this.is('a') ? e.preventDefault() : '';

        Plugin.call($target, 'show', this);
    });

}(jQuery);


// INIT CEMATERIAL
jQuery(function ($) {
    var doc = $(document);
    CEMaterial.init(doc);
    doc.on('DOMNodeInserted', function (e) {
        CEMaterial.init($(e.target));
    });
});

jQuery(function ($) {
    var doc = $(document);
    var body = $('body');
    var app = body;

    // CLASS BINDING
    app
        .on('focus', '[data-class-focus]', function () {
            CEMaterial.bindClassEvent($(this), 'focus');
        })
        .on('blur', '[data-class-focus]', function () {
            CEMaterial.unbindClassEvent($(this), 'focus');
        })
        .on('mouseenter', '[data-class-hover]', function () {
            CEMaterial.bindClassEvent($(this), 'hover');
        })
        .on('mouseleave', '[data-class-hover]', function () {
            CEMaterial.unbindClassEvent($(this), 'hover');
        })
    ;

    // LABEL TOGGLE
    var texts = 'input:not([type="radio"]):not([type="checkbox"]):not([type="button"]), select, textarea';
    app
        .on('focus', texts, function () {
            CEMaterial.onFocus($(this));
        })
        .on('blur', texts, function () {
            CEMaterial.onBlur($(this));
        })
    ;

    /** // Temporarily disabled
     app
     .on('mouseup mouseleave', '.waves', function () {
            var wave = $(this).find('.waves-box span');

            if (wave.css('opacity') == 0.4) {
                wave.css('opacity', 0);
            } else {
                wave.one('transitionend', function () {
                    wave.css('opacity', 0);
                });
            }
        })
     .on('mousedown', '.waves', function (e) {
            var el = $(this);
            var box = el.find('.waves-box');

            if (!box.length) {
                box = $('<div class="waves-box"><span></span></div>').appendTo(el);
                el.trigger('click');
            }

            var wave = box.find('span').attr('style', 'transition: none;');

            // Get size
            var size = Math.max(el.outerWidth(), el.outerHeight()) * 2;
            var offset = el.offset();

            wave
                .attr('style', '')
                .css({
                    left: e.pageX - offset.left,
                    top: e.pageY - offset.top,
                    height: size,
                    width: size,
                    opacity: .4
                })
            ;

            return true;
        })
     ;
     */

    // TEXTAREA AUTO GROW
    app.on('input', '.input-autogrow', function () {
        var el = $(this);
        CEMaterial.inputAutoGrow(el);
    });

    // DRAG AND DROP UPLOAD
    app
        .on('drag dragstart dragend dragover dragenter dragleave drop', '.filedrop', function (e) {
            e.preventDefault();
            e.stopPropagation();
        })
        .on('dragover dragenter', '.filedrop', function () {
            $(this).addClass('filedrop-dragover');
        })
        .on('dragleave drop', '.filedrop', function () {
            $(this).removeClass('filedrop-dragover');
        })
        .on('drop', '.filedrop', function (e) {
            e.preventDefault();

            var el = $(this);
            var input = el.find('input[type="file"]');
            var files = e.originalEvent.dataTransfer.files || [];
            var accept = (input.attr('accept') || "").split(',');

            input.prop('files', files);
        })
        .on('change', '.filedrop input[type="file"]', function (e) {
            var input = $(this);
            var el = input.closest('.filedrop');
            var files = e.target.files;

            el.find('img, .filedrop-list').remove();

            if (files && files.length) {
                var list = $('<div class="filedrop-list"></div>').prependTo(el);

                for (var i in files) {
                    if (isNaN(i)) {
                        break;
                    }

                    var reader = new FileReader();
                    reader.onload = function (e) {
                        list.append('<img class="img-fluid" src="' + e.target.result + '"/>');
                    };
                    reader.readAsDataURL(files[i]);
                }
            }
        })
    ;

    // DATA TOGGLE
    app.on('click', '[data-toggle]', function (e) {
        var el = $(this);
        var action = el.data('toggle').trim();
        var target = CEMaterial.getTarget(el, '.' + action);

        var event_params = {relatedTarget: el};

        switch (action) {
            case 'sidebar': {
                target.toggleClass('sidebar-visible');
                e.stopPropagation();
                break;
            }
            case 'table': {
                var checked = el.prop('checked');
                target = target.length ? target : el.closest('table');
                target.find('input[type="checkbox"]').prop('checked', checked);
                e.stopPropagation();
                break;
            }
            default:
                break;
        }
    });

    // CLOSE SIDEBARS/DROPDOWNS/DIALOGS ON BODY CLICK (MUST BE THE LAST EVENT)
    doc.on('click', function (e) {
        var target = $(e.target);
        $('.sidebar-visible').not(target.closest('.sidebar-visible')).removeClass('sidebar-visible');
    });

});


var CEMaterial = {
    init: function (target) {
        CEMaterial.onBlur(target.find('.label-float .input').not(':button').filter(function () {
            return this.value;
        }));
        CEMaterial.inputAutoGrow(target.find('.input-autogrow'));
    },
    getTarget: function (el, parent) {
        if (el.data('target')) {
            return $(el.data('target'));
        } else if (el.attr('href') && el.attr('href') != '#') {
            return $(el.attr('href'));
        } else if (parent) {
            return el.closest(parent);
        }

        return new jQuery();
    },
    getLabels: function (el) {
        var label = el.closest('label,.label');
        var id = el.attr('id');

        if (id) {
            label = label.add($('label[for="' + id + '"]'));
        }

        return label;
    },
    onFocus: function (els) {
        if (els.length) {
            els.each(function () {
                var el = $(this);
                var label = CEMaterial.getLabels(el);
                label.addClass('label-active label-focus');
            });
        }
    },
    onBlur: function (els) {
        if (els.length) {
            els.each(function () {
                var el = $(this);
                var label = CEMaterial.getLabels(el).removeClass('label-focus');

                // Check LABEL FLOATING
                var value = el.val() || '';
                var has_value = value instanceof Array ? value.length : value.trim();

                label.toggleClass('label-active', has_value ? true : false);
            });
        }
    },
    bindClassEvent: function (el, event) {
        var clazz = el.data('class-' + event);

        if (!el.hasClass(clazz)) {
            el.data(event + '-remove', clazz);
            el.addClass(clazz);
        }
    },
    unbindClassEvent: function (el, event) {
        el.removeClass(el.data(event + '-remove'));
    },
    inputAutoGrow: function (els) {
        els.each(function () {
            var el = $(this);
            if (el.is('textarea')) {
                this.style.height = '';
                /* Reset the height*/
                this.style.height = this.scrollHeight + 'px';
            } else if (el.is('input') && el.val()) {
                el.prop('size', el.val().length);
            }
        });
    }
};