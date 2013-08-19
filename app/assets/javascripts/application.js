// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require lightbox
//= require colorbox-rails
//= require bootstrap-datepicker
//= require bootstrap-timepicker
//= require holder
//= require social-share-button
//= gmaps4rails.base
//= gmaps4rails.googlemaps
//= require underscore
//= require backbone
//= require backbone_rails_sync
//= require backbone_datalink
//= require backbone/poacc
//= require_tree .



  $('[data-behaviour~=datepicker]').datepicker();
  $('#timepicker').timepicker();
  	/**                     
	 * Dropdown menu        
	 * more information: http://twitter.github.com/bootstrap/javascript.html#dropdowns
	 */                     
	$('.dropdown-toggle').dropdown();
	                        
	// make menu open on hover
	$(".dropdown").hover(   
		function () {       
			$(this).addClass("open");
		},                  
		function () {       
			$(this).removeClass("open");
		}                   
	);
