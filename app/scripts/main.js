/* global pym */

(function() {
  'use strict';

  var pymChild;

  function render() {

    var newheight = $(window).resize.height;

    $(window).resize(function(){      
        $('.item').height(newheight);
    });

      //Show & hide toggle
        $('.info-text').click(function(){
            $('.item-text').slideToggle(1000);
            $('.item').animate(1000);
            $('.info-text').hide(1000);
            $('.info-two').show(1000);
        });

        $('.info-two').click(function(){
            $('.item-text').slideToggle(1000);
            $('.item').animate(1000);
            $('.info-text').show(1000);
            $('.info-two').hide(1000);
        });

        //tab colors
        $('.tab').each(function() {
          if (this.id === window.location.pathname) {
            $(this).addClass('active');
          }
        });

    if (pymChild) {
      pymChild.sendHeight();
    }
  }

  function load() {
    pymChild = new pym.Child({
      renderCallback: render
    });
  }

  window.onload = load;
})();