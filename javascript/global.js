jQuery.noConflict();

/*	JQUERY'S VERSION OF WINDOW.ONLOAD AND DOM READY
================================================== */
jQuery(document).ready(function(){

	var _naviAgent = navigator.userAgent.toLowerCase();

	if(_naviAgent.search('ipad') > -1){
		document.body.className += " ipad ";
	} else if(_naviAgent.search('iphone') > -1){
		document.body.className += " iphone ";
	} else if(_naviAgent.search('ipod') > -1){
		document.body.className += " iphone ";
	}
	
	if(jQuery('#PageCommentInterface_Form_PostCommentForm').length){
	
		jQuery('#PageCommentInterface_Form_PostCommentForm #submit').bind('click', function(){
				
			var authorValid = false,
				commentValid = false,
				message = jQuery('#PageCommentInterface_Form_PostCommentForm'),
				messageError = jQuery('#PageCommentInterface_Form_PostCommentForm_error'),
				messageText = '',
				author = message.find('#author').attr('value'),
				comment = message.find('#comment').attr('value');
				
			if(author != '' && author != 'Name'){
				authorValid = true;
			} else {
				authorValid = false;
				messageText += '<span>- Please provide a <strong>name</strong>.</span>';
			}
			
			if(comment != '' && comment != 'Write Your Comment Here...'){
				commentValid = true;
			} else {
				commentValid = false;
				messageText += '<span>- Please provide a <strong>comment</strong>.<s/pan>';
			}	
	
			if(authorValid && commentValid){
			 	messageError.hide().text('');
			 	messageText = '';
			 	return true;
			} else {
				messageError.html(messageText).show();
				messageText = '';
				return false;
			}
	
		});
	
	}
	
	
	
	if(jQuery('#slideshow').length && !jQuery('body').hasClass('ipad')){
		
		var _slideShow = jQuery('#slideshow');
		
		function autoRotator(){
			
			var _activeSlide = _slideShow.find('div.activeSlide');
			
			if(_activeSlide.next().length){
				_activeSlide.fadeOut(500, function(){
					_activeSlide.removeClass('activeSlide').next().addClass('activeSlide').fadeIn(800, function(){
						_slideShow.find('div.carouselPagin span.active').removeClass('active').next().addClass('active');
					});
				})
				
				
				
			} else {
				_activeSlide.fadeOut(500, function(){
					_activeSlide.removeClass('activeSlide').siblings('div.slide:first').addClass('activeSlide').fadeIn(800, function(){
						_slideShow.find('div.carouselPagin span.active').removeClass('active').siblings(':first').addClass('active');
					});
				})
				
			}
	
		};
		
		_slideShow.find('div.slide').each(function(i){
			jQuery(this).addClass('slide'+i);
		})
		
		var slideShowAutoRotate = setInterval(autoRotator, 7000);
		
		
		
		//Create Pagination
		var _paginNavIemsCount = _slideShow.find('div.slide').length,
			_paginNavItems = '';

		// Generate clickable spans that represent each group of carousel items
		for(i = 0; i < _paginNavIemsCount; i++ ){
			if(i == 0){
				var anchorNav = '<span class="first">'+ i +'</span>';
			} else {
				var anchorNav = '<span>'+ i +'</span>';
			}
			_paginNavItems += anchorNav;
		}
		
		// Create pagination nav
		_slideShow.append('<div class="carouselPagin clearfix">'+_paginNavItems+'</div>');
		
		// Calculate the total width of pagination nav and assign
		var widthOfEachPagin = _slideShow.find('div.carouselPagin span').outerWidth(true),
			numOfPagin = _slideShow.find('div.carouselPagin span').length,
			totalPaginWidth = widthOfEachPagin * numOfPagin;
		
		// Assign pagination nav and make the first clickable span "active"
		_slideShow.find('div.carouselPagin').css('width', totalPaginWidth).find('span:first').addClass('active');

		_slideShow.find('div.carouselPagin span').live('click', function(){
		
			clearInterval(slideShowAutoRotate);
						
			var target = jQuery(this),
				slideTarget = 'div.slide' + (target.text())
				
			target.addClass('active').siblings().removeClass('active').closest('#slideshow').find(slideTarget).fadeIn(500).addClass('activeSlide').siblings().removeClass('activeSlide');
			
			
			slideShowAutoRotate = setInterval(autoRotator, 7000);
			
		});

	
		jQuery('#slideshow div.prev, #slideshow div.next').bind('click', function(){
		
			clearInterval(slideShowAutoRotate);
		
			var _target = jQuery(this),
				_activeSlide = jQuery('#slideshow').find('div.activeSlide');
			
			if(_target.hasClass('prev')){
			
				if(_activeSlide.prev().length){
					_activeSlide.hide().removeClass('activeSlide').prev().addClass('activeSlide').show();
					_slideShow.find('div.carouselPagin span.active').removeClass('active').prev().addClass('active');
				} else {
					_activeSlide.hide().removeClass('activeSlide').siblings('div.slide:last').addClass('activeSlide').show();
					_slideShow.find('div.carouselPagin span.active').removeClass('active').siblings(':last').addClass('active');
				}
			
			} else if(_target.hasClass('next')){
			
				if(_activeSlide.next().length){
					_activeSlide.hide().removeClass('activeSlide').next().addClass('activeSlide').show()
					_slideShow.find('div.carouselPagin span.active').removeClass('active').next().addClass('active');
				} else {
					_activeSlide.hide().removeClass('activeSlide').siblings('div.slide:first').addClass('activeSlide').show();
					_slideShow.find('div.carouselPagin span.active').removeClass('active').siblings(':first').addClass('active');
				}
			
			}
			
			slideShowAutoRotate = setInterval(autoRotator, 7000);
		
		})
	
	};
	
	
	if(jQuery('#flickrSlideShow').length){
	
		function flickrRotator(){
			
			var _flickr = jQuery('#flickrSlideShow'),
				_nextSilo = _flickr.attr('class');
				_activeSlide = _flickr.find('div.'+ _nextSilo).children('a.active');
			
			if(_activeSlide.next().length){
				_activeSlide.fadeOut(500, function(){
					_activeSlide.removeClass('active').next().fadeIn(800, function(){
						jQuery(this).addClass('active');
					});
				})
				
			} else {
				_activeSlide.fadeOut(500, function(){
					_activeSlide.removeClass('active').siblings('a:first').fadeIn(800, function(){
						jQuery(this).addClass('active');
					});
				})
			}
			
			if(_nextSilo == 'silo1'){
				_flickr.attr('class', 'silo2');
			} else {
				_flickr.attr('class', 'silo1');
			}
	
		};
		
		var flickerAutoRotate = setInterval(flickrRotator, 3000);

	}
	
	
	// Hover for homepage client-banner project list
	if(jQuery('#grid div.our-work-gallery div.project').length){
	
		var project = jQuery('#grid div.our-work-gallery div.project');

 		project.children('div.hover').removeClass('offscreen')
 			.children('div.hover-bg').fadeTo(1, 0.0)
 			.siblings('div.hover-content').css({left: '-250px'});

		project.hover(
 			 function(){
 			 	
				jQuery(this).children('div.hover').children('div.hover-content').css({left: '-250px'});
				jQuery(this).children('div.hover').children('div.hover-bg').stop().fadeTo(600, 0.70);
				jQuery(this).children('div.hover').children('div.hover-content').stop().animate({left: '0px'} , { queue: false, duration: 450, easing: 'easeOutQuint'  });
				jQuery(this).children('div.project-info').stop().animate({backgroundColor:'#44423e'}, 750);
			}, 
			
			function(){
				jQuery(this).children('div.hover').children('.hover-bg').stop().fadeTo(800 , 0.0);
				jQuery(this).children('div.hover').children('.hover-content').stop().animate({left: '250px'} , { queue: false, duration: 300, easing: 'easeOutQuint'  });
				jQuery(this).children('div.project-info').stop().animate({backgroundColor:'#272623'},850);
			}

		);

	};
	
	if(jQuery('body').hasClass('index')){
	
		jQuery(function(){
	
			//scrollpane parts
			var scrollPane = jQuery("#grid div.newest-clients div.scroll-pane"),
				scrollContent = jQuery("#grid div.newest-clients div.scroll-content"),
				scrollItems = scrollContent.children().length,
				scrollContentDynamicWitdh = (scrollItems * 250) - 20;
				
			scrollContent.children(':last').addClass('last');
			scrollContent.css('width', scrollContentDynamicWitdh +'px');
			
			if(scrollItems > 4){
			
				//build slider
				var scrollbar = jQuery("#grid div.newest-clients div.scroll-bar").slider({
					slide: function( event, ui ) {
						if ( scrollContent.width() > scrollPane.width() ) {
							scrollContent.css( "margin-left", Math.round(
								ui.value / 100 * ( scrollPane.width() - scrollContent.width() )
							) + "px" );
						} else {
							scrollContent.css( "margin-left", 0 );
						}
					}
				});
				
				//append icon to handle
				var handleHelper = scrollbar.find( ".ui-slider-handle" )
				.mousedown(function() {
					scrollbar.width( handleHelper.width() );
				})
				.mouseup(function() {
					scrollbar.width( "100%" );
				})
				.append( "<span class='ui-icon ui-icon-grip-dotted-vertical'></span>" )
				.wrap( "<div class='ui-handle-helper-parent'></div>" ).parent();
				
				//change overflow to hidden now that slider handles the scrolling
				scrollPane.css( "overflow", "hidden" );
				
				//size scrollbar and handle proportionally to scroll distance
				function sizeScrollbar() {
					var remainder = scrollContent.width() - scrollPane.width();
					var proportion = remainder / scrollContent.width();
					var handleSize = scrollPane.width() - ( proportion * scrollPane.width() );
					scrollbar.find( ".ui-slider-handle" ).css({
						width: handleSize,
						"margin-left": -handleSize / 2
					});
					handleHelper.width( "" ).width( scrollbar.width() - handleSize );
				}
				
				//reset slider value based on scroll content position
				function resetValue() {
					var remainder = scrollPane.width() - scrollContent.width();
					var leftVal = scrollContent.css( "margin-left" ) === "auto" ? 0 :
						parseInt( scrollContent.css( "margin-left" ) );
					var percentage = Math.round( leftVal / remainder * 100 );
					scrollbar.slider( "value", percentage );
				}
				
				//change handle position on window resize
				jQuery( window ).resize(function() {
					resetValue();
					sizeScrollbar();
				});
				
				//init scrollbar size
				setTimeout( sizeScrollbar, 10 );//safari wants a timeout
				
			}
			
		});
		
		
		jQuery(function(){
		
			//scrollPane2 parts
			var scrollPane2 = jQuery("#grid div.latest-projects div.scroll-pane"),
				scrollContent2 = jQuery("#grid div.latest-projects div.scroll-content"),
				scrollItems2 = scrollContent2.children().length,
				scrollContentDynamicWitdh2 = (scrollItems2 * 250) - 20;
				
			scrollContent2.children(':last').addClass('last');
			scrollContent2.css('width', scrollContentDynamicWitdh2 +'px');
			
			if(scrollItems2 > 4){
				//build slider
				var scrollbar2 = jQuery("#grid div.latest-projects div.scroll-bar").slider({
					slide: function( event, ui ) {
						if ( scrollContent2.width() > scrollPane2.width() ) {
							scrollContent2.css( "margin-left", Math.round(
								ui.value / 100 * ( scrollPane2.width() - scrollContent2.width() )
							) + "px" );
						} else {
							scrollContent2.css( "margin-left", 0 );
						}
					}
				});
				
				//append icon to handle
				var handleHelper = scrollbar2.find( ".ui-slider-handle" )
				.mousedown(function() {
					scrollbar2.width( handleHelper.width() );
				})
				.mouseup(function() {
					scrollbar2.width( "100%" );
				})
				.append( "<span class='ui-icon ui-icon-grip-dotted-vertical'></span>" )
				.wrap( "<div class='ui-handle-helper-parent'></div>" ).parent();
				
				//change overflow to hidden now that slider handles the scrolling
				scrollPane2.css( "overflow", "hidden" );
				
				//size scrollbar2 and handle proportionally to scroll distance
				function sizescrollbar2() {
					var remainder = scrollContent2.width() - scrollPane2.width();
					var proportion = remainder / scrollContent2.width();
					var handleSize = scrollPane2.width() - ( proportion * scrollPane2.width() );
					scrollbar2.find( ".ui-slider-handle" ).css({
						width: handleSize,
						"margin-left": -handleSize / 2
					});
					handleHelper.width( "" ).width( scrollbar2.width() - handleSize );
				}
				
				//reset slider value based on scroll content position
				function resetValue2() {
					var remainder = scrollPane2.width() - scrollContent2.width();
					var leftVal = scrollContent2.css( "margin-left" ) === "auto" ? 0 :
						parseInt( scrollContent2.css( "margin-left" ) );
					var percentage = Math.round( leftVal / remainder * 100 );
					scrollbar2.slider( "value", percentage );
				}
				
				//change handle position on window resize
				jQuery( window ).resize(function() {
					resetValue2();
					sizescrollbar2();
				});
				
				//init scrollbar2 size
				setTimeout( sizescrollbar2, 10 );//safari wants a timeout
			
			}
			
		});		
	}
	
	//Newest Clients Fade In/Out
	
	if(jQuery('#grid div.newest-clients')){
	
		jQuery('#grid div.newest-clients div.w1').each(function(){
			jQuery(this).append('<div class="hoverLayer">&nbsp;</div>');
		})
	
		jQuery('#grid div.newest-clients div.w1 div.hoverLayer').live('mouseover mouseout', function(e){
		
			e.preventDefault();
		
			var target = jQuery(this).siblings('div.transitionImage').children('span.color');
			
			if(e.type == 'mouseover'){
				target.fadeIn(300);
			} 
			
			if(e.type == 'mouseout'){
				target.fadeOut(100);
			}
		
			return false;
		
		})
	
	}
	
	
	// Case Study Slideshow
	if(jQuery('.case-study #gallery-holder').length){
	
		jQuery('#gallery-holder').find('div.slideNav a').click(function(){
		
			var target = jQuery(this);
			
			if(target.parent().hasClass('prev_next')){
			
				var paginAnchors = target.parent().siblings('div.pagin').children('a.active'),
					nextActive = '';
				
				if(target.hasClass('next')){
				
					if(paginAnchors.next().length){			
						nextActive = paginAnchors.next().attr('class');
					} else {
						nextActive = paginAnchors.siblings('a:first').attr('class');
					}
					
				} else {
				
					if(paginAnchors.prev().length){
						nextActive = paginAnchors.prev().attr('class');
					} else {
						nextActive = paginAnchors.siblings('a:last').attr('class');
					}
				}
				
				jQuery('#gallery-holder').find('.'+nextActive).addClass('active').siblings().removeClass('active');	
				
				
			} else if(target.parent().hasClass('pagin')){
				
				if(!target.hasClass('active')){
					var nextActive = target.attr('class');
					jQuery('#gallery-holder').find('.'+nextActive).addClass('active').siblings().removeClass('active');			
				}
					
			} 
		
			return false;
		
		})
	}
	

});	/* END: DOM READY */