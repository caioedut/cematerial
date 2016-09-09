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