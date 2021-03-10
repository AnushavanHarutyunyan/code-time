let count = 0;
function webkit_moved() {
var ua = navigator.userAgent.toLowerCase(); 
  if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
      
    $('.mouse_moved').mouseleave(function(){

        // $('.modal_mouse_out').show();
  
    });
    } else {
      
    $('.mouse_moved').mouseleave(function(){
        // $('.modal_mouse_out').show();
  
    });
    }
  };
};
function firefox_moved(){
    var browser=navigator.userAgent.toLowerCase();
    if(browser.indexOf('firefox') > -1) {
        $('.mouse_moved').mouseover(function(){
            $('.modal_mouse_out').show();
    
        });

    }
    else{               // If another browser, return 0
       var b=1;
    }
    return false;
};
function internet_explorer_moved() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {     // If Internet Explorer, return version number
                  	 $('.mouse_moved').mouseover(function(){
        $('.modal_mouse_out').show();
  
    });}
        else  {               // If another browser, return 0
           var b=1;
        }
   return false;
        };


//getMobileOperatingSystem();

webkit_moved();
firefox_moved();
internet_explorer_moved();


$('.mouse_moved').mouseleave(function(){
    if(count===1){
        return
    }
    var displayP1 = $(".popup-phone").css('display');
    var displayP2 = $(".popup-callback").css('display');
    if ( displayP1 == 'none' && displayP2 == 'none'){
        $('.modal_mouse_out').show();
    }
    else{
        $('.modal_mouse_out').hide();
    }
    count = count + 1
});
$(document).ready(function(){





    /* modal */

    $('.close-mouse').on('click', function(event) {
        event.preventDefault();
        $(".popup-callback").hide();
        $(".popup-phone").hide();
        $(".modal_mouse_out").hide();
    });

    $('.popup-mouseleave .close-modal,.popup-mouseleave .close-img').on('click', function(event) {
        event.preventDefault();
        $('.popup-mouseleave').addClass('hide');
    });
    $('.close-phone').click(function(){
       $('.popup-phone').hide();
    });






    var $code = $(".check_popup_code_input"),
        $message = $(".js-message"),
        $button = $(".button-popup-first");



    var codeValues = /^\d+$/;

    // $button.on("click", function (ev) {
    //     ev.preventDefault();
    //     var $codeLenght = $(".check_popup_code_input").val().length;
    //     var codeValue = $code.val();

    //     if (codeValues.test(codeValue) && $codeLenght==15){
    //         return $message.text("Данный код верен. Cпасибо, что выбрали нашу продукцию!");
    //     } else if ($code.val() !== '' && $code.val() !== ' ' && $code.val() !== '  '){
    //         return $message.text("Данный код верен. Cпасибо, что выбрали нашу продукцию!");
    //     }else{
    //         return $message.text("Введите, пожалуйста, код.");
    //     }

    // });

    // $('.mouse_moved').mouseover(function(){
    //     var displayP1 = $(".popup-callback").css('display');
    //     var displayP2 = $(".popup-phone").css('display');
    //     if ( displayP1 == 'none' && displayP2 == 'none'){
    //         $('.modal_mouse_out').show();
    //     }
    // });



});

