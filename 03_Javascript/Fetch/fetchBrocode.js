const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/pikachu"
/*
fetch(pokemonAPI)
.then((response)=>{
  if(!response.ok) {
    throw new Error("No such pikemon") // catch catches this error message
  }
  console.log(response)
  return response.json();
})
.then((value)=> {
  console.log(value.height)
})
.catch((error)=>{
  console.log(error) 
})*/

// using async await
 
/* async function fetchPokemon() {
   try{

 let response =  await fetch(pokemonAPI);
 
 if(!response.ok) {
   throw new Error (" Couldn't fetch data")
 }
 let values = await response.json();
 console.log(values.name)
   }
   catch (error) {
     // Tab to edit
     console.log(error)
   }
 }
 
 fetchPokemon(); */
 
 
 let fetcher = document.querySelector ("button")
 fetcher.addEventListener('click', (e)=>{
   e.preventDefault()
   let pokemon = document.querySelector ("input").value.toLowerCase()
   console.log(pokemon)
async function fetchPokemon() {
   try{
let image = document.querySelector ("#photoUpdater")
 let response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

 if(!response.ok) {
   throw new Error (" Couldn't fetch data")
 }
 let values = await response.json();
 console.log(values)
 
 let src = values.sprites.front_default
 image.src = src;
 image.alt = pokemon;
   }
   catch (error) {
     // Tab to edit
     console.log(error)
   let p =  document.querySelector ("p")
     p.innerText = "No such pokemon"
     
   }
 }
 
 fetchPokemon();
 
   
 })


