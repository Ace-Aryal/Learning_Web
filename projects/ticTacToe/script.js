

const boxes = document.querySelectorAll(".box")

const resetButton = document.querySelector ("#reset")
const display = document.querySelector ("#display")

//const turnDisplay = document.querySelector (".turn")
let turnO = true ;
const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [3,4,5],
  [6,7,8],
  [2,5,8]
  ]
  display.innerText = "Player O's Turn"
  resetButton.classList.add("invisible")
 // turnDisplay.innerText = "Player O's Turn"
  let winnerFound = false
  
  
  boxes.forEach((box)=> {
    box.addEventListener("click",(e)=> {
      if(turnO) {
      box.innerText = "O"
      
      turnO = false;
      display.innerText ="Player X'S Turn"
      
    }
    else{
    box.innerText ="X"
    
    turnO = true;
    display.innerText = "Player O's Turn"
  }
  box.disabled = true;
  checkWinner();
  
   }  )
  } )
  
  
    function checkWinner() {
    for (let pattern of winPatterns) {
      let pos0val = boxes[pattern[0]].innerText;
      let pos1val = boxes[pattern[1]].innerText;
      let pos2val = boxes[pattern[2]].innerText;
      
      if (pos0val != "" && pos1val !="" && pos2val !="") {
      
        if (pos0val == pos1val && pos0val == pos2val) {
          
          display.innerText = `winner ${pos0val}`
          
          
          endGame()
          winnerFound = true 
        }
              
      }

    }
    if ( !winnerFound && Array.from(boxes).every(box => box.disabled) ) {
      
  display.innerText = `It's a tie`
  endGame()
}

        
    }
    
    function endGame() {
      boxes.forEach (box => box.setAttribute("disabled","disabled") )
      resetButton.classList.remove("invisible")
      resetGame()
    }
    
    function resetGame() {
      resetButton.addEventListener("click", e => {
        e.preventDefault()
        boxes.forEach(box=>{ 
          box.innerText = null
          box.removeAttribute("disabled")
          turnO = true ;
          display.innerText ="Player 0's turn "
          winnerFound = false
        })
        
        
        
      })
    }