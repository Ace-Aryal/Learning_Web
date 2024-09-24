// creating global varibales 


const submitButton = document.querySelector ("#submit")
const reset = document.querySelector ("#reset")
let timerState = false
let timerUp = document.querySelector ("#timerUp")
const hourD =document.querySelector ("#hour")
const minutesD = document.querySelector ("#minute")
 const secondsD = document.querySelector ("#second")
 let ringing = false
 
 const timerSound = new Audio("./sound/pirates-bgm-v3-61425.mp3")
 let hours
 let minutes
 let seconds
 let interval
 
 
 // setting timer
submitButton.addEventListener('click',e => {
  e.preventDefault()
  
  hourD.setAttribute("readonly","readonly")
  minutesD.setAttribute("readonly","readonly")
  secondsD.setAttribute("readonly","readonly")
  
  hours =document.querySelector ("#hour").value
  minutes =document.querySelector ("#minute").value
  seconds = document.querySelector ("#second").value
  
  if (!timerState) {
    
  
 interval =  setInterval( timer , 1000)
 timerState= true
  }
})




   // timer function
    function timer() {
      
    
  if (seconds >0) {
    seconds--
    
  }
  else if (minutes >0) {
    
    minutes--
    seconds = 59
    
    
  }
  else if (hours>0) {
    
    hours--
    minutes = 60
    
    
    
  }
  else { // when timer is up
    timerSound.play()
    ringing = true
    reset.click()
    timerUp.innerText = "Timer up ! Double click the reset button to stop timer sound"
    
  }
   
    
    hourD.value = hours
    minutesD.value = minutes
    secondsD.value = seconds
}

// normal reset
reset.addEventListener('click', e => {
  minutes = 0
  seconds = 0
  hours = 0
  clearInterval(interval)
   if (!ringing) {
  timerState  = false
}
makeWrittable()
})

// reset after timer up 
reset.addEventListener('dblclick', function () {
  timerSound.pause()
  timerSound.currentTime = 0;
  timerUp.innerHTML = "";
  timerState = false
  ringing = false
  makeWrittable()
})


function makeWrittable() {
  hourD.removeAttribute("readonly")
  minutesD.removeAttribute("readonly")
  secondsD.removeAttribute("readonly")
}
