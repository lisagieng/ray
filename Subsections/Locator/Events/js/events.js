// parsing events.xml file
google.load("feeds", "1");

   function initialize() {
     var feed = new google.feeds.Feed("https://raw.githubusercontent.com/lisagieng/ray/master/Subsections/Locator/Events/js/events.xml");
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
