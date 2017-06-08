$('#menu-toggle').on('click', function () {
    var iSelector = $(this).find('i:first');
    if (iSelector.hasClass('fa fa-heart-o')) {
        iSelector.removeClass('fa fa-heart-o')
        iSelector.addClass('fa fa-heart')
    } else if (iSelector.hasClass('fa fa-heart')) {
        iSelector.removeClass('fa fa-heart')
        iSelector.addClass('fa fa-heart-o')
    }
});