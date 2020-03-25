// parsing events.xml file
google.load("feeds", "1");

   function initialize() {
     var feed = new google.feeds.Feed("https://www.lisagieng.github.io/ray/Subsections/Locater/Events/js/events.xml");
     feed.load(function(result) {
       if (!result.error) {
         var container = document.getElementById("eventsHere");
         for (var i = 0; i < result.feed.entries.length; i++) {
           var entry = result.feed.entries[i];
           var tr = document.createElement("tr");
           var info = "<td>" + entry.name + "</td><td>" + entry.description + "</td><td>" + entry.date + "</td><td>" + entry.location + "</td><td>" + entry.organizer + "</td><td>" + entry.link + "</td><td>"
           tr.innerHTML = info;
           container.appendChild(tr);
         }
       }
     });
   }
   google.setOnLoadCallback(initialize);
