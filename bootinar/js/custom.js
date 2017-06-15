jQuery(function($) {
  "use strict";

	/* ----------------------------------------------------------- */
	/*  Counter
	/* ----------------------------------------------------------- */

		$(".clock-item").jCounter({
		  twoDigits: 'on',
		  customDuration: 900000
		  })
		
		 /*********************************************************/
        /*  STICKY NAVBAR                                        */
        /*********************************************************/
        //if ( matchMedia( 'only screen and (min-width: 768px)' ).matches ) {
           $(document).on('scroll', function() {
              var scrollPos = $(this).scrollTop();

              if( scrollPos > 100 ) {
                 $('.fixed-top').addClass('sticky');
              } 
              else {
                 $('.fixed-top').removeClass('sticky');
              }
           });
        //}


});