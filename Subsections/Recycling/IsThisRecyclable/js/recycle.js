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

// parsing json for items
$(function() {
  var myItems = "";

  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if(xhttp.status === 200) {
      responseObject = JSON.parse(xhttp.responseText);
    }

  for(var i = 0; i < Object.keys(responseObject.items).length; i++){
    var name = responseObject.items[i].name;
    var image = responseObject.items[i].image;
    var material = responseObject.items[i].commonlyMadeOf;
    var recycle = responseObject.items[i].recyclable;
    var more = responseObject.items[i].moreInfo;

    myItems += "<tr><td>" + name + "</td><td><a target='_blank' href='" + image + "'><img src='" + image + "' alt='Click to expand image' class='images'></a></td><td>" + material + "</td><td>" + recycle + "</td><td>" + more + "</td></tr>";
    }
    $("#resultsHere").html(myItems);
  }
  xhttp.open("GET", "json/database.json", true);
  xhttp.send('');

});
////////////////////

/////////////////////
// search function
function searchParse() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = $("#searchIcon");
  filter = input.value.toUpperCase();
  table = $("#myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
////////////////////
