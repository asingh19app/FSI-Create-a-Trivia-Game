// Your Code Here

let userName = window.prompt ('Please enter name here:')
let userScore = 0
let playAgain = true
 
function playGame () {
for (let i = 0; i< questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if (userAnswer === question.correctAnswer){
 
        userScore = userScore + 10
    }
}
 
window.alert('Your score is :' +  userScore)
 
}
 
playGame()
 
while (playAgain === true) {
   
    let userChoice = window.prompt ('Would you like to play again? Answer yes or no')
 
    if (userChoice === 'yes') {
        playGame ()
    }
    else {
       window.alert ('Game has ended')
    }
}

