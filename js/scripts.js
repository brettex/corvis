// JavaScript Document// DOM Ready
jQuery(function() {
	
	// SVG fallback
	// toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script#update
	if (!Modernizr.svg) {
		var imgs = document.getElementsByTagName('img');
		var dotSVG = /.*\.svg$/;
		for (var i = 0; i != imgs.length; ++i) {
			if(imgs[i].src.match(dotSVG)) {
				imgs[i].src = imgs[i].src.slice(0, -3) + "png";
			}
		}
	}
	
});

jQuery(document).ready( function($){
	
		
	/* When using absolutely positioned labels for the Form elements
	   we need to hide/show the labels during focus/blur events
	   The parent Form must have the .showLabels class
	 */
	$('.showLabels input').each( function (){
		//Define the label elmenent
		var label = $(this).parent('div').find('label');

		// If already filled in on Page Load, hide label
		if($(this).val() != ''){
			label.animate({'opacity': 0.0}, 300);
		}
		//On Focus, hide the label
		$(this).focus( function(){
			label.animate({'opacity': 0.0}, 300);
		});
		// Show Label if Value of Field is still empty
		$(this).blur( function(){
				if($(this).val() == ""){
					label.show();
					label.animate({'opacity': 1.0}, 300);
				}
				else{
					label.hide();
				}
					
		});
		$(this).keypress( function(){
			label.hide();
		});
	
	}); 
	
});