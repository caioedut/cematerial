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
            document.swipe = true;
            document.swipe_params = {
                currentTarget: {value: e.target},
                isStart: {value: false},
                isMove: {value: false},
                isEnd: {value: false},
                startX: {value: e.pageX},
                startY: {value: e.pageY}
            };
        })
        .on(swipe_touch ? 'touchmove' : 'mousemove', function (e) {
            if (!document.swipe) {
                return;
            }

            var evt;

            if (!document.swipe_triggered) {
                document.swipe_triggered = true;

                evt = Object.defineProperties(new Event('swipe', {bubbles: true, cancelable: true, composed: true}),
                    extend({}, document.swipe_params, {
                        target: {value: e.target},
                        isStart: {value: true},
                        pageX: {value: e.pageX},
                        pageY: {value: e.pageY}
                    })
                );

                e.target.dispatchEvent(evt);
            }

            evt = Object.defineProperties(new Event('swipe', {bubbles: true, cancelable: true, composed: true}),
                extend({}, document.swipe_params, {
                    target: {value: e.target},
                    isMove: {value: true},
                    pageX: {value: e.pageX},
                    pageY: {value: e.pageY}
                })
            );

            e.target.dispatchEvent(evt);
        })
        .on(swipe_touch ? 'touchend' : 'mouseup', function (e) {
            if (document.swipe_triggered) {
                var evt = Object.defineProperties(new Event('swipe', {bubbles: true, cancelable: true, composed: true}),
                    extend({}, document.swipe_params, {
                        target: {value: e.target},
                        isEnd: {value: true},
                        pageX: {value: e.pageX},
                        pageY: {value: e.pageY}
                    })
                );
                e.target.dispatchEvent(evt);
            }

            document.swipe = false;
            document.swipe_triggered = false;
        })
    ;

})();