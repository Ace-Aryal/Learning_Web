const  form = document.querySelector('form')
// we are not taking height and weight here because those variables will take null value as the page loads rather we want to take value after the submission 
form.addEventListener('submit',(e)=>{
  e.preventDefault(); // to prevent submission to database
  const height = parseInt(document.querySelector ('#height').value);
  const weight = parseInt(document.querySelector ('#weight').value)
  
  
  const BMI = (weight / (height/100)**2).toPrecision(4);
  const display = document.querySelector ('#displayBMI')
  
  if ( height === '' || weight=== ''|| height <0 || height<0 || isNaN(height) || isNaN(weight )) {
    display.innerText ='Please enter a valid entries'
  }
  else {
  display.innerText  = 'Your BMI is:' + BMI
}
})