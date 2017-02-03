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

        if (this.options.date) {
            this.date = Datepicker.getDateNoTimezone(this.options.date);
        } else {
            var date_check = Datepicker.getDateNoTimezone(input.value);
            if (date_check instanceof Date && isFinite(date_check)) {
                this.date = date_check;
            } else {
                this.date = Datepicker.getDateNoTimezone();
            }
        }

        this.dateBase = Datepicker.getDateNoTimezone(this.date);

        this.createDatepicker();

        this.dialog = new Dialog(this.el, this.options);
        this.el['cem.datepicker'] = this;

        this.generateDays();
    };

    Datepicker.VERSION = '0.0.2';

    Datepicker.DEFAULTS = {
        color: 'blue-6'
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

    Datepicker.LOCALE = navigator.language || navigator.languages[0] || 'en-us';

    Datepicker.STRINGS = {
        'en-us': {
            confirm: 'Ok',
            cancel: 'Cancel'
        },
        'pt-br': {
            confirm: 'Ok',
            cancel: 'Cancelar'
        },
        'es': {
            confirm: 'Ok',
            cancel: 'Cancelar'
        }
    };

    Datepicker.MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (item) {
        return Datepicker.getDateNoTimezone(2017, item, 1).toLocaleDateString(Datepicker.LOCALE, {month: 'long'});
    });

    Datepicker.WEEKDAYS = [1, 2, 3, 4, 5, 6, 7].map(function (item) {
        return Datepicker.getDateNoTimezone(2017, 0, item).toLocaleDateString(Datepicker.LOCALE, {weekday: 'long'});
    });

    Datepicker.prototype.toggle = function (_relatedTarget) {
        return this.el.classList.contains('dialog-visible') ? this.hide(_relatedTarget) : this.show(_relatedTarget);
    };

    Datepicker.prototype.show = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Show
        e = new Event('cem.datepicker.beforeShow', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Show
        this.dialog.show(_relatedTarget);

        // Event Show
        e = new Event('cem.datepicker.show', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Datepicker.prototype.hide = function (_relatedTarget) {
        var e; // Event handler

        // Event Before Hide
        e = new Event('cem.datepicker.beforeHide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);

        // Hide
        this.dialog.hide(_relatedTarget);

        // Event Hide
        e = new Event('cem.datepicker.hide', {bubbles: true, cancelable: true, composed: true});
        e.relatedTarget = _relatedTarget;
        this.el.dispatchEvent(e);
    };

    Datepicker.prototype.createDatepicker = function () {
        if (!this.el) {
            this.el = document.createElement('div');
            this.el.classList.add('dialog');
            this.el.classList.add('datepicker-dialog', 'no-select');
            document.body.appendChild(this.el);
        }
    };

    Datepicker.prototype.generateDays = function () {
        var strings = Datepicker.STRINGS[Datepicker.LOCALE.toLowerCase()] || Datepicker.STRINGS['en-us'];
        var html = '';

        html += '' +
            '<div class="dialog-header bg-' + this.options.color + '">' +
            '<a class="datepicker-yearselect">' +
            this.date.getFullYear() +
            '</a>' +
            '<br/>' +
            '<a class="datepicker-date datepicker-active">' +
            this.date.toLocaleDateString(Datepicker.LOCALE, {weekday: 'short', day: 'numeric', month: 'short'}) +
            '</a>' +
            '</div>' +
            '<div class="dialog-body">' +
            '<div class="grid grid-nowrap grid-middle xs-text-center">' +
            '<button class="grid-col btn btn-circle btn-xl datepicker-dec" type="button">' +
            '<i class="md-icon md-icon-sm">chevron_left</i>' +
            '</button>' +
            '<div class="grid-col col-fill datepicker-month">' +
            this.dateBase.toLocaleDateString(Datepicker.LOCALE, {month: 'long', year: 'numeric'}) +
            '</div>' +
            '<button class="grid-col btn btn-circle btn-xl datepicker-inc" type="button">' +
            '<i class="md-icon md-icon-sm">chevron_right</i>' +
            '</button>' +
            '</div>' +
            '<div class="datepicker-body">' +
            '<table class="no-shadow">' +
            '<thead>' +
            '<tr class="datepicker-week">';

        Datepicker.WEEKDAYS.forEach(function (item) {
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

            if (i % 7 == 0) {
                html += '<tr>';
            }

            if (day > 0) {
                html += '' +
                    '<td class="datepicker-day">' +
                    '<a class="' + (this.date.getDate() == day && this.date.getMonth() == this.dateBase.getMonth() && this.date.getFullYear() == this.dateBase.getFullYear() ? 'bg-' + this.options.color : '') + '" data-day="' + day + '">' + day + '</a>' +
                    '</td>';
            } else {
                html += '<td></td>';
            }

            if (i % 7 == 6) {
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
            '<button class="btn btn-flat text-' + this.options.color + ' datepicker-confirm" type="button" data-toggle="dialog">' + strings.confirm + '</button>' +
            '<button class="btn btn-flat text-' + this.options.color + '" type="button" data-toggle="dialog">' + strings.cancel + '</button>' +
            '</div>';

        this.el.innerHTML = html;

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
            html += '<a class="datepicker-year ' + (min == year ? 'selected text-' + this.options.color : '') + '" data-year="' + min + '">' + min + '</a>';
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
        .on('focusin', '[data-toggle="datepicker"]', function () {
            var init = new Datepicker(this.dataset, this);
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
        .on('click', '.datepicker-day a', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            init.date.setDate(this.dataset.day);
            init.date.setMonth(init.dateBase.getMonth());
            init.date.setFullYear(init.dateBase.getFullYear());
            init.generateDays();
        })
        .on('click', '.datepicker-confirm', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            if (init.input) {
                init.input.value = init.date.toLocaleDateString();
                init.input.dataset.date = init.date.toISOString();
                // Event change
                init.input.dispatchEvent(new Event('change'));
            }
        })
    ;

}();