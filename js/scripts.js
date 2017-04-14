$(document).ready(function () {
    // Initialization
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('#mainCarousel').css('height', $('body').height() - $('footer').height() - $('nav').height());

    // Event Listeners
    $('#linkOne').click(function () {
        $('.carousel').carousel('set', 0);
    });

    $('#linkTwo').click(function () {
        $('.carousel').carousel('set', 1);
    });

    $('#linkThree').click(function () {
        $('.carousel').carousel('set', 2);
    });

    $('#linkFour').click(function () {
        $('.carousel').carousel('set', 3);
    });

    $('#navbarTitle').hover(
        function () {
            $('.carousel').hide();
            $('#navbarTitle').removeClass("thin");
            $('#navbarTitle').addClass("light");
        },
        function () {
            $('.carousel').show();
            $('#navbarTitle').addClass("thin");
            $('#navbarTitle').removeClass("light");
        }
    );
});