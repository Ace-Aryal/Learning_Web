const baseURL = 'https://deezerdevs-deezer.p.rapidapi.com/'  // Base URL for Deezer API
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a813cc16d3mshb1bc3272d3f542dp117c8djsndf2b30cc1b1f',  // API key
		'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'  // API host
	}
}

// Select buttons and elements for media control and display
const forwardBtn = document.querySelector(".fa-step-forward")
const backwardBtn = document.querySelector(".fa-step-backward")
const currentTime = document.querySelector("#currentTime")
const remainingTime = document.querySelector("#remainingTime")
const playPauseButton = document.querySelector(".playPause")
playPauseIcon = document.querySelector(".playPauseIcon")
const audio = document.querySelector("audio")
const playerPoster = document.querySelector("#playerPoster")
const titleInPlayer = document.querySelector("#titleInPlayer")
const artistInPlayer = document.querySelector(".artistInPlayer")
const faChevronDown = document.querySelector(".fa-chevron-down")
const playlistArea = document.querySelector(".playlistArea")
const searchBar = document.querySelector("#searchBar")
const sliderRange = document.querySelector("#progress")
const shuffleBtn = document.querySelector(".fa-random")
const loopBtn = document.querySelector(".fa-repeat")

// Initialize variables for playlist and playback status
let result
let isDisplayingPlaylist = false
let isPlaying = false
let songIndex = 0
let isOnLoop = false
let isShuffling = false

// Event listener to fetch music data when the document is loaded
document.addEventListener("DOMContentLoaded", e => {
  fetchMusic(e)
})

// Event listener for backward button to change and display songs
backwardBtn.addEventListener("click", e => {
  changeSongs(e)
  displayMusicCard(e)
})

// Event listener for forward button to change, display songs, and play audio
forwardBtn.addEventListener("click", e => {
  changeSongs(e)
  displayMusicCard(e)
  audio.play()
  isPlaying = true
})

// Event listeners for looping and shuffling
loopBtn.addEventListener("click", repeat)
shuffleBtn.addEventListener("click", shuffle)

// Toggle playlist display
faChevronDown.addEventListener("click", togglePlaylist)

// Search functionality
searchBar.addEventListener("input", (e) => {
  fetchMusic(e)
  if (!searchBar.value) {
    togglePlaylist(e)
    fetchMusic(e)
    return
  }
  if (searchBar.value) {
    displayPlaylist()
    _.debounce(fetchMusic, 1000)
    return
  }
})

// Range slider for playback progress
sliderRange.addEventListener("input", displayRange)
sliderRange.addEventListener("input", seekWithRange)

// Play/Pause functionality
playPauseButton.addEventListener("click", playPauseToggle)

function togglePlaylist(e) {
  e.preventDefault()
  // Toggle displaying playlist area and dropdown icon
  playlistArea.classList.toggle("displaying")
  faChevronDown.classList.toggle("fa-chevron-down")
  faChevronDown.classList.toggle("fa-times")
}

function displayPlaylist() {
  // Remove previous class lists and display playlist area
  playlistArea.classList.remove("displaying")
  faChevronDown.classList.remove("fa-times")
  playlistArea.classList.add("displaying")
  faChevronDown.classList.remove("fa-chevron-down")
  faChevronDown.classList.add("fa-times")
}

function displayRange() {
  // Update slider background based on progress
  const value = Math.ceil(sliderRange.value)
  sliderRange.style.background = `linear-gradient(to right, #2887e3 ${(value / sliderRange.max * 100)}%, lightgray ${(value / sliderRange.max * 100)}%)`
}

async function fetchMusic(e) {
  e.preventDefault()
  // Toggle playlist display status
  if (isDisplayingPlaylist) {
    isDisplayingPlaylist = false
    return
  }
  isDisplayingPlaylist = true

  let response = undefined
  console.log(e.target)
  try {
    // Default search if search bar is empty
    if (!searchBar.value) {
      console.log("here")
      response = await fetch(`${baseURL}search?q=Charlie Puth`, options)
    }
    // Custom search if search bar has value
    if (searchBar.value) {
      console.log("here too")
      response = await fetch(`${baseURL}search?q=${searchBar.value}`, options)
    }
    // Check response and fetch data
    if (!response.ok) {
      throw new Error(`Couldn't fetch song`)
    }
    if (response.ok) {
      playlistArea.innerHTML = ""
      result = await response.json()
      console.log(result.data)
      result.data.forEach(song => {
        createMusicPage(result, song)
      })
    }
    // Display song card if response is okay
    if (response.ok && e.target === document) {
      displayMusicCard(e)
    }
  } catch (error) {
    console.error(error)
  }
}

function createMusicPage(result, song) {
  // Create elements for displaying each song
  const songDisplay = document.createElement("div")
  const playlistSongPoster = document.createElement("img")
  const playlistTitleAndAuthor = document.createElement("div")
  const playlistSongTitle = document.createElement("h2")
  const playlistSongAuthor = document.createElement("div")
  
  appendElements()
  addAttributes()
  addContents()
  displayOnPlayer()

  function appendElements() {
    // Append elements to DOM structure
    playlistArea.appendChild(songDisplay)
    songDisplay.appendChild(playlistSongPoster)
    songDisplay.appendChild(playlistTitleAndAuthor)
    playlistTitleAndAuthor.appendChild(playlistSongTitle)
    playlistTitleAndAuthor.appendChild(playlistSongAuthor)
  }
  
  function addAttributes() {
    // Set attributes and classes
    songDisplay.setAttribute("tabindex", "0")
    songDisplay.classList.add("songDisplay")
    playlistSongPoster.classList.add("playlistSongPoster")
    playlistTitleAndAuthor.classList.add("playlistTitleAndAuthor")
    playlistSongTitle.classList.add("playlistSongTitle")
    playlistSongAuthor.classList.add("playlistSongAuthor")
    songDisplay.id = (`${result.data.indexOf(song)}`)
  }
  
  function addContents() {
    // Add content to elements
    playlistSongPoster.src = song.album.cover_big
    playlistSongTitle.innerText = song.title_short
    playlistSongAuthor.innerText = song.artist.name
    console.log(result)
  }
  
  function displayOnPlayer() {
    // Set up click event to display song on player
    songDisplay.addEventListener("click", e => {
      songIndex = songDisplay.id
      playPauseIcon.classList.remove("fa-pause")
      playPauseIcon.classList.remove("fa-play")
      playPauseIcon.classList.add("fa-pause")
      isPlaying = true
      displayMusicCard(e)
      audio.play()
      songDisplay.focus()
    })
  }
}

function repeat(e) {
  e.preventDefault()
  // Toggle loop icon on/off
  e.target.classList.toggle("loopingOrShuffling")
isOnLoop = isOnLoop? false: true
  
}

function shuffle(e) {
  // Toggle shuffle icon on/off
  e.target.classList.toggle("loopingOrShuffling")
  isShuffling = isShuffling ? false:true
}

async function displayMusicCard(e) {
  console.log(result)
  console.log("in default music")
  e.preventDefault()
  
  // Update player with song information
  playerPoster.src = result.data[songIndex].album.cover_medium
  playerPoster.alt = result.data[songIndex].title_short
  titleInPlayer.innerText = result.data[songIndex].title_short
  artistInPlayer.innerText = result.data[songIndex].artist.name
  audio.src = result.data[songIndex].preview
  audio.addEventListener("loadedmetadata", rangeCalculation)
  audio.addEventListener("loadedmetadata", intervalCalculation)
}

function playPauseToggle() {
  // Toggle play/pause icons and control audio playback
  playPauseIcon.classList.toggle("fa-play")
  playPauseIcon.classList.toggle("fa-pause")
  if (isPlaying) {
    isPlaying = false
    audio.pause()
    return
  }
  if (!isPlaying) {
    isPlaying = true
    audio.play()
    return
  }
}

function rangeCalculation() {
  // Set slider range to audio duration
  const rangeValue = sliderRange.value
  sliderRange.min = 0
  sliderRange.max = Math.floor(audio.duration)
}

function intervalCalculation() {
  // Update progress slider and display time intervals
  const durationInterval = setInterval(() => {
    sliderRange.value = audio.currentTime
    currentTime.innerText = `${Math.floor(audio.currentTime / 60)}:${String(Math.floor(audio.currentTime % 60)).padStart(2, 0)}`
    remainingTime.innerText = `${Math.floor((audio.duration - audio.currentTime) / 60)}:${Math.floor((audio.duration - audio.currentTime) % 60).toString().padStart(2, 0)}`
    if (audio.currentTime === audio.duration) {
      playPauseIcon.classList.remove("fa-pause")
      playPauseIcon.classList.add("fa-play")
      isPlaying = false
    }
    displayRange()
  }, 1000)
}

function seekWithRange() {
  // Adjust audio playback to slider position
  audio.currentTime = sliderRange.value
}

function changeSongs(e) {
  e.preventDefault
  
  playPauseIcon.classList.remove("fa-pause")
  playPauseIcon.classList.remove("fa-play")
  playPauseIcon.classList.add("fa-pause")
  
  if (isOnLoop && isShuffling) {
    songIndex = songIndex
    return
  }
  
  if (isOnLoop) {
    songIndex = songIndex
    return
  }
  
  if (isShuffling) {
    songIndex = Math.floor(Math.random()*result.data.length)
    return
  }
  

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
  
  console.log(songIndex)
}
