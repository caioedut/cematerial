/** ========================================================================
 *
 * CEMaterial Waves
 * @deprecated
 *
 * ======================================================================== */

+function ($) {

    'use strict';

    $(document).on('click', '.waves', function (e) {

        var $el = $(this);
        var $wave = $el.find('.waves-body');

        if (!$wave.length) {
            $wave = $('<div class="waves-body"/>').appendTo($el);
        }

        if ($el.hasClass('waves-dark')) {
            $wave.addClass('bg-black');
        }

        var offset_x = e.pageX - $el.offset().left;
        var offset_y = e.pageY - $el.offset().top;

        var size = Math.max($el.outerHeight(), $el.outerWidth()) * 2;

        $wave
            .addClass('no-transition')
            .css({
                top: offset_y,
                left: offset_x,
                opacity: '',
                height: 0,
                width: 0
            });

        setTimeout(function () {
            $wave
                .removeClass('no-transition')
                .css({
                    height: size,
                    width: size
                })
                .one('transitionend', function () {
                    $wave.css('opacity', '0');
                })
            ;
        }, 1);

    });

}(jQuery);