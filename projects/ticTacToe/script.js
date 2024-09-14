

const boxes = document.querySelectorAll(".box")

const resetButton = document.querySelector ("#reser")
const display = document.querySelector ("#display")

let turnO = true ;
const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [3,4,5],
  [6,7,8]
  ]
  
  
  
  
  boxes.forEach((box)=> {
    box.addEventListener("click",(e)=> {
      if(turnO) {
      box.innerText = "O"
      turnO = false;
      
    }
    else{
    box.innerText ="X"
    turnO = true;
  }
  box.disabled = true;
  checkWinner();
  
   }
  )
  }
    )
    
    function checkWinner() {
    for (let pattern of winPatterns) {
      let pos0val = boxes[pattern[0]].innerText;
      let pos1val = boxes[pattern[1]].innerText;
      let pos2val = boxes[pattern[2]].innerText;
      
      if (pos0val != "" && pos1val !="" && pos2val !="") {
        if (pos0val == pos1val && pos0val == pos2val) {
          
          display.innerText = `winner ${pos0val}`
        }
      }
    }
    }
    