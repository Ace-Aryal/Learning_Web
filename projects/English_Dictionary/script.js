const APIURL = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const searchButton = document.querySelector ("button")
let displayArea = document.querySelector ("#displayArea")

const container = document.querySelector ("main")
isFirstTime = true

window.addEventListener("DOMContentLoaded",registerInput)
searchButton.addEventListener("click",registerInput)
function registerInput(e) {
  // Tab to edit
  let word
  if (isFirstTime) {
   word = "a"
  isFirstTime = false
}
else {
  const inputField = document.querySelector ("#inputField")
   word = inputField.value
}
  displayArea.innerHTML = ""
  e.preventDefault()
  

  
  inputField.value="" // as user hits search the value is held into "word" variable and input field is cleared 
  // so that user doesn't have to clear the field themselves 
  fetchAPIData(word)
}

async function fetchAPIData(word) {
  // Tab to edit
  let data
  try{
    // Tab to edit
  
  const response = await fetch(`${APIURL}${word}`)
data = await response.json()

if (!response.ok) {
  throw new Error(`Couldn't fetch data`)
}
createPage(data,word)

}
catch (e) { //Error Handling
  console.error ("Error: "+e)
  displayArea.innerHTML = data.message

}

function createPage(data,word) {
  //creating elements
  
  
  const wordContainer = document.createElement ("div")
  const wordDisplay = document.createElement ("h1")
  const pronouncerDisplay = document.createElement ("i")
  const pronounciationGuideDisplay = document.createElement ("span")
  const wordClauseDisplay = document.createElement ("span")
  const meaningDisplay = document.createElement ("span")
  
  const exampleDisplay = document.createElement ("input")
  
  appendElements()
  function appendElements() {
    container.appendChild(displayArea)
    displayArea.appendChild(wordContainer)
    wordContainer.appendChild(wordDisplay)
    wordContainer.appendChild(pronouncerDisplay)
    displayArea.appendChild(pronounciationGuideDisplay)
    displayArea.appendChild(wordClauseDisplay)
 
    displayArea.appendChild(meaningDisplay)
    if (data[0].meanings[0]?.definitions[0]?.example) {
    displayArea.appendChild(exampleDisplay)
    }
  }
  
  addClasslistsAndAttributes()
  function addClasslistsAndAttributes() {
    displayArea.id="displayArea"
    wordContainer.classList.add("wordContainer")
    pronouncerDisplay.classList.add("fa-solid","fa-volume-high")
    wordClauseDisplay.classList.add("wordClause")
    meaningDisplay.classList.add("meaning")
    exampleDisplay.classList.add("example")
  exampleDisplay.setAttribute("type","textarea")
  exampleDisplay.setAttribute("rows","5")
  }
  exampleDisplay.setAttribute("disabled","")
  
  addContents()
  function addContents() {
    wordDisplay.innerText= word
    pronouncerDisplay.addEventListener("click", e => {
      e.preventDefault ()
  
      const pronunciationAudio = new Audio (data[0].phonetics[0]?.audio)
      if (pronunciationAudio) {
        pronunciationAudio.play().catch(e=> {
          alert(`Couldn't find the pronunciation `)
        })
      }
  

    })
          pronounciationGuideDisplay.innerHTML = 
          `<small>${data[0].phonetics[1]?.text ?? ""}</small>`
      wordClauseDisplay.innerHTML =  `<small  >
      ${data[0].meanings[0]?.partOfSpeech ?? ""}
      ${data[0].meanings[1]?.partOfSpeech ?? "" }
      ${data[0]?.meanings[2]?.partOfSpeech ?? ""}
      </small>`
      
      meaningDisplay.innerHTML = 
      `${data[0].meanings[0]?.definitions[0]?.definition ?? ""} 
      <br/><br/> 
      ${data[0]?.meanings[1]?.definitions[0]?.definition ?? ""}
      <br><br>
      ${data[0]?.meanings[2]?.definitions[0]?.definition ?? ""}`
      
      
    exampleDisplay.value= 
    ` ${data[0].meanings[0]?.definitions[0]?.example ?? ""}`
    exampleDisplay.setAttribute("readonly","")
  
    
  }
  
  
}

} 