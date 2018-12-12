/** ========================================================================
 *
 * CEMaterial Ripple (Waves)
 *
 * ======================================================================== */
+function () {
    document.on('mousedown touchstart', '.waves', function (e) {
        var el = this;

        var posx = el.offset().left,
            posy = el.offset().top,
            width = el.offsetWidth,
            height = el.offsetHeight;

        var ripple = el.querySelector('.ripple');

        if (ripple) {
            el.removeChild(ripple);
        }

        ripple = document.createElement('span');
        ripple.classList.add('ripple');

        // Add ripple element
        el.insertBefore(ripple, el.firstChild);

        // Remove ripple on ending animation
        ripple.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            el.removeChild(ripple);
        });

        // Get bigger
        var size = Math.max(width, height);

        // Get center
        var x = e.pageX - posx - (size / 2),
            y = e.pageY - posy - (size / 2);

        ripple.style.height = size + 'px';
        ripple.style.width = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        setTimeout(function () {
            ripple.classList.add('ripple-animate');
        }, 50);
    });
}();