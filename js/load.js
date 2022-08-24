$(window).on('load', function() {
    $('#preloader .inner').fadeOut();
    $('#preloader').fadeOut('slow');
    $('body').delay(500).css({ 'overflow': 'visible' });
})

