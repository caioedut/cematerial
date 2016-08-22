$(document).on('ready DOMNodeInserted', function (e) {
    CEMaterial.onBlur($(e.target).find('.label-float .input').not(':button').filter(function () {
        return this.value;
    }));
});

jQuery(function ($) {
    var doc = $(document);
    var body = $('body');
    var app = body;

    /**
     * LABEL TOGGLE
     */
    var texts = 'input:not([type="radio"]):not([type="checkbox"]):not([type="button"]), select, textarea';
    app
        .on('focus', texts, function () {
            CEMaterial.onFocus($(this));
        })
        .on('blur', texts, function () {
            CEMaterial.onBlur($(this));
        })
    ;

    app
        .on('click', '.waves', function (e) {
            var elem = $(this);
            var box = elem.find('.waves-box');

            if (!box.length) {
                box = $('<div class="waves-box"><span></span></div>').appendTo(elem);
            }

            var wave = $('<span></span>');
            box.find('span').replaceWith(wave);

            // Get size
            // Diagonal = √ w² + h²
            var size = Math.sqrt(Math.pow(elem.outerWidth(), 2) + Math.pow(elem.outerHeight(), 2)) * 2;
            var offset = elem.offset();

            wave
                .css({
                    left: e.pageX - offset.left,
                    top: e.pageY - offset.top,
                    height: size,
                    width: size,
                    opacity: .4
                })
                .on('transitionend', function () {
                    if ($(this).css('opacity') == 0.4) {
                        wave.css('opacity', 0);
                    }
                })
            ;

            return true;
        });
    ;

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

            var elem = $(this);
            var input = elem.find('input[type="file"]');
            var files = e.originalEvent.dataTransfer.files || [];
            var accept = (input.attr('accept') || "").split(',');

            input.prop('files', files);
        })
        .on('change', '.filedrop input[type="file"]', function (e) {
            var input = $(this);
            var elem = input.closest('.filedrop');
            var files = e.target.files;

            elem.find('img, .filedrop-list').remove();

            if (files && files.length) {
                var list = $('<div class="filedrop-list"></div>').prependTo(elem);

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
        var elem = $(this);
        var target = elem.closest('li').find('> ul');

        if (target.length) {
            if (!elem.data('toggle')) {
                elem
                    .attr('data-toggle', 'menu')
                    .data('target', target)
                ;

                $('.menu-visible').not(elem.parents('.menu-visible')).not(target).removeClass('menu-visible');
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

    // DATA TOGGLE
    app.on('click', '[data-toggle]', function (e) {
        var elem = $(this);
        var action = elem.data('toggle').trim();
        var target = CEMaterial.getTarget(elem);

        switch (action) {
            case 'sidebar':
                target.toggleClass('sidebar-visible');
                e.stopPropagation();
                break;
            case 'menu':
                $('.menu-visible').not(elem.parents('.menu-visible')).not(target).removeClass('menu-visible');
                target.toggleClass('menu-visible');
                e.stopPropagation();
                break;
            case 'dialog':
                target = target.length ? target : elem.closest('.dialog');
                target.toggleClass('dialog-visible');

                if (elem.data('focus')) {
                    target.one('transitionend', function () {
                        target.find(elem.data('focus')).focus();
                    });
                }

                e.stopPropagation();
                break;
            case 'table':
                var checked = elem.prop('checked');
                target = target.length ? target : elem.closest('table');
                target.find('input[type="checkbox"]').prop('checked', checked);
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
    getTarget: function (elem) {
        if (elem.data('target')) {
            return $(elem.data('target'));
        } else if (elem.attr('href')) {
            return $(elem.attr('href'));
        }

        return new jQuery();
    },
    getLabels: function (elem) {
        var label = elem.closest('label,.label');
        var id = elem.attr('id');

        if (id) {
            label = label.add($('label[for="' + id + '"]'));
        }

        return label;
    },
    onFocus: function (elems) {
        if (elems.length) {
            elems.each(function () {
                var elem = $(this);
                var label = CEMaterial.getLabels(elem);
                label.addClass('label-active label-focus');
            });
        }
    },
    onBlur: function (elems) {
        if (elems.length) {
            elems.each(function () {
                var elem = $(this);
                var label = CEMaterial.getLabels(elem).removeClass('label-focus');

                label.removeClass('label-focus');

                /**
                 * Check LABEL FLOATING
                 */
                var value = elem.val() || '';
                var has_value = value instanceof Array ? value.length : value.trim();

                label.toggleClass('label-active', has_value ? true : false);
            });
        }
    }
};