console.log ("test")
let Btn = document.querySelector("#BTN")
console.log (Btn.tagName);

let h2editor = document.querySelector("#myId")
console.log (h2editor)
h2editor.innerText = h2editor.innerHTML + " Apna College "
let box = document.querySelectorAll (".box") // returns nodelist which can be used with array loops
console.log (box)
//DRY
/*box[0].innerHTML="<h1>Hello0</h1>"
box[1].innerText ="Hello1"
box[2].innerHTML ="Hello2"*/ 
let i =0 ;
for(div of box){
  div.innerText = `Hello ${i}`
  i++
}