/** ========================================================================
 *
 * CEMaterial Swipe
 *
 * ======================================================================== */

+(function () {

    var swipe_touch = 'ontouchstart' in document.documentElement;

    // Event creation

    document
        .on(swipe_touch ? 'touchstart' : 'mousedown', function (e) {
            document.swipe = {
                target: e.target,
                pos_x: e.pageX || (e.touches ? e.touches[0].pageX : 0),
                pos_y: e.pageY || (e.touches ? e.touches[0].pageY : 0),
                event_params: {
                    pageX: e.pageX || (e.touches ? e.touches[0].pageX : 0),
                    pageY: e.pageY || (e.touches ? e.touches[0].pageY : 0)
                },
                /**
                 * 0 = No swipe
                 * 1 = Swipe start
                 * 2 = Swipe move
                 */
                status: 1
            };
        })
        .on(swipe_touch ? 'touchmove' : 'mousemove', function (e) {
            if (!document.swipe) {
                return true;
            }

            var data = document.swipe;

            var target_x = e.pageX || (e.touches ? e.touches[0].pageX : 0);
            var target_y = e.pageY || (e.touches ? e.touches[0].pageY : 0);

            data = extend(data, {
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
                    preventDefault: e.preventDefault
                }
            });

            document.swipe = data;

            if (data.status == 1) {
                // Event swipestart
                var evt = new Event('swipestart', {bubbles: true, cancelable: true, composed: true});
                evt = extend(evt, data.event_params);
                data.target.dispatchEvent(evt);

                data = extend(data, {status: 2});
                document.swipe = data;
            }

            if (data.status != 2) {
                return true;
            }

            // Evets swipeleft, swiperight, swipetop, swipebottom
            for (var i in data.event_params.direction) {
                if (data.event_params.direction[i]) {
                    evt = new Event('swipe' + i, {bubbles: true, cancelable: true, composed: true});
                    evt = extend(evt, data.event_params);
                    data.target.dispatchEvent(evt);
                }
            }

            evt = new Event('swipemove', {bubbles: true, cancelable: true, composed: true});
            evt = extend(evt, data.event_params);
            data.target.dispatchEvent(evt);
        })
        .on(swipe_touch ? 'touchend' : 'mouseup dragend', function () {
            if (!document.swipe) {
                return true;
            }

            var data = document.swipe;

            if (data.status) {
                if (data.status == 2) {
                    var evt = new Event('swipeend', {bubbles: true, cancelable: true, composed: true});
                    evt = extend(evt, data.event_params);
                    data.target.dispatchEvent(evt);
                }

                data = extend(data, {status: 0});
                document.swipe = data;
            }
        })
    ;

})();