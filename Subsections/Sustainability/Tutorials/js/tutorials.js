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
		console.log(data.items[0].snippet.channelId);
		document.getElementById("videoTitle").innerHTML = data.items[0].snippet.title;
		document.getElementById("videoDescription").innerHTML = data.items[0].snippet.description;
		$.getJSON("https://www.googleapis.com/youtube/v3/channels?part=id%2Csnippet&id=" + data.items[0].snippet.channelId + "&key=AIzaSyCbtewZ7C10gOc9eyjccWkBjRFsFmAFxKE", function( channel ) {
			document.getElementById("videoTitle").innerHTML += "</h3><h4> by </h4><h3>" + channel.items[0].snippet.title;
		});
	});
};