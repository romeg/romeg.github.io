$(document).ready(function(){
	$('#toc-of-article').DynamicScrollspy({
		  tH: 3, 
  		  bH: 6, 
  		  offset: 100
	});
	console.log($().jquery);
  OBFUSCATED_EMAIL = 'v_r~tl1rz';

  obfuscate = function(s) {
    var ch;
    return String.fromCharCode.apply(String, (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = s.length; _i < _len; _i++) {
        ch = s[_i];
        _results.push(31 ^ ch.charCodeAt());
      }
      return _results;
    })());
  };


  setUpContactForm = function($w) {
    return $('#contact-form').submit(function(e) {
      var button, data, form, url;
      form = $(e.target);
      url = "https://formspree.io/" + (obfuscate(OBFUSCATED_EMAIL));
      form.attr('action', url);
      data = form.serialize();
      button = $('#send-button').attr('disabled', 'disabled').button('sending');
      $.ajax({
        type: 'POST',
        url: url,
        data: form.serialize(),
        dataType: 'json'
      }).done(function() {
        button.button('sent').removeClass('btn-default').addClass('btn-success').hide();
        return $('#success-alert').fadeIn('slow');
      }).fail(function() {
        return button.button('reset').removeAttr('disabled');
      });
      e.preventDefault();
      return false;
    });
  };

  
    var $w;
    $w = $(window);
  
    return setUpContactForm($w);
  


});