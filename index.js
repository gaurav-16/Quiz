var readlineSync = require("readline-sync");

var score = 0;

var topScores = [
  {
    name: "Player1",
    score: 3,
  },
  {
    name: "Player2",
    score: 2,
  },
]

 
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Gaurav?");


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 

    console.log("Right!");
    score = score + 1;
    
  } else {
    console.log("Wrong!");
    score = score - 1;
  }

  console.log("current score: ", score);
  console.log("-------------")
}

var questions = [{
  question: "Where do I live? ",
  answer: "Nashik"
}, 
{
  question: "What would i prefer cofee or tea? ",
  answer: "Tea"
},
{
  question: "My favourite series? ",
  answer: "Stranger Things"
}];

   for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }

function displayScores() {
  console.log("YAY! You Scored: ", score);

  console.log("Check out the top scores, if you should be there ping me and I'll update it");

  topScores.map(score => console.log(score.name, " : ", score.score))
}
displayScores();