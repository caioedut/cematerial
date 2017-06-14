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

        var date, y, m, d;

        if (this.options.date) {
            date = this.options.date;
        } else if (input && input.value) {
            date = input.value;
        } else {
            date = (new Date()).toISOString();
        }

        date = date.substr(0, 10).split('/').reverse().join('-').split('-');
        y = parseInt(date[0]);
        m = parseInt(date[1]) - 1;
        d = parseInt(date[2]);

        this.date = Datepicker.getDateNoTimezone(y, m, d);
        this.dateBase = Datepicker.getDateNoTimezone(y, m, d);

        this.createDatepicker();

        this.dialog = new Dialog(this.el, this.options);
        this.el['cem.datepicker'] = this;

        this.generateDays();
    };

    Datepicker.VERSION = '0.0.2';

    Datepicker.DEFAULTS = {
        color: 'blue-6',
        locale: navigator.language || navigator.languages[0] || 'en-us',
        btnConfirm: 'Ok',
        btnCancel: 'Cancel'
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
            '<button class="btn btn-flat text-' + this.options.color + '" type="button" data-toggle="dialog">' + this.options.btnCancel + '</button>' +
            '</div>';

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
                init.input.value = init.date.toLocaleDateString(init.options.locale);
                init.input.dataset.date = init.date.toISOString();
                // Event change
                init.input.dispatchEvent(new CustomEvent('change'));
            }
        })
    ;

}();