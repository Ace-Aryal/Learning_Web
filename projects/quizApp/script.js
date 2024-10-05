

const indexDisplay = document.querySelector ("#index")
const quizUrl = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
const container = document.querySelector (".container")
const quizContaner = document.querySelector (".quizSection")
const quizSection = document.querySelector (".quiz")
const nextButton = document.querySelector ("button")
const scoreDisplay = document.querySelector ("#scoreDisplay")
const timerDisplay = document.querySelector ("#timer")
let index = 0
let score = 0
let data
let newButton
let time = 30
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
    
    gameOver()
  }
}
function validateQuestionsAndAnswers() {
  time = 30
      let timer = setInterval(()=> {

  timerDisplay.value = `${time}s`
  time --
  if (time<0) {
    nextButton.click()
    
  }
  
},1000)
      
      
      
      if (index < 10) {

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
  clearInterval(timer)
  if (e.target.value === correctOption ) {
    score++
    e.target.style.backgroundColor = "limegreen"
    e.target.style.color = "snow"
    scoreDisplay.value = `Score : ${score}`
  }
  else{
    e.target.style.backgroundColor = "crimson"
    e.target.style.color = "snow"
    options.forEach(option => {
      if(option.value === correctOption){
        option.style.backgroundColor = "limegreen"
        option.style.color = "snow"
        
      }
    })
  }
  quizSection.removeEventListener("click",validateAnswer)
}

}

else {
  gameOver()
}


function gameOver() {
  
  
  quizContaner.remove()
  const newQuizContainer = document.createElement("div")
  newQuizContainer.style.textAlign = "center"
   newButton = document.createElement("button")
  newQuizContainer.classList.add("quizSection")
  newButton.classList.add("restart")
  newQuizContainer.innerHTML = ` You scored ${score} out of 10`
  newButton.innerText = `Next Game`
  container.append(newQuizContainer)
  container.append(newButton)
  newButton.addEventListener("click",()=> {
    location.reload(true)
  })
  
}

index++
indexDisplay.value = `${index}/10`
}