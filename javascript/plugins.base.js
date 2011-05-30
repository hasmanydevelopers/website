jQuery.noConflict();

/*	STATUS OBJECT:
	Note: Stores values that needs to be accessible
	globally within the framework.
================================================== */
var Stat = {
	
	cssOn: true,
	
	IsIE: false,

	dimensions: {
		isSet: false
	},
	
	modal: {
		isBuilt: false,
		isOpen: false
	},
	
	tooltip: {
		isBuilt: false,
		isOpen: false,
		clickOpen: false
	},
	
	slideshow: {
		pause: false,
		pausedExternally: false
	},
	
	liveCoord: { 
	
	}
	
}; /* END: STATUS OBJECT */



/*	Helper OBJECT: Instantiated
================================================== */
var Helper = {};





/* GET PAGE DIMENSIONS
================================================== */
Helper.pageDimensions = function(){
	
	Stat.dimensions.documentWidth		= docWidth	= jQuery(document).width();
	Stat.dimensions.documentHeight  	= docHeight = jQuery(document).height();
	Stat.dimensions.windowWidth	    	= winWidth	= jQuery(window).width();
	Stat.dimensions.windowHeight		= winHeight = jQuery(window).height();
	Stat.dimensions.bodyWidth			= bodyWidth	= jQuery("body").width();
	Stat.dimensions.bodyHeight			= bodyHeight = jQuery("body").height();
										// IE uses bodyWidth, everything else uses docWidth
	Stat.dimensions.overlayWidth 		= (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) ? bodyWidth : docWidth; 
	Stat.dimensions.overlayHeight		= (docHeight < winHeight) ? winHeight : docHeight;
	
};	/* END: Helper.pageDimensions() */
	
	
	
	
	
/*	LOG: Pass in an array of objects and strings
	to console.log, only executes of window.console
	exists.
================================================== */
Helper.log = function(data){
		
	// Check if window.console exists, if so, execute
	if(window.console){ 
	
		this.data = data;
		
		jQuery.each(datArray, function(index, value){
			console.log(value);
		})
	
	}
	
};	/* END: Helper.log() */



/* PAGE RESIZE DETECTION
================================================== */
jQuery(window).resize(function(){
	/* 	Change 'isSet' property to false so that the 
		modal will recalculate page dimensions the next 
		time a modal window loads. */
	Stat.dimensions.isSet = false;
});