/*	JQUERY EXTENSIONS
================================================== */
jQuery.fn.extend({	



	/*	SLIDESHOW
	================================================== */
	slideshow: function(){
	
		var target = jQuery(this);
		
		var navControlOn = false;
		
		if(target.hasClass('navControlOn')){
			var navControlOn = true;
		}
		
		function rotateSlide(){
		
			if(!Stat.slideshow.pause){
				
				target.children('.wrapper').fadeOut(500, function(){
				
					if(navControlOn){
						if(target.find('.controls .current').next().hasClass('pauseButton')){
							target.find('.controls a.current').removeClass('current').siblings(':first').addClass('current');
						} else {
							target.find('.controls a.current').removeClass('current').next().addClass('current');
						}
					}
				
					if(target.find('.slideshowScreen .current').next().length < 1){
						target.find('.slideshowScreen .slide:last').removeClass('current').siblings(':first').addClass('current');
					} else {
						target.find('.slideshowScreen .current').removeClass('current').next().addClass('current');
					}
				
				}).fadeIn(500);
			}
		}
		
		var slideshowrotate = setInterval(rotateSlide, 7000);
		
		if(navControlOn){
		
			var jumpAnchors = target.find('.controls a');
			
			function jumpto(object){
			
				var anchortarget = jQuery(object);
				var slideTo = anchortarget.attr('name');
				
				anchortarget.closest('.wrapper').fadeOut(500, function(){
				
					anchortarget.addClass('current').siblings().removeClass('current').parent()
					.siblings('.slideshowScreen').children('.' + slideTo).addClass('current').siblings().removeClass('current');
				
				}).fadeIn(500);
					
			}
			
			jumpAnchors.live('click', function(){
				
				var anchortarget = jQuery(this);
				
				var resumeRotation = false;
				
				if(anchortarget.hasClass('pauseButton')){
					if(anchortarget.hasClass('pausedTrue')){
						Stat.slideshow.pause = false;
						slideshowrotate = setInterval(rotateSlide, 7000);
					} else {
						Stat.slideshow.pause = true;
						clearInterval(slideshowrotate);
						slideshowrotate = "";
					}
					anchortarget.toggleClass('pausedTrue');
				} else {
					if(!Stat.slideshow.pause){
						resumeRotation = true;
						clearInterval(slideshowrotate);
						slideshowrotate = "";
					}
					
					jumpto(jQuery(this));
					
					if(resumeRotation){
						slideshowrotate = setInterval(rotateSlide, 7000);
					}
					
				}
				return false;
			})
		} // END: navControlOn conditional check
	
	} 	/* END: slideShow() */
	
	
}); /* END: jQuery.fn.extend({}) */	