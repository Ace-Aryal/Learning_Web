
const weatherForm = document.querySelector (".weatherForm")
const cityInput = document.querySelector ("#cityInput")

const card = document.querySelector (".card")

const getWeatherBtn = document.querySelector (".getWeather")

const apiKey = "bd5e378503939ddaee76f12ad7a97608"



// Event listener fn
getWeatherBtn.addEventListener('click',async (e)=>{
  e.preventDefault();
  
  const city = cityInput.value;
  
  
  if(city){
    
    try { // recieving data from fetch in json format
      const weatherData = await getWeatherData(city)
      
      
      displayWeatherInfo(weatherData)
      
    }
    catch (e) {
      // Tab to edit
      console.error(e)
      displayError(e)
    }
    
    
  }
  else {
    displayError(`please Enter a city`)
  }
})

async function getWeatherData(city) {
  // fetching api via promise and returning promise 
  //data in json format to event listener
  
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  const response = await fetch(apiURL)
  if (!response.ok) {
    displayError(`Couldn't get weather data please try later (:`)
  } else {
    
  
  const data = await response.json()
  return data; // returning data to event listener
}
}


function displayWeatherInfo(data) {
  // using destructuring
  
  if(data){
  const { name : city ,
          main : {temp, humidity} ,
          weather : [{description ,icon ,id } ] }= data ;
          
          backgroundChanger(id);
          
          card.textContent = ""
          card.style.display ="flex"
          const cityDisplay = document.createElement('h1')
          const tempDisplay = document.createElement ("p")
          const humidityDisplay = document.createElement ("p")
          const descDisplay = document.createElement ("p")
          const weatherEmoji = document.createElement ("img")
          
          cityDisplay.classList.add("cityDisplay")
          tempDisplay.classList.add("tempDisplay")
          humidityDisplay.classList.add("humidityDisplay")
          descDisplay.classList.add("descDisplay")
          weatherEmoji.classList.add("weatherEmoji")
          
          const imageSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`
          weatherEmoji.setAttribute('src', imageSrc)
          
          
          cityDisplay.textContent= city;
          tempDisplay.textContent = `${((temp -273)*9/5 +32).toFixed(1) }⁰ F`
          humidityDisplay.textContent = `Humidity: ${humidity} %`
          descDisplay.textContent = `${description}`
         
          
          
          
          
          
          
          
          card.appendChild(cityDisplay)
          card.appendChild(tempDisplay)
          card.appendChild(humidityDisplay)
          card.appendChild(descDisplay)
          card.appendChild(weatherEmoji)
          
          
          
  }

else {
  card.textContent = "Sorry, couldn't get data for the city :("
}

}



function backgroundChanger(weatherId) {
// switch


switch (true) { // imma use switch for multiple conditions too b**ch
  case(  weatherId  < 300) : // we 
  card.style.background= "linear-gradient(180deg, snow, lightgray,gray)";
  
    break;
    
    case (weatherId >=300 && weatherId < 500): 
      // Tab to edit
      card.style.background = "linear-gradient(180deg, snow ,gray)";
      break;
    
    case (weatherId >=500 && weatherId < 600):
      // Tab to edit
      card.style.background = "linear-gradient(180deg,  #786F80  , snow)";
      break;
    
    case (weatherId >=600 && weatherId < 700):
      // Tab to edit
      card.style.background = "linear-gradient(180deg, snow ,lightgray)";
      break;
      case (weatherId >=700 && weatherId < 800):
      // Tab to edit
      card.style.background = "linear-gradient(180deg, indianred,white)";
      break;
      case (weatherId == 800):
      // Tab to edit
      card.style.background ="linear-gradient(180deg, #58a6df ,#de7941)";
      
      break;
      case (weatherId >800):
      card.style.background = "linear-gradient(180deg,orange, skyblue ,lightgray )";
      break;
    
    
    
    
  
  default:
    // Tab to edit
}
}



function displayError(error) {
  const errorDisplay = document.createElement("p")
  

  errorDisplay.textContent= error ;
  errorDisplay.classList.add("displayError")
  
  card.textContent=''
  card.style.display = "flex";
  card.appendChild(errorDisplay)
}