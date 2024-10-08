const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const IMGPATH = "https://image.tmdb.org/t/p/w1280"
const SEARCHAPI =  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
const moviesContainer= document.querySelector("#movie-box")   
const searchBar = document.querySelector ("#search")
const trendingHeading = document.querySelector ("h1")
window.addEventListener("DOMContentLoaded",()=> {
  moviePageGenerator(APIURL)
}

)

// new learning 
let debounceTimeout;

searchBar.addEventListener("input", () => {
  // Clear the previous timeout to debounce
  clearTimeout(debounceTimeout);

  // Get the current search value
  const query = searchBar.value.trim();

  // Check if the query is not empty
  if (query) {
    trendingHeading.remove()
    // Set a timeout to debounce the input
    debounceTimeout = setTimeout(() => {
      moviePageGenerator(`${SEARCHAPI}${query}`);
    }, 300);  // Wait 300ms before making the API call
  }
  else{
    trendingHeading = document.createElement ("h1")
     trendingHeading.innerText = "Trending Movies"
     
    
  }
});

async function moviePageGenerator (url) {
  console.log(url)
  try{
  
  const response = await fetch(url)
  const data = await response.json()
  //new learning 
  moviesContainer.innerHTML = ""
  
  if (!response.ok) {
    throw new Error("Couldn't fetch Movie")
    
  }
  
  
  
  
  const numberOfMovies = data.results.length
  console.log(numberOfMovies)
  if (numberOfMovies===0) {
    moviesContainer.innerHTML =`<h1>No Movies Found</h1>`
  }
  
  
  for (let i = 0; i < numberOfMovies; i++) {
    const imagePath = data.results[i].poster_path
    const movieBox = document.createElement("div")
    const overlay = document.createElement ("div")
    const ratingSpan = document.createElement ("span")
    
    const movieTitle = document.createElement ("h2")
    const movieImage = document.createElement ("img")
    const titleArea = document.createElement ("div")
    const overview = document.createElement ("p")
    movieBox.classList.add("box")
    overlay.classList.add("overlay")
    titleArea.classList.add("title")
    movieImage.src = `https://image.tmdb.org/t/p/w1280${imagePath}` || `./img/image-missing.png`
     
    moviesContainer.appendChild(movieBox)
    //new learning 
    movieBox.appendChild(movieImage)
    movieBox.appendChild(overlay)
    overlay.appendChild(titleArea)
   titleArea.appendChild(movieTitle)
   titleArea.appendChild(ratingSpan)
   overlay.appendChild(overview)
    
    movieTitle.innerText =  data.results[i].original_title
    ratingSpan.innerText = `${Number(data.results[i].vote_average).toFixed(2)}`
     overview.innerHTML = `Overview: <br/> ${data.results[i].overview}`
  }
  }
  catch (e) {
    console.log(e)
    trendingHeading.innerText = `Check Your Network And Try Again`
  }
}
