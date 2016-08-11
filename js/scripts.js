$(document).ready(function(){

  $("#form form").submit(function(event){
    var name = $('input#userName').val();
    var sexPref = $('input:radio[name=sexual_preference]:checked').val();
    var agePref = $('input:radio[name=ideal_age]:checked').val();

    $("span.yourname").text(name);

    if (sexPref === "Male") {
      if (agePref === "18-30"){
        $("#male18-30").show();
        $("#form").hide();
      } else if (agePref === "31-45"){
        $("#male31-45").show();
        $("#form").hide();
      } else {
        $("#male46").show();
        $("#form").hide();
      };
    } else {
      if (agePref === "18-30"){
        $("#female18-30").show();
        $("#form").hide();
      } else if (agePref === "31-45"){
        $("#female31-45").show();
        $("#form").hide();
      } else {
        $("#female46").show();
        $("#form").hide();
      };
    };

  event.preventDefault();
  });

});
