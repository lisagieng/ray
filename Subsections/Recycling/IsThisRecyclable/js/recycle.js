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

/////////////
function sorrysearch() {
	document.getElementById('hidden0').style.display = 'block';
	document.getElementById('hidden1').style.display = 'block';
	document.getElementById('hidden2').style.display = 'block';
}

///////////////
$(function() {
  $('#searchIcon').autocomplete({
    source: "js/database-copy.json"
  });
});

// parsing json for items
$(function() {
  var myItems = "";
  var tags = "[";
  var i;
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if(xhttp.status === 200) {
      responseObject = JSON.parse(xhttp.responseText);
    }

  for(i = 0; i < Object.keys(responseObject.items).length; i++){
    var name = responseObject.items[i].name;
    var image = responseObject.items[i].image;
    var material = responseObject.items[i].commonlyMadeOf;
    var recycle = responseObject.items[i].recyclable;
    var more = responseObject.items[i].moreInfo;

    myItems += "<tr><td>" + name + "</td><td><a target='_blank' href='" + image + "'><img src='" + image + "' alt='Click to expand image' class='images'></a></td><td>" + material + "</td><td>" + recycle + "</td><td>" + more + "</td></tr>";
  }
  $("#resultsHere").html(myItems);
/*  console.log(tags);
    $( "#searchIcon" ).autocomplete({
      source: tags
    });*/
  }
  xhttp.open("GET", "json/database.json", true);
  xhttp.send('');


});
////////////////////
