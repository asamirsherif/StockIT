
;(function () {
	
  'use strict';

  // hilight
  var $codes = $(".code");
  hljs.configure({ useBR: true, tabReplace: "  " });

  $codes.each(function(e) {
    var $code = $(this);
    var code = $code.data("code");

    var highlighted = hljs.highlightAuto(code, ["xml", "css"]);
    $code.addClass("hljs");
    $code.html(hljs.fixMarkup(highlighted.value));
    $code.wrap("<pre></pre>");
  });

  // copy to clipboard
  var clipboard = new ClipboardJS(".btn-clipboard", {
    target: function(trigger) {
      return trigger.parentNode.nextElementSibling;
    }
  });

  clipboard.on("success", function(e) {
    $(e.trigger)
      .attr("title", "Copied!")
      .tooltip("_fixTitle")
      .tooltip("show")
      .attr("title", "Copy to clipboard")
      .tooltip("_fixTitle");

    e.clearSelection();
  });

  clipboard.on("error", function(e) {});

  
// Collapsible sidebar
  $(".sidebar-toggle").on("click", function() {
    $(".wrapper").toggleClass("sidebar-open");
  });

	var clickMenu = function() {

		$('.sidebar__list a:not([class="external"])').on("click", function(event) {
			var section = $(this).data('nav-section'),
				navbar = $('.sidebar__list');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top - 55
			    	}, 500);
         }
         
		    event.preventDefault();
		    return false;
    });
  };



// Reflect scrolling in navigation
var navActive = function(section) {

  var $el = $('.sidebar__list > li > ul');
  $el.each(function(){
    $(this).find('a').removeClass('active');
    $(this).find('a[data-nav-section="'+section+'"]').addClass('active');
  });

};

var navigationSection = function() {

  var $section = $('section[data-section]');
  $section.waypoint(function(direction) {
    navActive($(this.element).data('section'));
      
      if (direction == 'down') {
        navActive($(this.element).data('section'));

      }
  }, {
      offset: '150px'
  });

  $section.waypoint(function(direction) {
      if (direction == 'up') {
        navActive($(this.element).data('section'));
      }
  }, {
      offset: function() { return -$(this.element).height() + 500; }
  });

};

  // Document on load.
  $(function(){
    navigationSection();
    clickMenu();

  });

}());

