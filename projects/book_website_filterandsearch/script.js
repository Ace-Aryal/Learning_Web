 import booksArray from './booksData.js';
const displayArea = document.querySelector (".displayArea")
const searchButton = document.querySelector ("#searchButton")

const buttons = document.querySelectorAll(".filterButtons")
let searchedBooks
//new learning
window.addEventListener("DOMContentLoaded",()=> {
  const allButton = document.querySelector ("#All")
  allButton.focus()
  filterAndReturnProductsByCatagoy("All")
})
searchButton.addEventListener("click",registerInput)
buttons.forEach(button=> {
  button.addEventListener("click",(e)=> {
    const catagory = button.id
 
    registerInput(e,catagory)
  })
})




function registerInput(e,catagory=null) {
  e.preventDefault ()
  
 const  searchBar = document.querySelector ("#searchBar")
 
 if (e.target.id!== "searchButton") {
   
   filterAndReturnProductsByCatagoy(catagory)
 }
 if (e.target.id=== "searchButton") {
   const searchedValue = searchBar.value.trim().toLowerCase()
   searchBar.value =""
   filterAndReturnProductsBySearch(searchedValue)
 }
 
}  



function filterAndReturnProductsByCatagoy(catagory){
  if (catagory !=="All") {
    
searchedBooks = booksArray.filter(book=>book.genres.includes(catagory))
}
  // basic "includes" wasted your 30 min , 
  // includes checks characters in case of string and members in case of arrays
if (catagory ==="All") {
  searchedBooks = booksArray
}


createPage()

}


function filterAndReturnProductsBySearch(searchedValue) {
  
 searchedBooks = booksArray.filter((book)=> book.title.trim().toLowerCase().includes(searchedValue))
 console.log(searchedBooks)
 if (!searchedBooks.length) {
   displayArea.innerHTML = `Sorry, we couldn't find the book :(`
   displayArea.classList.add("errorMessage")
 }
 
 if(searchedBooks.length){
   displayArea.classList.remove("errorMessage")
 createPage()
 }
}

function createPage() {
  displayArea.innerHTML=""
  searchedBooks.forEach(book=>{
  const itemCard = document.createElement ("div")
  const cardImage = document.createElement ("img")
  const cardTitle = document.createElement ("h2")
  const cardGenre = document.createElement ("p")
  
  
  appendElements()
  addAttributes()
  addContents()
  
  function appendElements() {
    
      displayArea.appendChild(itemCard)
      itemCard.appendChild(cardImage)
      itemCard.appendChild(cardTitle)
      itemCard.appendChild(cardGenre)
      
    
    
  }
  
  function addAttributes(param) {
    // Tab to edit
    
      displayArea.classList.add("displayArea")
      itemCard.classList.add("itemCard")
      
    
  }
  
  function addContents(param) {
    const alternateImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019"
      cardImage.src =  book.image_url?book.image_url:alternateImage
      cardTitle.innerText = book.title 
      cardGenre.innerText = book.genres
      
    
  }
  }
  )
}