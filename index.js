const readlineSync = require("readline-sync");

let score = 0;

const topScores = [
  {
    name: "Player1",
    score: 3,
  },
  {
    name: "Player2",
    score: 2,
  },
]

 
 const userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Gaurav?");


function play(question, answer) {
  const userAnswer = readlineSync.question(question);

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

const questions = [{
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

   for (let i=0; i<questions.length; i++) {
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }

function displayScores() {
  console.log("YAY! You Scored: ", score);

  console.log("Check out the top scores, if you should be there ping me and I'll update it");

  topScores.map(score => console.log(score.name, " : ", score.score))
}
displayScores();