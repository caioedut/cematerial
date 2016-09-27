/** ========================================================================
 *
 * CEMaterial Swipe
 *
 * ======================================================================== */

+(function () {

    var $doc = $(document);
    var swipe_touch = 'ontouchstart' in document.documentElement;

    // Event creation

    $doc
        .on(swipe_touch ? 'touchstart' : 'mousedown', function (e) {
            var data = {
                $target: $(e.target),
                pos_x: e.pageX || (e.originalEvent.touches ? e.originalEvent.touches[0].pageX : 0),
                pos_y: e.pageY || (e.originalEvent.touches ? e.originalEvent.touches[0].pageY : 0),
                event_params: {
                    pageX: e.pageX || (e.originalEvent.touches ? e.originalEvent.touches[0].pageX : 0),
                    pageY: e.pageY || (e.originalEvent.touches ? e.originalEvent.touches[0].pageY : 0)
                },
                /**
                 * 0 = No swipe
                 * 1 = Swipe start
                 * 2 = Swipe move
                 */
                status: 1
            };

            $doc.data('swipe', data);
        })
        .on(swipe_touch ? 'touchmove' : 'mousemove', function (e) {
            if (!$doc.data('swipe')) {
                return true;
            }

            var data = $doc.data('swipe');

            var target_x = e.pageX || (e.originalEvent.touches ? e.originalEvent.touches[0].pageX : 0);
            var target_y = e.pageY || (e.originalEvent.touches ? e.originalEvent.touches[0].pageY : 0);

            data = $.extend(data, {
                event_params: {
                    direction: {
                        bottom: data.pos_y < target_y,
                        left: data.pos_x > target_x,
                        right: data.pos_x < target_x,
                        top: data.pos_y > target_y
                    },
                    swipeDirectionX: data.event_params.pageX > target_x ? 'left' : 'right',
                    swipeDirectionY: data.event_params.pageY > target_y ? 'top' : 'bottom',
                    swipeFromX: data.pos_x,
                    swipeFromY: data.pos_y,
                    swipeToX: target_x,
                    swipeToY: target_y,
                    swipeOffsetX: target_x - data.pos_x,
                    swipeOffsetY: target_y - data.pos_y,

                    // Default
                    pageX: target_x,
                    pageY: target_y,
                    preventDefault: function () {
                        e.preventDefault();
                    }
                }
            });

            $doc.data('swipe', data);

            if (data.status == 1) {
                data.$target.trigger($.Event('swipestart', data.event_params));
                data = $.extend(data, {status: 2});
                $doc.data('swipe', data);
            }

            if (data.status != 2) {
                return true;
            }

            // Evets swipeleft, swiperight, swipetop, swipebottom
            for (var i in data.event_params.direction) {
                if (data.event_params.direction[i]) {
                    data.$target.trigger($.Event('swipe' + i, data.event_params));
                }
            }

            data.$target.trigger($.Event('swipemove', data.event_params));
        })
        .on(swipe_touch ? 'touchend' : 'mouseup dragend', function () {
            if (!$doc.data('swipe')) {
                return true;
            }

            var data = $doc.data('swipe');

            if (data.status) {
                if (data.status == 2) {
                    data.$target.trigger($.Event('swipeend', data.event_params));
                }

                data = $.extend(data, {status: 0});
                $doc.data('swipe', data);
            }
        })
    ;

})();