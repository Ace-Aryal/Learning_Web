let currentTime = new Date().toLocaleTimeString()
console.log(currentTime)

let display = document.querySelector ("#display")

display.innerHTML= currentTime

setInterval(()=> {
  let currentTime = new Date().toLocaleTimeString('en-US')

  display.innerHTML= currentTime
},1000)