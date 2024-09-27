
const addGroceryButton = document.querySelector ("#addItem")
const displayArea = document.querySelector (".displayArea")
const mode = document.querySelector ("#mode")
let  deleteButton
const body = document.querySelector ("body")






addGroceryButton.addEventListener("click",addGrocery

)

function addGrocery(e){

  e.preventDefault()
  
  
  const inputGrocery = document.querySelector ("#inputGrocery")
  if (inputGrocery.value) {
    
  
   const grocery = inputGrocery.value
   inputGrocery.value = null
   //creating elementa
  
  
  const itemDiv = document.createElement("div")
  const togetherDiv = document.createElement("div")
  const label = document.createElement("label")
  const checkBox =document.createElement("input")
  checkBox.setAttribute("type","checkbox")
  const span = document.createElement("span")
  const taskParagraph = document.createElement("input")
  let taskParagraphSpan = document.createElement("span")
     deleteButton = document.createElement("button")
  
  
  
  //appending ekementa
  displayArea.prepend(itemDiv)
  
  itemDiv.appendChild(togetherDiv)
  itemDiv.appendChild(deleteButton)
  togetherDiv.appendChild(label)
  togetherDiv.appendChild(taskParagraph)
  label.appendChild(checkBox)
  label.appendChild(span)
  
  
  // adding classlist and values 
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

// adding event listener to mark as completed 
taskParagraph.addEventListener('click', markAsCompleted)

let marked = false
checkBox.addEventListener("change",e=>{
  if(checkBox.checked) {
    taskParagraph.classList.add("taskDisplayCompleted")
  
  }
  else {
taskParagraph.classList.remove("taskDisplayCompleted")
  }
  
})



//neated fn to remove items 
function removeItem(e) {
  e.preventDefault 
  displayArea.removeChild(itemDiv)
}



// marked as completed fb

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
  
}

