const quizUrl = "https://opentdb.com/api.php?amount=10"
const quizSection = document.querySelector (".quiz")
const nextButton = document.querySelector ("button")
let index = 0
let score = 0
let data
window.addEventListener("load",  fetchQuizQuestions)
nextButton.addEventListener("click",validateQuestionsAndAnswers)





async function fetchQuizQuestions() {
  
  
  try {
    // Tab to 
    
    const response = await fetch(quizUrl)
    if(!response.ok) {
      throw new  error("Couldn't Fetch Quiz")
    }
     data = await response.json()
    
    validateQuestionsAndAnswers()
    
    //nested function
    
    



  }
  catch (e) {
    
    console.error(e)
  }
}
function validateQuestionsAndAnswers() {
      
      index++
      if (index<10) {
        
  const options = document.querySelectorAll("input")
  const question = document.querySelector ("#question")
  const option1 = document.querySelector ("#opt1")
  const option2 = document.querySelector ("#opt2")
  const option3 = document.querySelector ("#opt3")
  const option4 = document.querySelector ("#opt4")
  let answers = data.results[index].incorrect_answers
  let correctOption = data.results[index].correct_answer
answers.push(data.results[index].correct_answer)
answers.sort()


question.innerHTML = data.results[index].question
option1.value = answers[0]
option2.value = answers[1]
option3.value = answers[2]
option4.value = answers[3]
options.forEach(option=> {
  option.style.backgroundColor = "snow"
  option.style.color = "black"
})

  quizSection.addEventListener("click", validateAnswer)
function validateAnswer(e) {
  if (e.target.value === correctOption ) {
    score++
    e.target.style.backgroundColor = "limegreen"
    e.target.style.color = "snow"
    console.log(score)
  }
  else{
    e.target.style.backgroundColor = "crimson"
    e.target.style.color = "snow"
  }
  quizSection.removeEventListener("click",validateAnswer)
}

}

else {
  gameOver()
}


function gameOver() {
  
}

}