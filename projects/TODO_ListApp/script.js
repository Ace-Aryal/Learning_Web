window.addEventListener("load",()=>{
  const form = document.querySelector ("#newTaskForm")
  const input = document.querySelector ("#newTaskInput")
  const list_el = document.querySelector ("#tasks")
  
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const task = input.value ;
    input.value = ""
    
   if(!task)  {
     alert("please input task first")
   return ;
  }
  const task_el = document.createElement("div")
  task_el.classList.add("task") // outermost div for
  // tasks to create
  const task_content_el = document.createElement("div")
  // creating content div 
  task_content_el.classList.add("content");
  
  
  //appending content div inside task div
  task_el.appendChild(task_content_el)
  
 //creating input element
  const task_input_el = document.createElement ("input");
  task_input_el.classList.add("text")
  task_input_el.type = "text"
  task_input_el.value = task;
  task_input_el.setAttribute("readonly","readonly")
  
  // appending input field inside content div
task_content_el.appendChild(task_input_el)

// apending outermost task div to " tasks" div
  list_el.appendChild(task_el)
  
  
  
  const task_actions_el = document.createElement ("div")
  task_actions_el.classList.add("actions")
  
  const task_edit_button = document.createElement ("button")
  task_edit_button.classList.add("edit")
  task_edit_button.innerHTML = "Edit"

const task_delete_button = document.createElement ("button")
  task_delete_button.classList.add("delete")
  task_delete_button.innerHTML = "Delete"
  
  task_actions_el.appendChild(task_edit_button)
  task_actions_el.appendChild(task_delete_button)
  
  task_el.appendChild(task_actions_el)
  
  list_el.append(task_el)
  
  task_edit_button.addEventListener('click',()=>{
    
    if (task_edit_button.innerText.toLocaleUpperCase()=="EDIT") {
      task_input_el.removeAttribute("readonly")
      task_input_el.focus()
      task_edit_button.innerText = "Save";
    }
    else{
      task_input_el.setAttribute("readonly","")
      task_edit_button.innerText = "Edit"
    }
  })
  
  
  task_delete_button.addEventListener('click',()=>{
    
    
    list_el.removeChild(task_el) // donot use remove use remove child
  })
  
  console.log(task_edit_button)
  })
})