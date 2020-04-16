function sorrysearch() {
  var sorry = "Sorry, the search function for the recycling hasn't been linked here yet. Please use the link above to get to the search page!";
  $("#mybutton").prop("disabled", true);
  $("#searchme").append(sorry);
}

// jQuery validation
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

// on select box changes
$(function () {
  $("#sel1").change(function() { // when first box changes
    if ($("#sel1").val() == "0" && $("#sel2").val() == "0"){ //if no select
      $("#results").html(" ");
    }
    if ($("#sel1").val() == "0" || $("#sel2").val() == "0"){ //if one select
      $("#results").html(" ");
    }

    ////////// HOW
    if ($("#sel1").val() == "how" && $("#sel2").val() == "planet"){ // how/planet
      $("#results").html("<p>how/planet</p>");
    }
    if ($("#sel1").val() == "how" && $("#sel2").val() == "sustainable"){ // how/sustainable
      $("#results").html("<p>how/sustainable</p>");
    }
    if ($("#sel1").val() == "how" && $("#sel2").val() == "recycle"){ // how/educate
      $("#results").html("<p>how/educate</p>");
    }
    if ($("#sel1").val() == "how" && $("#sel2").val() == "educate"){ // how/educate
      $("#results").html("<p>how/educate</p>");
    }

    ////////// WHERE
    if ($("#sel1").val() == "where" && $("#sel2").val() == "planet"){ // where/planet
      $("#results").html("<p>where/planet</p>");
    }
    if ($("#sel1").val() == "where" && $("#sel2").val() == "sustainable"){ // where/sustainable
      $("#results").html("<p>where/sustainable</p>");
    }
    if ($("#sel1").val() == "where" && $("#sel2").val() == "recycle"){ // where/educate
      $("#results").html("<p>where/educate</p>");
    }
    if ($("#sel1").val() == "where" && $("#sel2").val() == "educate"){ // where/educate
      $("#results").html("<p>where/educate</p>");
    }
  });

  $("#sel2").change(function() { // when second box changes
    if ($("#sel1").val() == "0" && $("#sel2").val() == "0"){ //if no select
      $("#results").html(" ");
    }
    if ($("#sel1").val() == "0" || $("#sel2").val() == "0"){ //if one select
      $("#results").html(" ");
    }

    ////////// HOW
    if ($("#sel1").val() == "how" && $("#sel2").val() == "planet"){ // how/planet
      $("#results").html("<p>how/planet</p>");
    }
    if ($("#sel1").val() == "how" && $("#sel2").val() == "sustainable"){ // how/sustainable
      $("#results").html("<p>how/sustainable</p>");
    }
    if ($("#sel1").val() == "how" && $("#sel2").val() == "recycle"){ // how/recycle
      $("#results").html("<p>how/recycle</p>");
    }
    if ($("#sel1").val() == "how" && $("#sel2").val() == "educate"){ // how/educate
      $("#results").html("<p>how/educate</p>");
    }

    ////////// WHERE
    if ($("#sel1").val() == "where" && $("#sel2").val() == "planet"){ // where/planet
      $("#results").html("<p>where/planet</p>");
    }
    if ($("#sel1").val() == "where" && $("#sel2").val() == "sustainable"){ // where/sustainable
      $("#results").html("<p>where/sustainable</p>");
    }
    if ($("#sel1").val() == "where" && $("#sel2").val() == "recycle"){ // where/recycle
      $("#results").html("<p>where/recycle</p>");
    }
    if ($("#sel1").val() == "where" && $("#sel2").val() == "educate"){ // where/educate
      $("#results").html("<p>where/educate</p>");
    }
  });
});

///////////////////////////////////////////////////////////////////
// News Feed loader API
// https://rss2json.com/google-feed-api-alternative

$(function () {
google.load("feeds", "1");

   function initialize() {
     var feed = new google.feeds.Feed("https://www.sciencedaily.com/rss/top/environment.xml");
     feed.load(function(result) {
       document.getElementById("feedControl").style.visibility = "hidden";
       if (!result.error) {
         var container = document.getElementById("feed");
         for (var i = 0; i < result.feed.entries.length; i++) {
           var entry = result.feed.entries[i];
           var div = document.createElement("div");
           var readmore = "<a target='_blank' href='" + entry.link + "'><small>  Read more.</small></a>"
           div.innerHTML = "<a target='_blank' href='" + entry.link + "'>" + entry.title + "</a><small> " + entry.publishedDate + "</small><p>" + entry.content + readmore + "</p><hr>";
           container.appendChild(div);
         }
       }
     });
   }
   google.setOnLoadCallback(initialize);
});
///////////////////////////////////////////////////////////////////////
// search bar
$( function() {
var data =
	{url: "../Subsections/Recycling/IsThisRecyclable/json/database.json",
	listLocation: "items",
	getValue: "name",
	template: {
		type: "description",
		fields: {
			description: "recyclable"
		}
	},
	list: {
		match: {
			enabled: true
		  },
		}
	};

$('#searchIcon').easyAutocomplete(data);
});
