// words show

$(document).ready(function(){
  $("#word-popup-open").click(function(){
    $("#word-popup").slideDown();
  });
});


$(document).ready(function(){
  $("#word-popup-close").click(function(){
    $("#word-popup").slideUp();
  });
});



// jason data
var data = [];
$.getJSON('F:/1.%20coding/Client%20Projects/Tasir%20Vai%20(Mirpur%20DOSH)/assact/js/jsondata.json',function(result){
  $.each(result.entries, function(index, val){
    data.push(val);
  });
});
// console.log(data)

      $( "#auto_check" ).autocomplete({
        source: data
      });
