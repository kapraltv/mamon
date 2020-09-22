$(function () {

    // Fixed Header
    let header = $('#header');
    let headerH = header.innerHeight();
    let ScrollPos = $(window).scrollTop();
    let headerBurger = $('#header-burger');
    let navActive = $('#nav');

    checkScroll(ScrollPos, headerH);

    $(window).on('scroll resize', function () {
        ScrollPos = $(this).scrollTop();

        checkScroll(ScrollPos, headerH)
    })

    function checkScroll(ScrollPos, headerH) {
        if (ScrollPos > headerH) {
            header.addClass('fixed')
        } else {
            header.removeClass('fixed')
        }
    }

    // Scroll to block
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 1000)
    })

    // Burger Menu
    headerBurger.on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $(navActive).toggleClass('nav-active');
    })
})