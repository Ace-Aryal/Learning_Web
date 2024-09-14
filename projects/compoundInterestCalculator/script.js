const principalel = document.querySelector ("#principal")
const rateel = document.querySelector ("#rate")
const yearel = document.querySelector ("#year")
const submit = document.querySelector ("#submit")

const resultDisplay = document.querySelector ("#resultDisplay")
const errorDisplay = document.querySelector ("#display")




submit.addEventListener("click",(e)=>{
  e.preventDefault()
  let principal = principalel.value
let rate = rateel.value/100;
let year = yearel.value 
if (principal < 0 || isNaN(principal) || rate < 0 || isNaN(rate) || year < 0 || isNaN(year) ) {
  errorDisplay.innerHTML= "Enter Correct Input "
}

else {
  
let total = (principal*((1+rate)**year)).toFixed(2)
let formattedTotal = new Intl.NumberFormat().format(total)

  resultDisplay.innerText = `$${formattedTotal}`
}
rateel.value = null
yearel.value = null
principalel.value = null
}
)


