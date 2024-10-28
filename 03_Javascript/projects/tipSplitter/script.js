const button  = document.querySelector ('button')
let display = document.querySelector ("h2")

button.addEventListener("click",e => {
  e.preventDefault()
  const total = Number(document.querySelector ("#total").value)
  
  const percent = Number(document.querySelector ("#percent").value)
  const numberOfPeople = Number(document.querySelector ("#num").value)
  if (isNaN(total) || isNaN(percent) || isNaN(numberOfPeople)) {
    display.innerText = "Please input Number "
  }
  if (!(isNaN(total) || isNaN(percent) || isNaN(numberOfPeople))) {
    
  
  let grandTotal = (total + total*0.01*percent )
  console.log(grandTotal)
  let tipPerPerson = (grandTotal/numberOfPeople).toFixed(2)
  
  display.innerText = `Split per person is ${tipPerPerson}`
  }
})