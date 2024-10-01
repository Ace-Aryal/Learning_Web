const previousButton = document.querySelector (".previous")
const nextButton = document.querySelector (".next")

const slider = document.querySelector (".slider")

const slides = document.querySelectorAll (".slides img")

let count = 0

document.addEventListener("DOMContentLoaded", showImagefn)

previousButton.addEventListener("click",showPrevious)
nextButton.addEventListener("click",showNext)


function showImagefn() {
  slides.forEach(img => {
    img.classList.remove("showImage")
  })
  
  
  slides[count].classList.add("showImage")
  
  
  }

function showNext (e) {
  e.preventDefault()
  if(count >= (slides.length -1) ){
  count = 0
  }
  else {
    count++
  }
  showImagefn()
}

function showPrevious(e) {
  e.preventDefault()
  if (count < 1) {
    count = slides.length - 1
    
  }
  else{
  count--
  
  }
  showImagefn()
  
}

