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

    // SUBMENU CLICK REPLACING HOVER
    app.on('click', '.menu li a', function (e) {
        var el = $(this);
        var target = el.closest('li').find('> ul');

        if (target.length) {
            if (!el.data('toggle')) {
                el
                    .attr('data-toggle', 'menu')
                    .data('target', target)
                ;

                $('.menu-visible').not(el.parents('.menu-visible')).not(target).removeClass('menu-visible');
                target.toggleClass('menu-visible');
                e.stopPropagation();
            }
        }
    });

    // MODAL EVENTS
    app.on('click', '.dialog-visible', function (e) {
        var dialog = $(this);
        var target = $(e.target);

        if (dialog.is(target)) {
            dialog.removeClass('dialog-visible');
        }
    });

    // TABS EVENTS
    app.on('click', '.tabs .tab-list > *', function (e) {
        e.preventDefault();
        var el = $(this);
        var parent = el.closest('.tabs');
        var index = el.data('index');

        if (!index) {
            index = el.index();
        }

        if (el.is('li')) {
            el = el.find('a');
        }

        parent.find('.tab-active').removeClass('tab-active');
        el.addClass('tab-active');

        parent.find('.tab-visible').removeClass('tab-visible');
        parent.find('.tab-content').eq(index).addClass('tab-visible');
    });

    // DATA TOGGLE
    app.on('click', '[data-toggle]', function (e) {
        var el = $(this);
        var action = el.data('toggle').trim();
        var target = CEMaterial.getTarget(el);

        switch (action) {
            case 'sidebar':
                target.toggleClass('sidebar-visible');
                e.stopPropagation();
                break;
            case 'menu':
                $('.menu-visible').not(el.parents('.menu-visible')).not(target).removeClass('menu-visible');
                target.toggleClass('menu-visible');
                e.stopPropagation();
                break;
            case 'dialog':
                target = target.length ? target : el.closest('.dialog');
                target.toggleClass('dialog-visible');

                if (el.data('focus')) {
                    target.one('transitionend', function () {
                        target.find(el.data('focus')).focus();
                    });
                }

                e.stopPropagation();
                break;
            case 'table':
                var checked = el.prop('checked');
                target = target.length ? target : el.closest('table');
                target.find('input[type="checkbox"]').prop('checked', checked);
                e.stopPropagation();
                break;
            case 'panel':
                target = target.length ? target : el.closest('.panel');
                el.closest('.panel-group').find('.panel').not(target).removeClass('panel-visible');
                target.toggleClass('panel-visible');
                e.stopPropagation();
                break;
            default:
                break;
        }
    });

    // CLOSE SIDEBARS/MENUS/DIALOGS ON BODY CLICK (MUST BE THE LAST EVENT)
    doc.on('click', function (e) {
        var target = $(e.target);
        $('.sidebar-visible').not(target.closest('.sidebar-visible')).removeClass('sidebar-visible');
        $('.menu-visible').not(target.closest('.menu-visible')).removeClass('menu-visible');
    });

});


var CEMaterial = {
    init: function (target) {
        CEMaterial.onBlur(target.find('.label-float .input').not(':button').filter(function () {
            return this.value;
        }));
        CEMaterial.inputAutoGrow(target.find('.input-autogrow'));
    },
    getTarget: function (el) {
        if (el.data('target')) {
            return $(el.data('target'));
        } else if (el.attr('href')) {
            return $(el.attr('href'));
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
