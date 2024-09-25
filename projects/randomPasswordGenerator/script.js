const upperCaseChars =`QWERTYUIOPASDFGHJKLZXCVBNM`
const lowerCaseChars = `qwertyuiopasdfghjklzxcvbnm`
const numbers =`1234567890`
const specialSymbols =`!@#£%^&*()-'":;,?`
const copyButton = document.querySelector ("#clipboard")


const display = document.querySelector ("#display")
const button = document.querySelector ("button")
const weakRadio = document.querySelector ("#weak")
const mediumRadio = document.querySelector ("#medium")
const strongRadio = document.querySelector ("#strong")
const veryStrongRadio = document.querySelector ("#veryStrong")
let length

button.addEventListener('click',e=> {
  
    
  e.preventDefault()
  length = document.querySelector ("#length").value
 if (length <4 ) {
   display.value = `Password Must Be At Least 4 Characters Long`
 }
 if(length >=4){
  if(mediumRadio.checked){
    mediumPasswordfn()
  }
  if (weakRadio.checked) {
    weakPasswordfn()
  }
  if(strongRadio.checked){
    strongPasswordfn()
  }
  if (veryStrongRadio.checked) {
    veryStrongPasswordfn()
  }
  
}
}
)

copyButton.addEventListener('click', e => {
  display.select()
    document.execCommand("copy")
  
})





function weakPasswordfn() {
  let i=0
  let weakPassword="";
  while(i< length ) {
    let charsIndex = Math.floor(Math.random() * 26)
      weakPassword += lowerCaseChars[charsIndex]
   
  i++
  }
  weakPassword= weakPassword.substring(0,length)
  display.value = weakPassword
}


function mediumPasswordfn() {
  let i=0
  let mediumPassword="";
  while(i< length ) {
    let charsIndex = Math.floor(Math.random() * 26)
       mediumPassword += lowerCaseChars[charsIndex]
  charsIndex = Math.floor(Math.random() * 26)
    
   mediumPassword += upperCaseChars[charsIndex]
  i+=2
  }
  mediumPassword= mediumPassword.substring(0,length)
  display.value = mediumPassword

}

function strongPasswordfn() {
  let i = 0
  let password = "";
  while (i < length) {
    let charsIndex = Math.floor(Math.random() * 26)
    let numsIndex = Math.floor(Math.random()*10)
    password += lowerCaseChars[charsIndex]
    charsIndex = Math.floor(Math.random() * 26)
    password += upperCaseChars[charsIndex]
    password += numbers[numsIndex]
    i+=3
  }
  password = password.substring(0,length)
  display.value = password
 
}


function veryStrongPasswordfn() {
  let i=0
  let password="";
  while(i< length ) {
    let specialSymbolsIndex = Math.floor(Math.random()*17)
    let charsIndex = Math.floor(Math.random() * 26)
    let numsIndex = Math.floor(Math.random()*10)
   password += lowerCaseChars[charsIndex]
   charsIndex = Math.floor(Math.random() * 26)
   password += upperCaseChars[charsIndex]
   password+= numbers[numsIndex]
   password+= specialSymbols[specialSymbolsIndex]
   
  i+=4
  }
  password= password.substring(0,length)
  display.value = password

}
