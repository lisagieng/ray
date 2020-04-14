///////////////////////////////////////////////////////////////////////
function sorrysearch() {
  var sorry = "Sorry, the search function for the recycling hasn't been implemented yet.";
  $("#mybutton").prop("disabled", true);
  $("#searchme").append(sorry);
}

$.validator.addMethod('selectcheck', function (value) {
    return (value != '0');
});

$(function () {
    $('#myForm').validate({ // initialize the plugin
      errorPlacement: function(error, element) {},
      errorClass: "myselect",
      rules: {
        sel1: {selectcheck: true},
        sel2: {selectcheck: true}
      }
    });
});

/*$(function() {
  $("#sel1").change(function() {
    if($("#sel2").val() == "blank2" && $("#sel1").val() == "blank1"){
      $("#testing").hide();
    }
    if ($("#sel2").val() == "blank2" || $("#sel1").val() == "blank1"){
      $("#testing").show();
    }
    if ($("#sel1").val() != "blank1" && $("#sel2").val() != "blank2"){
      $("#testing").hide();
    }
  });

  $("#sel2").change(function () {
    if($("#sel2").val() == "blank2" && $("#sel1").val() == "blank1"){
      $("#testing").hide();
    }
    if ($("#sel1").val() == "blank1" || $("#sel2").val() == "blank2"){
      $("#testing").show();
    }
    if ($("#sel2").val() != "blank2" && $("#sel1").val() != "blank1"){
{      $("#testing").hide();
    }}
  });
});
*/
