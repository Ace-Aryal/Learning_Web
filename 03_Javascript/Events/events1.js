let body = document.querySelector ("body")
let btn = document.querySelector ("#mode")
let curmode = "light"
const handler = (e)=> {
  if (curmode ==="light") {
  btn.innerText = "Click For Light Mode";
  body.setAttribute("class","classdark")
  btn.setAttribute("class","classdark")
  curmode="dark"
}
  else {
    btn.innerText = "Click For Dark Mode";
  body.setAttribute("class","classlight")
  curmode="light"
  }
}
btn.addEventListener("click",handler)

let redDiv = document.querySelector (".red")
let blueDiv = document.querySelector (".blue")
let yellowDiv = document.querySelector (".yellow")

redDiv.addEventListener("click",()=>{
  body.setAttribute("class","classRed")
})
yellowDiv.addEventListener("click",()=>{
  body.setAttribute("class","classYellow")
})
blueDiv.addEventListener("click",()=>{
  body.setAttribute("class","classBlue")
})

