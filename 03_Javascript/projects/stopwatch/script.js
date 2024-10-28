const minutesDisp = document.querySelector ("#minutes")
const secondsDisp  = document.querySelector ("#seconds")
const centisecondsDisp = document.querySelector ("#centiseconds")
const resetButton = document.querySelector ("#reset")
const toggler = document.querySelector ("#toggler")
const lapDisplayArea = document.querySelector ("#lapDisplayArea")
let stopwatchStatus = "notStarted"
let lapIndex = 1
let stopwatchInterval
let isStopWatchRunning = false
resetButton.addEventListener("click", reset)

toggler.addEventListener("click",
toggle
)

function toggle (e) {
  e.preventDefault()
  console.log(stopwatchStatus)
  if (stopwatchStatus === "notStarted" ) {
    
    toggler.innerText = "Stop"
    start()
    lap()
  }
else  if (stopwatchStatus === "started") {
    stop()
    lap()
    
    
  }
 else if (stopwatchStatus === "stopped") {
    resume()
    lap()
  }
  
  
}

function start() {
  stopwatchStatus = "started"
  toggler.style.backgroundColor = "coral"
  stopwatchInterval= setInterval(
    ()=> {
      if (centisecondsDisp.value < 99) {
        
      
      centisecondsDisp.value = formatNumber(centisecondsDisp.value)
      incrementSecond()
      }
      
    
    },10
    )
    
    
}

function stop() {
  if (stopwatchStatus ==="notStarted") {
    toggler.innerText = "Start"
  } // for reset button
  else{
    toggler.innerText ="Resume"
  }
  toggler.style.backgroundColor = "seagreen"
  stopwatchStatus = "stopped"
    
    clearInterval(stopwatchInterval)
}


function resume() {
  toggler.innerText = "Stop"
  stopwatchStatus = "started"
  start()
}

function formatNumber(num) {
  if (num) {
    num++
  } // when padding zero value ,it doesn't increment it
  return String(num).padStart(2,0)
}

function reset(e){
  e.preventDefault()
  if (stopwatchStatus === "stopped") {
    stopwatchStatus = "notStarted"
    toggler.innerText = "Start"
    minutesDisp.value ="00"
    secondsDisp.value ="00"
    centisecondsDisp.value="00"
    lapDisplayArea.innerHTML=""
    
    
  }
   if(stopwatchStatus==="started") {
     
    const lapDisplay = document.createElement ("p")
    lapDisplay.classList.add("lapDisplay")
    lapDisplay.innerHTML = `Lap ${lapIndex} at <code>${Math.floor(minutesDisp.value)} min ${Math.floor(secondsDisp.value)}.${centisecondsDisp.value}  sec </code>`
    lapDisplayArea.appendChild(lapDisplay)
    if (isStopWatchRunning) {
      lapIndex++
    }
    
  }
}

function incrementSecond() {
  // Tab to edit
  if (secondsDisp.value < 60 && centisecondsDisp.value >= 99) {
        centisecondsDisp.value = "00"
        
        
        secondsDisp.value = formatNumber(secondsDisp.value)
      }
      incrementMinutes()
}

function incrementMinutes () {
  if (secondsDisp.value >=60) {
        secondsDisp.value = formatNumber(0)
        minutesDisp.value = formatNumber(minutesDisp.value)
      }
      
}

function lap () {
  if (stopwatchStatus ===`started`) {
    isStopWatchRunning = true
    resetButton.innerText = `Lap`
    
    
  }
  else{
    resetButton.innerText = `Reset`
    isStopWatchRunning= false
    lapIndex = "1"
  }
  
} 