
$('.like').click(function () {
    if ($(this).hasClass('far')) {
        
        $(this).removeClass('far').addClass('fas')
    }
    else {
        $(this).removeClass('fas').addClass('far')
    }
})

