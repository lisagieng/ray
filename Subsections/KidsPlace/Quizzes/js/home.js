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

//Quiz App adapted from https://www.codeexplained.org/2018/10/create-multiple-choice-quiz-using-javascript.html

//get the elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGuage = document.getElementById("timeGuage");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//create the questions
let questions = [
    {
        question : "How many million tons of food is wasted each year?",
        imgSrc : "img/quiz_time.png",
        choiceA : "21.5",
        choiceB : "54.2",
        choiceC : "400",
        correct : "A"
    },
    {
        question : "For every ton of glass recycled how many kilograms of carbondioxide is prevented?",
        imgSrc : "img/quiz_time.png",
        choiceA : "420",
        choiceB : "315",
        choiceC : "125.2",
        correct : "B"
    },
    {
        question : "Recycling an aluminum can can power a tv for how long?",
        imgSrc : "img/quiz_time.png",
        choiceA : "5 hours",
        choiceB : "30 minutes",
        choiceC : "2 hours",
        correct : "C"
    }
];

// variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const guageWidth = 150;
const guageUnit = guageWidth / questionTime;
let TIMER;
let score = 0;

//question render
function renderQuestion () {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

//start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}

//render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

//counter render
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGuage.style.width = count * guageUnit + "px";
        count++
    } else {
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            //end of quiz
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

//checkAnswer
function checkAnswer (answer) {
    if (answer == questions[runningQuestion].correct) {
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        //end of quiz
        clearInterval(TIMER);
        scoreRender();
    }
}

//answer is Correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function scoreRender() {
    scoreDiv.style.display = "block";

    const scorepercent = Math.round(100 * score / questions.length);

    let img = (scorepercent >= 80) ? "img/5.png" :
              (scorepercent >= 60) ? "img/4.png" :
              (scorepercent >= 40) ? "img/3.png" :
              (scorepercent >= 20) ? "img/2.png" :
              "img/1.png";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorepercent + "%</p>";
}
