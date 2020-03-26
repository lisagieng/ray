// Implementing dropdown menu with hover
//https://stackoverflow.com/questions/42183672/how-to-implement-a-navbar-dropdown-hover-in-bootstrap-v4
function toggleDropdown (e) {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 50 : 0);
}

$('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);

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

function sorrysearch() {
  var sorry = "Sorry, the search function for the recycling hasn't been implemented yet.";
  $("#mybutton").prop("disabled", true);
  $("#searchme").append(sorry);
}

function helpme() {
//  var selected1 = $("#sel1").val();
//  var selected2 = $("#sel2").val();
//  if (selected1 != "blank1" && selected2 != "blank2"){
    $("#help").prop("disabled", true);
    results();
//  }
}
// note to self: add validation if user leaves blank
function results() {
  var display = "<h5>Results relating to what you chose would appear here.</br>Unfortunately, this is still under construction.</br>We hope to finish implementing it soon!</h5>"
  $("#results").html(display);
}
