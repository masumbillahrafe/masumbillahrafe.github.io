  $(document).ready(function(){
  $("#open").click(function(){
    $("#full-popup").slideDown("slow");
  });
});


$(document).ready(function(){
  $(".popup-close").click(function(){
    $("#full-popup").slideUp("slow");
  });
});
