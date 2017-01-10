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

        this.createDatepicker();

        this.dialog = new Dialog(this.el, this.options);
        this.el['cem.datepicker'] = this;

        this.generateDays();
    };

    Datepicker.VERSION = '0.0.1';

    Datepicker.DEFAULTS = {
        color: 'teal-6',
        btnConfirm: 'Ok',
        btnCancel: 'Cancel'
    };

    Datepicker.getDateNoTimezone = function (date) {
        date = date ? (date instanceof Date ? date : new Date(date)) : new Date();
        var timezone_offset = (new Date()).getTimezoneOffset() * 60000;
        return (new Date(date.getTime() + timezone_offset));
    };

    Datepicker.LOCALE = navigator.language || navigator.languages[0];

    Datepicker.MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map(function (item) {
        return Datepicker.getDateNoTimezone('2017-' + item + '-01').toLocaleDateString(Datepicker.LOCALE, {month: 'long'});
    });

    Datepicker.WEEKS = ['01', '02', '03', '04', '05', '06', '07'].map(function (item) {
        return Datepicker.getDateNoTimezone('2017-01-' + item).toLocaleDateString(Datepicker.LOCALE, {weekday: 'long'});
    });

    Datepicker.DAYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 17, 18, 19, 30, 31];

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
            this.el.classList.add('datepicker-dialog');
            document.body.appendChild(this.el);
        }
    };

    Datepicker.prototype.generateDays = function () {
        var html = '';

        html += '' +
            '<div class="dialog-header bg-teal-6">' +
            '<a class="datepicker-yearselect">' +
            '' + this.date.getFullYear() +
            '</a>' +
            '<br/>' +
            '<a class="datepicker-date datepicker-active">' +
            '<span>' + this.date.toLocaleDateString(Datepicker.LOCALE, {weekday: 'short'}) + '</span>, <span>' + this.date.toLocaleDateString(Datepicker.LOCALE, {month: 'short'}) + '</span> ' + this.date.getDate() +
            '</a>' +
            '</div>' +
            '<div class="datepicker-body">' +
            '<div class="grid grid-nowrap grid-middle bg-white xs-text-center">' +
            '<button class="grid-col btn btn-flat btn-lg datepicker-dec" type="button">' +
            '<i class="md-icon">chevron_left</i>' +
            '</button>' +
            '<div class="grid-col col-fill datepicker-month">' +
            '<span>' + this.date.toLocaleDateString(Datepicker.LOCALE, {month: 'long'}) + ' ' + this.date.getFullYear() + '</span>' +
            '</div>' +
            '<button class="grid-col btn btn-flat btn-lg datepicker-inc" type="button">' +
            '<i class="md-icon">chevron_right</i>' +
            '</button>' +
            '</div>' +
            '<div class="dialog-body">' +
            '<table class="no-shadow">' +
            '<thead>' +
            '<tr class="datepicker-week">';

        Datepicker.WEEKS.forEach(function (item) {
            html += '<th>' + item.substr(0, 1).toUpperCase() + '</th>';
        });

        html += '' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>';

        // Discover date offset and last month day
        var offset_day = Datepicker.getDateNoTimezone(new Date(this.date.getFullYear(), this.date.getMonth(), 1)).getDay();
        var last_day = (new Date((new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1)) - 1)).getDate();

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
                    '<a class="' + (this.date.getDate() == day ? 'bg-' + this.options.color : '') + '" data-day="' + day + '">' + day + '</a>' +
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
            '<button class="btn btn-flat text-' + this.options.color + '" type="button" data-toggle="dialog">' + this.options.btnCancel + '</button>' +
            '<button class="btn btn-flat text-' + this.options.color + ' datepicker-confirm" type="button" data-toggle="dialog">' + this.options.btnConfirm + '</button>' +
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
            this.el.querySelector('.dialog-body').appendChild(yearlist);
        }

        var year = this.date.getFullYear();
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
            init.date.setYear(this.dataset.year);
            init.generateDays();
        })
        .on('click', '.datepicker-date', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            init.generateDays();
        })
        .on('click', '.datepicker-dec', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            init.date.setDate(1);
            init.date.setMonth(init.date.getMonth() - 1);
            init.generateDays();
        })
        .on('click', '.datepicker-inc', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            init.date.setDate(1);
            init.date.setMonth(init.date.getMonth() + 1);
            init.generateDays();
        })
        .on('click', '.datepicker-day a', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            init.date.setDate(this.dataset.day);
            init.generateDays();
        })
        .on('click', '.datepicker-confirm', function () {
            var init = this.closest('.datepicker-dialog')['cem.datepicker'];
            if (init.input) {
                init.input.value = init.date.toLocaleString(Datepicker.LOCALE, {year: 'numeric', month: '2-digit', day: '2-digit'});
                init.input.dataset.date = init.date.toISOString();
                // Event change
                init.input.dispatchEvent(new Event('change'));
            }
        })
    ;

}();