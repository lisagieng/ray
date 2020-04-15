// parsing json for events
$(function() {
  var myEvents = "";

  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if(xhttp.status === 200) {
      responseObject = JSON.parse(xhttp.responseText);
    }

  for(var i = 0; i < Object.keys(responseObject.events).length; i++){
    var name = responseObject.events[i].name;
    var desc = responseObject.events[i].description;
    var date = responseObject.events[i].date;
    var loc = responseObject.events[i].location;
    var org = responseObject.events[i].organizer;
    var link =responseObject.events[i].link;

    myEvents += "<tr><td>" + name + "</td><td>" + desc + "</td><td>" + date + "</td><td>" + loc + "</td><td>" + org + "</td><td>" + link + "</td></tr>";
    }
    $("#eventsHere").html(myEvents);
  }
  xhttp.open("GET", "../js/events.json", true);
  xhttp.send('');

});


//////////////////
// parsing form for submission
window.addEventListener("DOMContentLoaded", function() {

   // get the form elements defined in your form HTML above

   var form = document.getElementById("submitEvent");
   var button = document.getElementById("my-form-button");
   var status = document.getElementById("my-form-status");

   // Success and Error functions for after the form is submitted

   function success() {
     form.reset();
    // button.style = "display: none ";
     status.innerHTML = "Thanks! Your event has been submitted.";
   }

   function error() {
     status.innerHTML = "Oops! There was a problem.";
   }

   // handle the form submission event

   form.addEventListener("submit", function(ev) {
     ev.preventDefault();
     var data = new FormData(form);
     ajax(form.method, form.action, data, success, error);
   });
 });

 // helper function for sending an AJAX request

 function ajax(method, url, data, success, error) {
   var xhr = new XMLHttpRequest();
   xhr.open(method, url);
   xhr.setRequestHeader("Accept", "application/json");
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== XMLHttpRequest.DONE) return;
     if (xhr.status === 200) {
       success(xhr.response, xhr.responseType);
     } else {
       error(xhr.status, xhr.response, xhr.responseType);
     }
   };
   xhr.send(data);
 }
