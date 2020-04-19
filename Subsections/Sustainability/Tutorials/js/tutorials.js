$(document).ready(function () {
    $(".rArrow").bind("click", function (event) {
        event.preventDefault();
        $(".playlist").stop().animate({
            scrollLeft: "+=336"
        }, 750);
    });
    $(".lArrow").bind("click", function (event) {
        event.preventDefault();
        $(".playlist").stop().animate({
            scrollLeft: "-=336"
        }, 750);
    });
});

function fillDescription(){
	var url = document.getElementById("video").src;
	var youtubeID = url.slice(26, 37);
	console.log(youtubeID);
	$.getJSON( "https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet&id=" + youtubeID + "&key=AIzaSyCbtewZ7C10gOc9eyjccWkBjRFsFmAFxKE", function( data ) {
    console.log(data.items[0].snippet.localized.title);
	document.getElementById("videoTitle").innerHTML = data.items[0].snippet.localized.title;
	document.getElementById("videoDescription").innerHTML = data.items[0].snippet.localized.description;
});
};