import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usePokemonData from './Hooks/usePokemonData'

function App() {
 useEffect( async ()=>{
  const pokemonData = await usePokemonData("Pikachu")
  console.log(pokemonData);
  
 },[])

  return(
   <div className="flex flex-col">
     <h1>{}</h1>
     <img src="" alt="" />
   </div>
  )
}

export default App
