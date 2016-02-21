/* global pym */

(function() {
  'use strict';

  var pymChild;

  function render() {
  
    $('.section').click(function(){
      $('cool').removeClass('cool');
      $(this).addClass('cool');
    });


    //window resize (for togglings details)    
    var newheight = $(window).resize.height;

    $(window).resize(function(){      
        $('.item').height(newheight);
    });

      //Show & hide toggle
      //CODE + DATA
        $('#info-show-cd').click(function(){
            $('.item-text-cd').slideToggle(1000);
            $('.item-cd').animate(1000);
            $('#info-show-cd').hide(1000);
            $('#info-hide-cd').show(1000);
        });

        $('#info-hide-cd').click(function(){
            $('.item-text-cd').slideToggle(1000);
            $('.item-cd').animate(1000);
            $('#info-show-cd').show(1000);
            $('#info-hide-cd').hide(1000);
        });

      //STRATEGY
        $('#info-show-st').click(function(){
            $('.item-text-st').slideToggle(1000);
            $('.item-st').animate(1000);
            $('#info-show-st').hide(1000);
            $('#info-hide-st').show(1000);
        });

        $('#info-hide-st').click(function(){
            $('.item-text-st').slideToggle(1000);
            $('.item-st').animate(1000);
            $('#info-show-st').show(1000);
            $('#info-hide-st').hide(1000);
        });

        //VIDEO
        $('#info-show-vd').click(function(){
            $('.item-text-vd').slideToggle(1000);
            $('.item-vd').animate(1000);
            $('#info-show-vd').hide(1000);
            $('#info-hide-vd').show(1000);
        });

        $('#info-hide-vd').click(function(){
            $('.item-text-vd').slideToggle(1000);
            $('.item-vd').animate(1000);
            $('#info-show-vd').show(1000);
            $('#info-hide-vd').hide(1000);
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