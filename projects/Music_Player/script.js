const baseURL = 'https://deezerdevs-deezer.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a813cc16d3mshb1bc3272d3f542dp117c8djsndf2b30cc1b1f',
		'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};
const forwardBtn = document.querySelector (".fa-step-forward")
const backwardBtn = document.querySelector (".fa-step-backward")
const currentTime = document.querySelector ("#currentTime")
const remainingTime = document.querySelector ("#remainingTime")
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
const shuffleBtn = document.querySelector (".fa-random")
const loopBtn = document.querySelector (".fa-repeat")
let result
let isDisplayingPlaylist = false
let isPlaying = false
let songIndex = 0
document.addEventListener("DOMContentLoaded", e=> {
  fetchMusic(e)

})

backwardBtn.addEventListener("click",e=> {
  changeSongs(e)
  displayMusicCard(e)
  
})

forwardBtn.addEventListener("click",e=> {
  changeSongs(e)
  displayMusicCard(e)
    audio.play()
  isPlaying=true
})
loopBtn.addEventListener("click",repeat)
shuffleBtn.addEventListener("click",shuffle)
faChevronDown.addEventListener("click",togglePlaylist)
faChevronDown.addEventListener("click",fetchMusic)
// search
searchBar.addEventListener("input",(e)=> {
  fetchMusic(e)
  if (!searchBar.value) {
    togglePlaylist(e)
    fetchMusic(e)
    
    
    return
  }
  if (searchBar.value) {
    displayPlaylist()
    _.debounce(fetchMusic,1000)
    return
  }
})
sliderRange.addEventListener("input",displayRange)
sliderRange.addEventListener("input",seekWithRange)
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
  const value = Math.ceil(sliderRange.value)
  sliderRange.style.background= `linear-gradient(to right, #2887e3 ${(value/sliderRange.max*100)
  }%, lightgray ${(value/sliderRange.max*100)}%)`
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
	
	if (response.ok && e.target=== document) {
	  displayMusicCard(e)
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
     displayOnPlayer()
   function appendElements() {
      playlistArea.appendChild(songDisplay)
      songDisplay.appendChild(playlistSongPoster)
      songDisplay.appendChild(playlistTitleAndAuthor)
      playlistTitleAndAuthor.appendChild(playlistSongTitle)
      playlistTitleAndAuthor.appendChild(playlistSongAuthor)
      return
   }
   
   function addAttributes() {
     songDisplay.setAttribute("tabindex","0")
     songDisplay.classList.add("songDisplay")
     playlistSongPoster.classList.add("playlistSongPoster")
     playlistTitleAndAuthor.classList.add("playlistTitleAndAuthor")
     playlistSongTitle.classList.add("playlistSongTitle")
     playlistSongAuthor.classList.add("playlistSongAuthor")
     songDisplay.id=(`${result.data.indexOf(song)}`)
   }
   
   function addContents() {
     
     playlistSongPoster.src = song.album.cover_big
     playlistSongTitle.innerText = song.title_short
     playlistSongAuthor.innerText = song.artist.name
     console.log(result)
     
   }
   function displayOnPlayer() {
     // Tab to edit
     songDisplay.addEventListener("click",e=>{
       
       songIndex= songDisplay.id
       
  playPauseIcon.classList.remove("fa-pause")
  playPauseIcon.classList.remove("fa-play")
  playPauseIcon.classList.add("fa-pause")
  isPlaying=true
     
       
       displayMusicCard(e)
       audio.play()
       songDisplay.focus()   
     })
   }
  
  
}

function repeat(e) {
  e.preventDefault ()
  e.target.classList.toggle("loopingOrShuffling")
  
}

function shuffle(e) {
  // Tab to edit
  e.target.classList.toggle("loopingOrShuffling")
}

async function displayMusicCard(e) {
  // Tab to edit
  console.log(result)
  console.log("in defaukt music")
  e.preventDefault()
  
 


playerPoster.src = result.data[songIndex].album.cover_medium
playerPoster.alt = result.data[songIndex].title_short
titleInPlayer.innerText = result.data[songIndex].title_short
artistInPlayer.innerText = result.data[songIndex].artist.name
audio.src = result.data[songIndex].preview
audio.addEventListener("loadedmetadata",rangeCalculation)
audio.addEventListener("loadedmetadata",intervalCalculation)



}

function playPauseToggle() {
  playPauseIcon.classList.toggle("fa-play")
  playPauseIcon.classList.toggle("fa-pause")
  if (isPlaying) {
    isPlaying = false
    audio.pause()
    return
  }
  if (!isPlaying) {
    isPlaying=true
    audio.play()
    return
  }
  
  
}

function rangeCalculation() {
  // Tab to edit

  const rangeValue = sliderRange.value
  sliderRange.min = 0
  sliderRange.max = Math.floor(audio.duration)
  
}

function intervalCalculation() {
       if (playPauseIcon.classList.contains("fa-play fa-playb")) {
  playPauseIcon.classList.remove("fa-play")
       }
  const durationInterval = setInterval(()=> {
    
    sliderRange.value = (audio.currentTime)
    currentTime.innerText = `${Math.floor(audio.currentTime/60)}:${String(Math.floor(audio.currentTime%60)).padStart(2,0)}`
    remainingTime.innerText = `${Math.floor((audio.duration-audio.currentTime)/60)}:${Math.floor((audio.duration-
    audio.currentTime)%60).toString().padStart(2,0)
    }`
    if (audio.currentTime === audio.duration){
      playPauseIcon.classList.remove("fa-pause")
    playPauseIcon.classList.add("fa-play")
    isPlaying=false
  }
  
    displayRange()
  },1000)
  
  
}


function seekWithRange() {
  // Tab to edit
  audio.currentTime = (sliderRange.value)
  
}

function changeSongs(e) {
  e.preventDefault()
  
  
  if (e.target.classList.contains("fa-step-forward")) {
    songIndex++
    
  }
  if (e.target.classList.contains("fa-step-backward")) {
    songIndex--
  }
  if (songIndex>=result.data.length) {
    songIndex =0
  }
  if (songIndex<0  ) {
    songIndex = (result.data.length -1)
  }
  playPauseIcon.classList.remove("fa-pause")
  playPauseIcon.classList.remove("fa-play")
  playPauseIcon.classList.add("fa-pause")
  
  console.log(songIndex)
}


