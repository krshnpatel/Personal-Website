$(document).ready(function () {
    // Initialization
    $('.carousel.carousel-slider').carousel({ fullWidth: true });

    if (innerWidth <= 635) {
        $('body').attr('background', 'img/mobileBackground.jpg');
        $('body').css('background-position-x', 'center');
    }

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

    if (innerWidth > 992) {
        $('#navbarTitle').hover(
            function () {
                $('.onHoverName').hide();
                $('.indicators').hide();
                $('#navbarTitle').removeClass("thin");
                $('#navbarTitle').addClass("light");
            },
            function () {
                $('.onHoverName').show();
                $('.indicators').show();
                $('#navbarTitle').addClass("thin");
                $('#navbarTitle').removeClass("light");
            }
        );
    }
    else {
        $('#navbarTitle').click(function () {
            $('.carousel').carousel('set', 0);
        });
    }
});