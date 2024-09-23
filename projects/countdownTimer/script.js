const button = document.querySelector ("button")
let timerState = false
let timerUp = document.querySelector ("#timerUp")
let hourD =document.querySelector ("#hour")
let minutesD = document.querySelector ("#minute")
 let secondsD = document.querySelector ("#second")
 let ringing = false
 let timerSound = new Audio("./sound/pirates-bgm-v3-61425.mp3")
 let interval
if (!timerState) {
  

button.addEventListener("click",setTimer)

}

function setTimer(e){
  
  
  button.innerText = "stop"
  e.preventDefault()
  
  let hours = document.querySelector ("#hour").value
  
   let minutes = document.querySelector ("#minute").value
  
  
  let seconds = document.querySelector ("#second").value
  if(seconds || hours || minutes){
  timerState = true
   interval = setInterval( ()=>{
    
    if (seconds) {
      seconds--
      secondsD.value = seconds
    }
    else if (minutes) {
      minutes--
      seconds = 60
      minutesD.value = minutes
    }
    else if (hours) {
      hours--
      minutes = 60
      hourD.value = hours
    }
    else {
      
      timerSound.play()
      ringing= true
      reset()
      timerUp.innerText = `Timer up`
      clearInterval(interval)
      
      
    }
    
  },1000)
  }
  else {
    reset()
  }
}
  
  function reset(){
    hourD.value = null
    minutesD.value= null
    secondsD.value = null
    seconds = null
    hours = null
    minutes = null
    timerUp.innerText = ""
    
    
  }
  
  button.addEventListener("click" , e=> {
    e.preventDefault()
    
    if(timerState) {
      secondsD.value = null
      reset()
      button.innerText = "Timer"
      timerState = false
      
    }
    
    if(ringing) {
      timerSound.pause()
      timerSound.currentTime = 0
    }
  })


  
    
