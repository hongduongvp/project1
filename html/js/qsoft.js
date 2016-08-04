jQuery(document).ready(function() {
    jQuery(window).scroll(function () {
        if (jQuery('html, body').scrollTop() > (jQuery('.qs-header-wrapper').height() - 80)) {
            jQuery('.qs-header-wrapper').addClass('fixed');
            jQuery('body').css('padding-top', jQuery('.qs-header-wrapper').height() + 'px');
        } else {
            jQuery('.qs-header-wrapper').removeClass('fixed');
            jQuery('body').removeAttr('style');
        }
    });

    if(jQuery('.qs-advertisement')) {
        jQuery('.qs-desc-advertisement').css('height', jQuery('.qs-advertisement').height() + 'px');
    }
	
	jQuery('.qs-icon-search i').click(function() {
		if(jQuery('.qs-search-bar').is(':hidden')) {
			jQuery('.qs-search-bar').slideDown('fast');
            jQuery('.qs-header-wrapper').css('height', 'auto');
		} else {
			jQuery('.qs-search-bar').slideUp('fast');
            jQuery('.qs-header-wrapper').removeAttr('style');
		}
	});
	
	jQuery(document).mouseup(function (e) {
        if (!jQuery('.qs-search-form').is(e.target) && jQuery('.qs-search-form').has(e.target).length === 0) {
            jQuery('.qs-search-bar').slideUp('fast');
            jQuery('.qs-header-wrapper').removeAttr('style');
        }
    });


    if(jQuery('#datetimepicker').length > 0) {
        jQuery('#datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            }
        });
    }

    if(jQuery('.qs-testimonial-slider').length > 0) {
        jQuery('.qs-testimonial-slider').bxSlider({
            minSlides: 1,
            maxSlides: 3,
            slideWidth: 370,
            slideMargin: 30,
            pager: false
        });
    }

    if(jQuery('.qs-row-statement').length > 0) {
        jQuery('.qs-row-statement').each(function() {
            jQuery(this).find('.qs-content-statement-wrapper').css('height',  jQuery(this).find('.qs-col-statement-img').height() + 'px');
        });
    }

    if(jQuery('.qs-banner-page').length > 0) {
		var images = jQuery('.qs-banner-page').attr('data-image-src');
        jQuery('.qs-banner-page').parallax({imageSrc: images});
    }

    if(jQuery('.qs-col-login-page').length > 0) {
        calHeight('.qs-col-login', 0);
    }
});

function calHeight(child, pah) {
    var maxHeight = 0;

    jQuery(child).each(function() {
        jQuery(this).removeAttr('style');
        var height = jQuery(this).height();
        maxHeight = (height > maxHeight) ? height: maxHeight;
    });

    jQuery(child).removeAttr('style').css('height', (maxHeight + pah) + 'px');
}