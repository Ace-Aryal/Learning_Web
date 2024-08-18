let submitButtton = document.querySelector("#displayBMI")




submitButtton.addEventListener("submit",()=>{
  let height = document.querySelector ("#height").nodeValue;
console.log(height)
let weight = document.querySelector ("#weight").nodeValue
  let BMI =( weight / height**2)
  if BMI <= 18.4 {
    updater.innerText = `Your BMI is : ${BMI} You're underweight `
  }
}
