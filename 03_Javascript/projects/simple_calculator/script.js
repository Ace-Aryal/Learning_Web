let display = document.querySelector ("input") ;


function appendToDisplay (item){
  display.value += item;
  
}


let reset = document.querySelector ("#bc")
reset.addEventListener('click',resetfn)

function resetfn(e) {
  
  // Tab to edit
  display.value = ""
  
}

  // Tab to edit

function calculate() {
  try{
   display.value = eval(display.value)
}

catch (e) {
  // Tab to edit
  display.value = "Give correct Input "

}
}