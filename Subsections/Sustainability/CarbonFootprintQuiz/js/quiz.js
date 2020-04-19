var total=0;
function submitQuiz() {
	var results = [];
	console.log(document.getElementById("radio-group"));
	console.log(document.getElementsByName("question"));
	document.getElementsByName("question").forEach(addTotal);
}

function addTotal() {
	for(var i=1; i <= 3; i++){
		console.log(this);
	}
}