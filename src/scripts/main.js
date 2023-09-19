$(document).ready(function() {

    // CARD HANDLER PATTERNS

    $("button.dropdown-btn").click(function() {
        $(".navbar__list").slideToggle()
    })


    function handleCard(buttonSelector, cardSelector, closeButtonSelector) {
        $(buttonSelector).click(function() {
            $(cardSelector).fadeIn(100).css('display', 'flex');
            $(closeButtonSelector).click(function() {
                $(cardSelector).fadeOut(100);
            });
        });
    }

    function handleCardBlock(buttonSelector, cardSelector, closeButtonSelector) {
        $(buttonSelector).click(function(e) {
            $(cardSelector).fadeIn(100);
            e.stopPropagation();
            $(closeButtonSelector).click(function() {
                $(cardSelector).fadeOut(100);
            });
        });
    }

    function clickAway(card) {
        $(document).on('click', function(e) {
            if (!$(card).is(e.target)) {
                $(card).fadeOut(100);
            }
        })
    }

    // QUESTION SECTION BUTTONS CONFIGURATION
    handleCardBlock("button.question1", ".questions__box-1", "button.close-btn-1");
    handleCardBlock("button.question2", ".questions__box-2", "button.close-btn-2");
    handleCardBlock("button.question3", ".questions__box-3", "button.close-btn-3");



  // BANNER SECTION BUTTONS
    handleCard("button.buy-button__banner120x80", ".bannerlist__card__120x80", "button.close-btn-1");
    handleCard("button.buy-button__banner80x50", ".bannerlist__card__80x50", "button.close-btn-2");
    handleCard("button.buy-button__bannercustom", ".bannerlist__card__custom", "button.close-btn-3");

    
    // STICKER SECTION BUTTONS
    
    handleCard("button.buy-button__a4-sticker", ".stickerlist__card__a4-sticker", "button.close-btn-1");
    handleCard("button.buy-button__cut-sticker", ".stickerlist__card__cut-sticker", "button.close-btn-2");
    handleCard("button.buy-button__lg-sticker", ".stickerlist__card__lg-sticker", "button.close-btn-3");
    handleCard("button.buy-button__vehicle-sticker", ".stickerlist__card__vehicle-sticker", "button.close-btn-4");
    handleCard("button.buy-button__perf-sticker", ".stickerlist__card__perf-sticker", "button.close-btn-5");
    handleCard("button.buy-button__fridge-sticker", ".stickerlist__card__fridge-sticker", "button.close-btn-6");

        // BANNER SECTION BUTTONS

    handleCard("button.buy-button__cardstotal", ".cardslist__card__total", "button.close-btn-1");
    handleCard("button.buy-button__cardslocal", ".cardslist__card__local", "button.close-btn-2");
    handleCard("button.buy-button__cardsflyer", ".cardslist__card__flyer", "button.close-btn-3");

        clickAway('.questions__box-1')
        clickAway('.questions__box-2')
        clickAway('.questions__box-3')
});