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
            document.swipe_target = e.target;
        })
        .on(swipe_touch ? 'touchmove' : 'mousemove', function (e) {
            if (!document.swipe) {
                return;
            }

            var evt;

            if (!document.swipe_triggered) {
                console.log('SWIPE START');
                document.swipe_triggered = true;

                evt = Object.defineProperties(new Event('swipe', {bubbles: true, cancelable: true, composed: true}), {
                    is_start: {value: true},
                    is_move: {value: false},
                    is_end: {value: false},
                    target: {value: e.target},
                    currentTarget: {value: document.swipe_target}
                });

                e.target.dispatchEvent(evt);
            }

            console.log('SWIPE MOVE');

            evt = Object.defineProperties(new Event('swipe', {bubbles: true, cancelable: true, composed: true}), {
                is_start: {value: false},
                is_move: {value: true},
                is_end: {value: false},
                target: {value: e.target},
                currentTarget: {value: document.swipe_target}
            });

            e.target.dispatchEvent(evt);
        })
        .on(swipe_touch ? 'touchend' : 'mouseup', function (e) {
            if (document.swipe_triggered) {
                var evt = Object.defineProperties(new Event('swipe', {bubbles: true, cancelable: true, composed: true}), {
                    is_start: {value: false},
                    is_move: {value: false},
                    is_end: {value: true},
                    target: {value: e.target},
                    currentTarget: {value: document.swipe_target}
                });
                e.target.dispatchEvent(evt);
            }

            document.swipe = false;
            document.swipe_triggered = false;
        })
    ;

})();