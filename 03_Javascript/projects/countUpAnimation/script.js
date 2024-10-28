const counters = document.querySelectorAll(".num")
const lowestCounter = document.querySelector ("#lowest")
window.addEventListener("DOMContentLoaded",(e)=> {

  e.preventDefault()
  animateCountUp()
})

function animateCountUp() {
  let duration = 2000
  counters.forEach((counter)=> {
  let startValue = 0
  let endValue = parseInt(counter.getAttribute("dataVal"))
    
    let timer = setInterval(()=> {
              ++startValue
        counter.innerText = startValue
      if (startValue === endValue){
        
        clearInterval(timer)
      }
      
      
    },Math.floor(duration/endValue))
  })
}