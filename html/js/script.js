jQuery(document).ready(function() {
    
    $('.qs-list-content1 ul li a').click(function(event) {
        $(this).next().slideToggle("fast");
        $('.qs-list-content1 ul li a').not(this).removeClass('active-color');
        $(this).toggleClass('active-color');
        
        $('.qs-list-content1 ul li a').not(this).next().slideUp("fast");
        
        $('.qs-list-content1 ul li a').not(this).find('i').addClass('fa-angle-right').removeClass('fa-angle-down');
        $(this).find('i').toggleClass('fa-angle-right').toggleClass('fa-angle-down');
        return false;
    });
    $('.qs-list-content2 ul li a').click(function(event) {
        $(this).next().slideToggle("fast");
        $('.qs-list-content2 ul li a').not(this).removeClass('active-color');
        $(this).toggleClass('active-color');
        $('.qs-list-content2 ul li a').not(this).next().slideUp("fast");
        $('.qs-list-content2 ul li a').not(this).find('i').addClass('fa-angle-right').removeClass('fa-angle-down');
        $(this).find('i').toggleClass('fa-angle-right').toggleClass('fa-angle-down');
        return false;
    });


});