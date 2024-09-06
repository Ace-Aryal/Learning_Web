let randomNumber = Math.ceil(Math.random() *1000)

console.log(randomNumber)
const guessField = document.querySelector ("#guessField")

const submit = document.querySelector ("#subt")

const guessSlot = document.querySelector (".guesses")

const remaining = document.querySelector (".lastResult")

const lowOrHigh = document.querySelector (".lowOrHigh")

const startOver = document.querySelector (".resultParas")

const para = document.createElement('p')




let prevGuess =[]

let numGuess = 1;

let playGame = true;


if(playGame){
  submit.addEventListener('click',function (e) {
    e.preventDefault();
  const guess = parseInt(guessField.value)
  validateGuess(guess)
  
  })
}


function validateGuess(guess) { // to validaw guess is betn 1-100 and is a number
  if (isNaN(guess)) {
    alert("please enter a valid number")
    
  }
  else if (guess < 1 || guess > 1000) {
    alert("Guess must be between 1 and 100")
  }
  else{
    prevGuess.push(guess)
    if (numGuess >= 10) {
      displayGuess(guess)
      displayMessage(`Game Over, Random number was ${randomNumber}`)
      endGame();
    }
    else {
      displayGuess(guess)
      checkGuess(guess)
    }
    
  }
  
}

function checkGuess(guess) {
  // Ckeck the input number 
  if (guess === randomNumber) {
    displayMessage('You guessed it right')
    endGame()
  } else if (guess < randomNumber) {
    displayMessage('Guessed number is TOO low')
    
  }
  else if (guess > randomNumber) {
    displayMessage('Guessed number is TOO high')
  }
}

function displayGuess (guess){
  // clean the guess , update previous guesses and guesses remaining
  
  guessField.value =''
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  // Tab to edit
  // display to player
  
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
  
}


function endGame(param) {
  // 
  
  guessField.value = ''
  guessField.setAttribute('disabled',''); // key pair value hut disabled don't have value 
  para.classList.add('button')
  para.innerHTML = `<h2 id="newGame" > Start New Game</h2>`
  
  startOver.appendChild(para)
  playGame = false ;
  submit.setAttribute('disabled','')
  newGame();
  
}


function newGame(param) {
  
  // 
const restarter =  document.querySelector ('#newGame')
restarter.addEventListener('click',(e)=>{
  prevGuess = []
  numGuess =1 
  remaining.innerHTML = `${11- numGuess}`
  randomNumber = Math.ceil(Math.random() *100)

guessSlot.innerHTML=''
guessField.removeAttribute('disabled')

playGame = true;

startOver.removeChild(para)
submit.removeAttributeNS('disabled')
  
})
}

