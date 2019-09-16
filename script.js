$(document).ready(function() {
    $('a:contains(расписания туров), a:contains(выбрать тур), .main_btn' ).on('click', function(){
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });
    
    $('.close').on('click', function(){
        $('.modal').slideUp('slow');
        $('.overlay').fadeOut('slow');
    });
});