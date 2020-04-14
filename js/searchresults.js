///////////////////////////////////////////////////////////////////////
function sorrysearch() {
  var sorry = "Sorry, the search function for the recycling hasn't been implemented yet.";
  $("#mybutton").prop("disabled", true);
  $("#searchme").append(sorry);
}

$(function() {
  var selected1 = $("#sel1").val();
  var selected2 = $("#sel2").val();
  $("#sel1").change(function() {
    if (selected2 == "blank2"){
      $("#testing").show( "slow" );
    }
    if (selected2 != "blank2" && selected1 != "blank1"){
      $("#testing").hide( "slow" );
    }
  });

  $("#sel2").change(function () {
    if (selected1 == "blank1"){
      $("#testing").show( "slow" );
    }
    if (selected1 != "blank2" && selected2 != "blank1"){
      $("#testing").hide( "slow" );
    }
  });
});

// note to self: add validation if user leaves blank
function results() {
  var display = "<h5>Results relating to what you chose would appear here.</br>Unfortunately, this is still under construction.</br>We hope to finish implementing it soon!</h5>"
  $("#results").html(display);
}
