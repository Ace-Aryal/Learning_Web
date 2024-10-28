const submit = document.querySelector ("button")
const display = document.querySelector ("h2")
submit.addEventListener("click" ,e => {
  e.preventDefault()
  const input = document.querySelector ("input")
  initialInputVal = input.value.toString().toLowerCase().trim()
// string are immutable, every string method returns a new string
finalInputVal = initialInputVal.split("").toReversed().join("") // split and join must take parameters to function

if(initialInputVal !== finalInputVal) {
  display.innerText = `The given input is not palindrome`
}
if(initialInputVal=== finalInputVal) 
display.innerText = `The given input is palindrome`
})


