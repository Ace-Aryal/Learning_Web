body = document.querySelector ("body")
let buttons = document.querySelectorAll(".btn")
console.log (buttons)

buttons.forEach((button)=>{
  
  button.addEventListener("click",(e)=>{
    console.log (e.target)
if(e.target.id ==="red"){
  body.style.backgroundColor ="red"
}
else if(e.target.id ==="orange"){
  body.style.backgroundColor ="orange"
}
else if(e.target.id ==="green"){
  body.style.backgroundColor ="green"
}
else if(e.target.id ==="blue"){
  body.style.backgroundColor ="blue"
}
else if (e.target.id === "dark") {
  body.style.backgroundColor = "black"
}
    }
  )
}
)