const choices = ["rock","paper","scissors"]
const playerChoiceDisplay = document.querySelector ("#playerChoiceDisplay")
const computerChoiceDisplay =  document.querySelector ("#computerChoiceDisplay")
const resultDisplay = document.querySelector ("#resultDisplay")
const playerRock = document.querySelector ("#rock")
const playerPaper = document.querySelector("#paper")
const playerScissors = document.querySelector("#scissors")
const gameInitializer = document.querySelector ("#initialDisplay")

let playerScore = 0;
let computerScore =0;

const playerScoreD = document.querySelector ("#playerScoreD")
const computerScoreD = document.querySelector ("#computerScoreD")



function playerGame (playerChoice) {
  const computerChoice = choices[Math.floor(Math.random()*3)]
 let result =""
  // Tab to edit
  if (playerChoice===computerChoice) {
    result = "It's a tie";
    
    
  } else {
    switch (playerChoice) {
      case "rock":result = (computerChoice ==="scissors")? 'You Win !':'You lose :(';
      
        // Tab to edit
        break;
        case 'scissors': result = (computerChoice ==="paper")?'You Win !':'You lose :(';
          // Tab to edit
          break;
          case 'paper': result = (computerChoice==="rock")?"You Win !" :"You lose (:";
            // Tab to edit
            break;
          
        
      
      
    }
  }
  if (playerChoice===computerChoice) {
    
    
    
  } else {
  switch (playerChoice) {
      case "rock": (computerChoice ==="scissors")? playerScore++:computerScore++;
      
        // Tab to edit
        break;
        case 'scissors': (computerChoice ==="paper")? playerScore++:computerScore++;
          // Tab to edit
          break;
          case 'paper': (computerChoice==="rock")? playerScore++ :computerScore++;
            // Tab to edit
            break;
          
        
      
      
    }
  }
  
  playerChoiceDisplay.textContent = `Your Choice :${playerChoice}`
  computerChoiceDisplay.textContent =`Computer Choice :${computerChoice}`
  resultDisplay.textContent = result;
  
  playerScoreD.textContent= `Your Score : ${playerScore} `

computerScoreD.textContent= `Computer Score : ${computerScore} `
}


playerRock.addEventListener('click',(e)=>{
  e.preventDefault()
  playerGame("rock")
  gameInitializer.remove()
})
playerPaper.addEventListener('click', (e) => {
  e.preventDefault()
  playerGame("paper")
  gameInitializer.remove()
  
})
playerScissors.addEventListener('click',(e)=>{
  e.preventDefault()
  playerGame("scissors")
  gameInitializer.remove()
})