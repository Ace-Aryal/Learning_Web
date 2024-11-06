//Basic promise creation and use

function fetchData(){
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      let sucess = true
      if (sucess) {
        resolve("sucessfully fetched data")
      }
      else {
        reject("Couldn't fetch data")
      }
      
      
    },2000)
  })
}

fetchData()
.then((response)=>{
  //const data = response.json()
  const data = "Dipesh"
  return data
  console.log("converted to json")
})
.then((data)=>console.log("Hii"+data))
.catch((error)=> console.log(error))



function getData(data){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log ("Some Data ",data)
      resolve("success")
    },2000)
  })
}


//Async Await

async function getUserData() {
  console.log('fetching data 1...')
  await getData(1);
  console.log('fetching data 2...')
  await getData(2);
  console.log('fetching data 3...')
  await getData(3);
 
  
}

// IIFE
/*(async function () {
  console.log('fetching data 1...')
  await getData(1);
  console.log('fetching data 2...')
  await getData(2);
  console.log('fetching data 3...')
  await getData(3);
 
  
})()*/


getUserData();
//promise chaining 

/*  console.log('fetching data 1...')

getData(1).then((res)=>{
  console.log('fetching data 2...')
return getData(2);
}).then((res)=>{
  console.log('fetching data 3...')
  return getData(3);
}).then((res)=>{
  console.log (res)
})*/