const APIURL = `https://restcountries.com/v3.1/name/`
let inputField
const searchButton = document.querySelector ("button")
const displayArea = document.querySelector (".displayArea")
let isFirstTime = true
window.addEventListener("DOMContentLoaded",registerInput)
searchButton.addEventListener("click",registerInput)


function registerInput (e){
  let countryName
  // Tab to edit
  displayArea.classList.remove("errorDisplay")
  displayArea.innerHTML =""
  inputField = document.querySelector ("#inputField")
  e.preventDefault ()
  if (inputField.value ) {
     countryName = inputField.value
     inputField.value = ""
    getAPIData(countryName)
  
  }
  else if (isFirstTime) {
    countryName ="Nepal"
    getAPIData(countryName)
    isFirstTime = false
  }
  else{
    // display some message
    displayArea.innerText = `Input Field Cannot Be Empty`
    displayArea.classList.add("errorDisplay")
  }
  
}

async function getAPIData(countryName) {

try {
  const response = await fetch(`${APIURL}${countryName}?fullText=true`)
  const data = await response.json()
  if (!response.ok) {
    throw new Error("Couldn't fetch data")
  }
  createPage(data)
  
} catch (e) {
  
  displayArea.innerText = `Country Not Found`
  displayArea.classList.add("errorDisplay")
  
}



  
}

function createPage(data) {
  
  // Tab to edit
  const flagArea = document.createElement ("div")
  const flagImageDisplay = document.createElement ("img")
  const countryNameDisplay = document.createElement ("h1")
  const descriptionArea = document.createElement ("div")
  const capitalDisplay = document.createElement ("p")
  const continentDisplay = document.createElement ("p")
  const populationDisplay = document.createElement ("p")
  const currencyDisplay = document.createElement ("p")
  const commonLanguageDisplay = document.createElement ("p")
  
  
  appendElements()
  setAttributes()
  addContents()
  function appendElements() {
    // Tab to edit
    displayArea.appendChild(flagArea)
    displayArea.appendChild(descriptionArea)
    flagArea.appendChild(flagImageDisplay)
    flagArea.appendChild(countryNameDisplay)
    descriptionArea.appendChild(capitalDisplay)
    descriptionArea.appendChild(continentDisplay)
    descriptionArea.appendChild(populationDisplay)
    descriptionArea.appendChild(currencyDisplay)
    descriptionArea.appendChild(commonLanguageDisplay)
    
    
  }
  
  function setAttributes() {
    // Tab to edit
    flagArea.classList.add("flagArea")
    descriptionArea.classList.add("descriptionArea")
    
  }
  
  function addContents() {
    // Tab to edit
    
    flagImageDisplay.src = `${data[0].flags.png}`
    flagImageDisplay.alt =  `${data[0].flags.alt}`
    countryNameDisplay.innerText = data[0].name.common
    capitalDisplay.innerHTML= `Capital: <span>${data[0].capital}</span>`
    
     continentDisplay.innerHTML = `Continents: <span>${data[0].continents}</span>`
    
    
    populationDisplay.innerHTML = `Population: <span>${data[0].population.toLocaleString()}</span>`
    
    currencyDisplay.innerHTML = `Currencies: <span>${Object.keys(data[0].currencies)}</span>`
    commonLanguageDisplay.innerHTML = `Common Languages :<span> ${Object.values(data[0].languages)}</span>`
   
    
  }
  
  
}