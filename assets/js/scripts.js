jQuery(function($) {
    $('.navbar-toggle').click(function() {

        // reset colors
        this.classList.toggle("change");
        $('.bar-top').css('background-color', '#fff');
        $('.bar-bottom').css('background-color', '#fff');

        if ($('.navbar-collapse').hasClass('rl')) {
            $('.navbar-collapse').toggleClass('right');
            $('.change .bar-top').css('background-color', '#000');
            $('.change .bar-bottom').css('background-color', '#000');
        }

        if ($('.navbar-collapse').hasClass('lr')) {
            $('.navbar-collapse').toggleClass('left');
        }

        $('.navbar-toggle').toggleClass('indexcity transparent inverse');
        //$('.navbar-toggle').toggleClass('hidden');
    });

});