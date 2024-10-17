const faChevronDown = document.querySelector (".fa-chevron-down")
const playlistArea = document.querySelector (".playlistArea")
const searchBar = document.querySelector ("#searchBar")
const sliderRange = document.querySelector ("#progress")
faChevronDown.addEventListener("click",togglePlaylist)
searchBar.addEventListener("input",displayPlaylist)
sliderRange.addEventListener("input",displayRange)

function togglePlaylist(e) {
e.preventDefault()
playlistArea.classList.toggle("displaying")
faChevronDown.classList.toggle("fa-chevron-down")
faChevronDown.classList.toggle("fa-times")
}


function displayPlaylist(param) {
  // Tab to edit
  playlistArea.classList.remove("displaying")
faChevronDown.classList.remove("fa-times")
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



