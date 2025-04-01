 const API_URl = "https://pokeapi.co/api/v2/pokemon/ditto"
 const usePokemonData = async (pokemon) => {
   const response = await axios.get(API_URl)
   return response
}

export default usePokemonData