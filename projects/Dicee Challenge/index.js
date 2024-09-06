const playerOne = document.querySelector ('.img1')

const playerTwo = document.querySelector ('.img2')

const playerOneDie = Math.ceil((Math.random()*6))


const playerTwoDie = Math.ceil((Math.random()*6))

announcer = document.querySelector ('h1')





window.addEventListener('load',(e)=>{switch (playerOneDie) {
  case 1:
 playerOne.setAttribute("src","images/dice1.png")
    break;
    case 2:
    // Tab to edit
    playerOne.setAttribute("src","images/dice2.png")
    break;
    case 3:
    // Tab to edit
    playerOne.setAttribute("src","images/dice3.png")
    break;
    case 4:
    // Tab to edit
    playerOne.setAttribute("src","images/dice4.png")
    break;
    case 5:
      playerOne.setAttribute("src","images/dice5.png")
    // Tab to edit
    break;
    case 6:
    // Tab to edit
    playerOne.setAttribute("src","images/dice6.png")
    break;
  
  default:
    // Tab to edit
}})

window.addEventListener('load',(e)=>{switch (playerTwoDie) {
  case 1:
 playerTwo.setAttribute("src","images/dice1.png")
    break;
    case 2:
    // Tab to edit
    playerTwo.setAttribute("src","images/dice2.png")
    break;
    case 3:
    // Tab to edit
    playerTwo.setAttribute("src","images/dice3.png")
    break;
    case 4:
    // Tab to edit
    playerTwo.setAttribute("src","images/dice4.png")
    break;
    case 5:
      playerTwo.setAttribute("src","images/dice5.png")
    // Tab to edit
    break;
    case 6:
    // Tab to edit
    playerTwo.setAttribute("src","images/dice6.png")
    break;
  
  default:
    // Tab to edit
}
})

if (playerOneDie == playerTwoDie){
  announcer.innerText = "Draw"
}
else if (playerOneDie > playerTwoDie) {
  
  announcer.innerText = "Player One Won 🚩"
} else {
  announcer.innerText ="player Two Won 🚩"
}