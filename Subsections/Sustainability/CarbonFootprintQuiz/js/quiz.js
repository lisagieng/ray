function submitQuiz() {
	var result = getCheckedBoxes("answer");
	if(result >= 10){
		//DOING A GREAT JOB
		document.getElementById("quizResults").innerHTML = "<div class='row pt-3 pb-3 bg-alt'><div class='col-md-7 col-12'><h3>You're doing a great job!</h3><p>You're doing a lot to reduce your carbon footprint. You should be proud! </p></div><div class='col-md-4 col-12' id='img_container'><img id='sus_img' src='img/thumbsUp.png' alt='Great Job!'></div></div>"
	}else if(result < 10 && result >= 3){
		//DOING AN OKAY JOB
		document.getElementById("quizResults").innerHTML = "<div class='row pt-3 pb-3 bg-alt'><div class='col-md-7 col-12'><h3>You're doing okay!</h3><p>You haven't made too many steps to reduce your carbon footprint, but it's a start. Keep working towards bringing down your impact!</p></div><div class='col-md-4 col-12' id='img_container'><img id='sus_img' src='img/okayResults.png' alt='Keep working!'></div></div>"
	}else if(result < 3){
		//DOING A BAD JOB
		document.getElementById("quizResults").innerHTML = "<div class='row pt-3 pb-3 bg-alt'><div class='col-md-7 col-12'><h3>You're not doing too well!</h3><p>It certainly may seem difficult to reduce your carbon footprint, but if you work at it you should be able to do better.</p></div><div class='col-md-4 col-12' id='img_container'><img id='sus_img' src='img/badResults.png' alt='Great Job!'></div></div>"
	}
}

function addTotal() {
	for(var i=1; i <= 3; i++){
		console.log(this);
	}
}

function getCheckedBoxes(chkboxName) {
  var total = 0;
  var checkboxes = []
  for(i=1; i<=3; i++){
    checkboxes[i - 1] = document.getElementsByName(chkboxName + i);
  }
  var checkboxesChecked = [];
  console.log(checkboxes);
  // loop over them all
  for (var j=0; j < 3; j++){
	  for (var i=0; i<checkboxes[j].length; i++) {
		 // And stick the checked ones onto an array...
		 if (checkboxes[j][i].checked) {
			checkboxesChecked.push(checkboxes[j][i]);
			console.log(checkboxes[j][i].value);
			total += parseInt(checkboxes[j][i].value);
		 }
	  }
  }
  return total;
}