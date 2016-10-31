/** ========================================================================
 *
 * CEMaterial Draggable
 *
 * ======================================================================== */

+function ($) {
    'use strict';

    $(document)
        .on('swipestart', '.draggable', function (e) {
            var $el = $(this);

            var $parents = $(e.target).parentsUntil('.draggable').add($(e.target));
            var $handle = $el.children().filter(function () {
                return $parents.filter($(this)).length;
            });

            $el.addClass('draggable-on').data('handle', $handle);
        })
        .on('mousemove', '.draggable-on', function (e) {
            var $el = $(this);
            var $handle = $(this).data('handle');

            var $parents = $(e.target).parentsUntil('.draggable').add($(e.target));
            var $target = $el.children().filter(function () {
                return $parents.filter($(this)).length;
            });

            if ($target.index() > $handle.index()) {
                $handle.insertAfter($target);
            } else {
                $handle.insertBefore($target);
            }
        })
        .on('swipeend', '.draggable', function () {
            $(this).removeClass('draggable-on');
        })
    ;

}(jQuery);