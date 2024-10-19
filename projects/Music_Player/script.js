const baseURL = 'https://deezerdevs-deezer.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a813cc16d3mshb1bc3272d3f542dp117c8djsndf2b30cc1b1f',
		'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};
const playPauseButton = document.querySelector (".playPause")
playPauseIcon = document.querySelector (".playPauseIcon")
const audio = document.querySelector ("audio")
const playerPoster = document.querySelector ("#playerPoster")
const titleInPlayer = document.querySelector ("#titleInPlayer")
const artistInPlayer = document.querySelector (".artistInPlayer")
const faChevronDown = document.querySelector (".fa-chevron-down")
const playlistArea = document.querySelector (".playlistArea")
const searchBar = document.querySelector ("#searchBar")
const sliderRange = document.querySelector ("#progress")
let result
let isDisplayingPlaylist = false

document.addEventListener("DOMContentLoaded", defaultMusic)
faChevronDown.addEventListener("click",togglePlaylist)
faChevronDown.addEventListener("click",fetchMusic)
// search
searchBar.addEventListener("input",(e)=> {
  fetchMusic(e)
  if (!searchBar.value) {
    togglePlaylist(e)
    
    return
  }
  if (searchBar.value) {
    displayPlaylist()
    
    return
  }
})
sliderRange.addEventListener("input",displayRange)
playPauseButton.addEventListener("click",playPauseToggle)

function togglePlaylist(e) {
e.preventDefault()
// for displaying playlist
playlistArea.classList.toggle("displaying")

// for dropdown button
faChevronDown.classList.toggle("fa-chevron-down")
faChevronDown.classList.toggle("fa-times")
}


function displayPlaylist() {
  // remove previous classlists
  playlistArea.classList.remove("displaying")
faChevronDown.classList.remove("fa-times")

// displaying playlist
  playlistArea.classList.add("displaying")
faChevronDown.classList.remove("fa-chevron-down")
faChevronDown.classList.add("fa-times")
}

function displayRange() {
  // Tab to edit
  const value = sliderRange.value
  sliderRange.style.background= `linear-gradient(to right, #2887e3 ${value
  }%, lightgray ${value}%)`
}


async function fetchMusic(e) {
  e.preventDefault()
  if (isDisplayingPlaylist) {
  isDisplayingPlaylist = false
  return
}
  if (!isDisplayingPlaylist) {
  isDisplayingPlaylist = true
  
 let response = undefined
 console.log(e.target)
try {
  if (!searchBar.value) {
    console.log("here")
    response = await fetch(`${baseURL}search?q=Charlie Puth`,options)
  
    
  }
if (searchBar.value) {
  console.log("here too")
	 response = await fetch(`${baseURL}search?q=${searchBar.value}`, options);
	 
}

	if (!response.ok) {
	  throw new Error(`Couldn't fetch song`)
	}
	if (response.ok) {
	  playlistArea.innerHTML = ""
	 result = await response.json();
	console.log(result.data);
	result.data.forEach( song => {
	  
	createMusicPage(result,song)
	}
	
	)
	
	}
} catch (error) {   
	console.error(error);
}
}

}

function createMusicPage(result,song) {
  // creating elements
  
  const songDisplay = document.createElement ("div")
  const playlistSongPoster = document.createElement ("img")
  const playlistTitleAndAuthor = document.createElement ("div")
  const playlistSongTitle = document.createElement ("h2")
  const playlistSongAuthor = document.createElement ("div")
     appendElements()
     addAttributes()
     addContents()
  
   function appendElements() {
      playlistArea.appendChild(songDisplay)
      songDisplay.appendChild(playlistSongPoster)
      songDisplay.appendChild(playlistTitleAndAuthor)
      playlistTitleAndAuthor.appendChild(playlistSongTitle)
      playlistTitleAndAuthor.appendChild(playlistSongAuthor)
      return
   }
   
   function addAttributes() {
     
     songDisplay.classList.add("songDisplay")
     playlistSongPoster.classList.add("playlistSongPoster")
     playlistTitleAndAuthor.classList.add("playlistTitleAndAuthor")
     playlistSongTitle.classList.add("playlistSongTitle")
     playlistSongAuthor.classList.add("playlistSongAuthor")
   }
   
   function addContents() {
     console.log(result)
     playlistSongPoster.src = song.album.cover_big
     playlistSongTitle.innerText = song.title_short
     playlistSongAuthor.innerText = song.artist.name
   }
  
  
}

async function defaultMusic(e) {
  // Tab to edit
  console.log("in defaukt music")
  e.preventDefault()
  try{
const response = await fetch(`${baseURL}search?q=Charlie Puth`,options)
if (!response.ok) {
throw new Error('Song not found')
return
}
const result = await response.json()
console.log(result.data[0])

playerPoster.src = result.data[0].album.cover_medium
playerPoster.alt = result.data[0].title_short
titleInPlayer.innerText = result.data[0].title_short
artistInPlayer.innerText = result.data[0].artist.name
audio.src = result.data[0].preview
}
catch (e) {
  // Tab to 
  console.error(e)
}

}

function playPauseToggle() {
  playPauseIcon.classList.toggle("fa-play")
  playPauseIcon.classList.toggle("fa-pause")
  
}




