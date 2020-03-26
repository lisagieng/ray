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

// parsing json for events
var xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  if(xhttp.status === 200) {
    responseObject = JSON.parse(xhttp.responseText);
  }

var events = "";

for(var i=0; i < responseObject.length(); i++){
  events += "<td>" + responseObject.event[i].name + "</td>";
  events += "<td>" + responseObject.event[i].description + "</td>";
  events += "<td>" + responseObject.event[i].date + "</td>";
  events += "<td>" + responseObject.event[i].location + "</td>";
  events += "<td>" + responseObject.event[i]. organizer + "</td>";
  events += "<td>" + responseObject.event[i].link + "</td>";
}

$("#eventsHere").html(events);

xhttp.open("GET", "js/events.json", true);
xhttp.send('');
}
