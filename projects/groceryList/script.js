
const addGroceryButton = document.querySelector ("#addItem")
const displayArea = document.querySelector (".displayArea")

let  deleteButton

addGroceryButton.addEventListener("click",addGrocery

)

function addGrocery(e){

  e.preventDefault()
  
  const inputGrocery = document.querySelector ("#inputGrocery")
  const grocery = inputGrocery.value
  const itemDiv = document.createElement("div")
  const togetherDiv = document.createElement("div")
  const label = document.createElement("label")
  const checkBox =document.createElement("input")
  checkBox.setAttribute("type","checkbox")
  const span = document.createElement("span")
  const taskParagraph = document.createElement("input")
  let taskParagraphSpan = document.createElement("span")
    
  
   deleteButton = document.createElement("button")
  
  
  displayArea.appendChild(itemDiv)
  
  itemDiv.appendChild(togetherDiv)
  itemDiv.appendChild(deleteButton)
  togetherDiv.appendChild(label)
  togetherDiv.appendChild(taskParagraph)
  label.appendChild(checkBox)
  label.appendChild(span)
  
  itemDiv.classList.add("item")
  togetherDiv.classList.add("together")
  label.classList.add("circular-checkbox")
  span.classList.add("checkmark")
  deleteButton.classList.add("delete")
  deleteButton.innerText = "×"
  taskParagraph.value= grocery;
  taskParagraph.classList.add("taskDisplay")
  taskParagraph.setAttribute("readonly","readonly")
  deleteButton.addEventListener('click',removeItem)

function removeItem(e) {
  e.preventDefault 
  displayArea.removeChild(itemDiv)
}


taskParagraph.addEventListener('click', markAsCompleted)
var marked = false
function markAsCompleted() {

if (marked) {
  marked = false
  taskParagraph.value = `${grocery}`
  checkBox.removeAttribute("checked")
taskParagraph.classList.remove("taskDisplayCompleted")
}
else  if(!marked){
    marked = true
  taskParagraph.value = `${grocery}`
  
  checkBox.setAttribute("checked","checked")
  taskParagraph.classList.add("taskDisplayCompleted")
  
  }
  

}



  
}

