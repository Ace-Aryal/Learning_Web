let button = document.querySelector ('button')

let body = document.querySelector ("body")

let colorString ="0123456789ANCDEF"
let newColorString ="#"

button.addEventListener('click', randomColorGenerator)




function randomColorGenerator(e) {
  newColorString="#"
  e.preventDefault()
    for (var j= 0; j < 6; j++) {
      // Tab to edit
    let index = Math.floor(Math.random()*16)
    newColorString += colorString[index]
    }
  body.style.backgroundColor = newColorString
  console.log(newColorString)
  
  
  
}
