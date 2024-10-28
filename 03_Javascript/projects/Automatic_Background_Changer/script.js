// selecting elements 

const body = document.querySelector ("body")
const start = document.querySelector ("#start")
const stop = document.querySelector ("#stop")



// Random color hex value generation
function randomColor () {
  const hex ='0123456789ABCDEF' // string of hex
  let color='#' // color 
  for (var i = 0; i < 6; i++) {
    color +=  hex[Math.floor(Math.random()*16)] // concatenation of color with random index hex string 6 timea
  }
  body.style.backgroundColor = color // changing bg color
}




// making starter global to use stoppee in global
let starter;
function startChangingColor (param) {
  if (!starter){ // starts changing color only if starter is null or undefined
     starter = setInterval( randomColor , 1000
  )
  }
}


  // passing random color fn into set interval 
  function stopChangingColor(param) {
    const stopper = clearInterval(starter)
    starter = null; // on stopping clears the memory to null
  }

  
  // start changing color
  
  start.addEventListener('click', startChangingColor)
  
    // stopping set interval stop changing color
  stop.addEventListener('click', stopChangingColor)
  
  
  
  

