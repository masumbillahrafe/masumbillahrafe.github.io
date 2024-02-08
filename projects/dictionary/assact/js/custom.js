// words show

$(document).ready(function(){
  $("#word-popup-open, #word-popup-open-alowes").click(function(){
    $("#word-popup, #word-popup-alowes").slideDown();
  });

  $("#word-popup-close, #word-popup-close-alowes").click(function(){
    $("#word-popup, #word-popup-alowes").slideUp();
  });
// 
  $(".menu-popup-btn").click(function(){
    $(".main-popup").slideDown();
  });

  $(".menu-close").click(function(){
    $(".main-popup").slideUp();
  });
});

