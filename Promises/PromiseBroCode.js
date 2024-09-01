// Do these chores in sequence

//1. Walk Dog
//2. Clean Kitchen
//3. Take out tge trash

// using Callback hell

/*function WalkDog(cb) {
  // Tab to edit  
  setTimeout(()=>{
    console.log ("You walked the dog")
    cb();
  },1000)
  
  
}

function CleanKitchen(cb) {
  // Tab to edit
  setTimeout(()=>{
    console.log ("You cleaned the kitchen")
    cb()
  },1000)
  
  
  
}
function takeoutTrash(cb){
  setTimeout(()=>{
    console.log("You took out the trash")
    cb()
  },1000)
}

WalkDog(()=>{
  CleanKitchen(()=>{
    takeoutTrash(()=>{
      console.log("You finished all the chores")
    })
  })
})
*/

// using promises

function WalkDog() {
  // Tab to edit  
 return new Promise((resolve, reject) => {
   setTimeout(()=>{
     const walkdog= true;
     if (walkdog) {
       resolve ("You walked the dog")
     } else {
       reject("You didn't walk the dog")
     }
    
    
  },1000)
 })
   
  
  
}

function CleanKitchen() {
  // Tab to edit
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const cleanedKitchen = true;
      if (cleanedKitchen) {
        resolve ("You cleaned the kitchen")
      } else {
        reject("You didn't clean the kitchen ")
      }
    
    
  },1000)
  
  })
  
  
  
}
function takeoutTrash(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
     const tookTrashOut = false;
      if (tookTrashOut) {
        resolve("You took out the trash")
      } else {
        reject("You didn't take out trash")
      }
    
    
  },1000)
}
  )
}

WalkDog()
.then((value)=> {
  console.log(value); 
  return CleanKitchen()
})
.then((value)=>{
  console.log (value);
return   takeoutTrash()
})
.then((value)=>{
  console.log (value)
  console.log ("All Tasks Completed")
})
.catch((error)=> {
  console.error (error)
})

  