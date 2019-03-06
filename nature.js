$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.fade, .fadee, .fades, .fade1, .fade3, .fade2, .section1, .section2, .section3, .branch, .rings,.spikey .wire .spiral').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).html( 'fully visible' );
                    $(this).css( {
                        transition: 'opacity 2s linear',
                        opacity: 1
                    } );

                } else {
                    $(this).html( 'fading in/out' );
                    $(this).css( {
                        transition: 'opacity 2s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                $(this).html( 'not visible' );
                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});

let item = document.querySelector('.body')

// play normal
item.addEventListener('mouseover', () => {
  item.classList.add('active')
})

// play in reverse
item.addEventListener('mouseout', () => {
  item.style.opacity = 0 // avoid showing the init style while switching the 'active' class

  item.classList.add('in-active')
  item.classList.remove('active')

  // force dom update
  setTimeout(() => {
    item.classList.add('active')
    item.style.opacity = ''
  }, 5)

  item.addEventListener('animationend', onanimationend)
})

function onanimationend() {
  item.classList.remove('active', 'in-active')
  item.removeEventListener('animationend', onanimationend)
}
