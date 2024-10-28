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
  resultDisplay.classList.remove("win" , "lose", "tie")
  
  
  const computerChoice = choices[Math.floor(Math.random()*3)]
 let result =""
  // Tab to edit
  if (playerChoice===computerChoice) {
    result = "It's a tie";
    
    
  } 
 else {
  switch (playerChoice) {
      case "rock": { if (computerChoice ==="scissors") {
        playerScore++
        result = "You Win , Your rock beat computer's scissors" 
      }
      else {
         result = "You lose , computer's paper beat your rock " 
         computerScore++
      }
      }
      
         break;
        case 'scissors':  { if (computerChoice ==="paper") {
          playerScore++
        result = "You Win , Your scissors beat computer's paper" 
      }
      else {
         result = "You lose , computer's rock beat your scissors " 
         computerScore++
      }
      }
      
          break;
          case 'paper':  { if (computerChoice ==="rock") {playerScore++
        result = "You Win , Your paper beat computer's rock" 
      }
      else {
         result = "You lose , computer's scissor beat your paper " 
         computerScore++
      }
      }
        
      
      
    }
  }
  
  playerChoiceDisplay.textContent = `Your Choice :${playerChoice}`
  computerChoiceDisplay.textContent =`Computer Choice :${computerChoice}`
  resultDisplay.textContent = result;
  
  if(result === "You Win , Your paper beat computer's rock" || result ===  "You Win , Your scissors beat computer's paper" ||result === "You Win , Your rock beat computer's scissors")  { 
  resultDisplay.classList.add("win")
  }
  
  if (result === "You lose , computer's scissor beat your paper " ||result === "You lose , computer's rock beat your scissors " || result ==="You lose , computer's paper beat your rock "  ) {
  resultDisplay.classList.add("lose")
  } 
  if
  (result === "It's a tie" ){
  resultDisplay.classList.add("tie")
  }
  
  playerScoreD.textContent= `Your Score : ${playerScore} `
  playerScoreD.style.color = "limegreen"

computerScoreD.textContent= `Computer Score : ${computerScore} `
computerScoreD.style.color ="red"

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
