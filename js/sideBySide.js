(function( $ ) {
	$.fn.sideBySide = function() {

		// Standard font
		var standardText = $("body").css('font-size');
		$(".standardText").click(function(){
			$("body").animate({'font-size' : standardText});
		});

		// Increase font
		$(".IncreaseText").click(function(){
			var fontSizeBody = $("body").css('font-size');
			fontSizeBody = fontSizeBody.replace('px', '');
    		fontSizeBody = parseInt(fontSizeBody) + 2;
    		$("body").animate({'font-size' : fontSizeBody + 'px'});
    		return false;
		});

		// Decrease font
		$(".DecreaseText").click(function(){
			var fontSizeBody = $("body").css('font-size');
			fontSizeBody = fontSizeBody.replace('px', '');
    		fontSizeBody = parseInt(fontSizeBody) - 2;
    		$("body").animate({'font-size' : fontSizeBody + 'px'});
    		return false;
		});
		
 		// Contrast
		$(".contrast").click(function(){
				$("html").toggleClass( "contrast" );
			}
		);

		// Skip Navigation
		$(".SkipNavigation").click(function(){
			// get attribute href
			var attrHref = $(this).attr("href");
			// set focus
			$(attrHref).focus();
			// animate
			$('html, body').animate({
    			scrollTop: $(attrHref).offset().top
			}, "slow");
		});
		
		/* Menus */
 		// hide sub menu
 		$('li ul').hide();
 		// show on focus
 		$('.itensMenu a, .itensMenu a li a').focus(function(){
 			$( this ).next( ".submenu" ).fadeIn( 'slow' );
 		});
 		// hide on blur the last a element in a list
 		$('.itensMenu ul a:eq( -1)').blur(function(){
 			$( ".submenu" ).fadeOut( 'slow' );
 		});
 		
	};
})( jQuery );

$("html").sideBySide();