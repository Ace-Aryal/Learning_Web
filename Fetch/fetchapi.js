// read this to understand async/ await and promises 


const URL = "https://cat-fact.herokuapp.com/facts";

const facts = document.querySelector ("#facts")

const generator = document.querySelector ("#generator")

let promise =fetch(URL) 

console.log("getting data ...")



const getFacts = async ()=> {
  let response = await ( fetch(URL)) //here response is an object 
  let data = await response.json() // we cant read the response to we are making it json

  console.log(data[0].text) // there are also some API which return random jokes''
  
  facts.innerHTML= data[3].text;

}
// with promises
/*function getFacts() {
  fetch(URL)
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    console.log (data)
    facts.innerText = data[0].text
  })
}*/

generator.addEventListener('click',getFacts)

