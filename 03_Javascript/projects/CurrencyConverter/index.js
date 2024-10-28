const baseURL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/";

const dropdowns = document.querySelectorAll (".dropdown select") // selecting both dropdowns
const button = document.querySelector("button")

const fromCurr = document.querySelector (".From select");

const message =document.querySelector ("#display")

const toCurr = document.querySelector (".To select")
for (let select of dropdowns){ // iteration over both dropdowns

  
  for (code in countryList){ // iteration for all country
    let newOption = document.createElement("option")
    newOption.innerText= code; // creating and adding values to dropdown options
    newOption.value= code;
    
    
  if(select.name == "from" && code=="USD"){
    newOption.selected ="selected";
  }
  if(select.name=="to" && code=="JPY"){
    newOption.selected ="selected"
  }
  select.append(newOption) // appending to select tag
  }
  select.addEventListener("change",(e)=>{
    updateFlag(e.target)
    
  })
}


// to update flag

const updateFlag = (element)=>{
  let currCode = element.value // gives new value of select i.e currency code
  let countryCode = countryList[currCode] 
  let newFlag =         `https://flagsapi.com/${countryCode}/shiny/64.png` 
  let img= element.parentElement.querySelector("img") // complex selection teqnique / div.querySelector means select element inside tge div only, we don't nedd document. if the parent or child elements are already selected
img.src = newFlag
  
  
}


button.addEventListener('click',async (e)=>{
  e.preventDefault()
  let amount = document.querySelector (".amount input")
  let amountValue = amount.value; // holding val inside variable
  if (amountValue===""|| amountValue<1) {
    amountValue=1;
    amount.value= "1";// displaying
  }
  
  const URL = `${baseURL}${toCurr.value}_${fromCurr.value}.json`
  
  let response = await fetch(URL)
  if (response.status == 200) {
    
  
  let data = await response.json()
  let CurrRate = data.rate
  
  
  let finalAmount = (CurrRate*amountValue).toFixed(4)
  
  
  message.innerText= `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
  
}

else {
  message.innerText=` Exchange Rates Not Available :( Please Try Later`
}
})

const updateExchageRate = async ()=> {
  
  
  let amount = document.querySelector (".amount input")
  let amountValue = amount.value; // holding val inside variable
  if (amountValue===""|| amountValue<1) {
    amountValue=1;
    amount.value= "1";// displaying
  }
  
  const URL = `${baseURL}${toCurr.value}_${fromCurr.value}.json`
  
  let response = await fetch(URL)
  
  if (response.status == 200) {
    
  
  let data = await response.json()
  let CurrRate = data.rate
  
  
  let finalAmount = (CurrRate*amountValue).toFixed(4)
  
  
  message.innerText= `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
  
}

else {
  message.innerText=` Exchange Rates Not Available :( Please Try Later`
}
}
window.addEventListener("load",updateExchageRate)

