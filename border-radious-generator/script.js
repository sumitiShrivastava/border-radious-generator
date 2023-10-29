$(document).ready(function(){
    $('#slider1, #slider2, #slider3, #slider4').on('input',function(){
 var slider1 = $('#slider1').val();
 console.log(slider1);
 var slider2 = $('#slider2').val();
 var slider3 = $('#slider3').val();
 var slider4 = $('#slider4').val();
 $('#output').css('border-top-right-radius',slider1 + '%');
 $('#output').css('border-top-left-radius',slider2 + '%');
 $('#output').css('border-bottom-right-radius',slider3 + '%');
 $('#output').css('border-bottom-left-radius',slider4 + '%');
 $('#box').val('border-radius:'+slider1+'% '+slider2+'% '+slider3+'% '+slider4+'%;' );

});

});
