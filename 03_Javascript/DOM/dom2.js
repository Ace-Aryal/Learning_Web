let btn = document.createElement("button")
btn.innerText="Click Me"
btn.style.backgroundColor = "red"
btn.style.color = "white"
btn.style.border = "1px solid black"
document.querySelector("body").prepend(btn)
// this all goes as inline styling

let par = document.querySelector(".para")

//par.setAttribute("class","newClass")
//console.log(par)
// created a new className and completely changed the style by removing original class but we only want to add a class not change tge style
par.classList.add("newClass")
 // bg comor of new class and text color of original class
 