// Easy Async Await 


function WalkDog() {
  // Tab to edit  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walkdog = true;
      if (walkdog) {
        resolve("You walked the dog")
      } else {
        reject("You didn't walk the dog")
      }


    }, 1000)
  })



}

function CleanKitchen() {
  // Tab to edit
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanedKitchen = true;
      if (cleanedKitchen) {
        resolve("You cleaned the kitchen")
      } else {
        reject("You didn't clean the kitchen ")
      }


    }, 1000)

  })



}

function takeoutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tookTrashOut = false;
      if (tookTrashOut) {
        resolve("You took out the trash")
      } else {
        reject("You didn't take out trash")
      }


    }, 1000)
  })
}

async function toDo(param) {
  // Tab to edit
  try {
    
  
const walkDogRes =  await WalkDog() // we have to hold the promise returned by await into an variable 
console.log (walkDogRes)

const cleanKitchenRes = await CleanKitchen()
console.log(cleanKitchenRes)

const takeTrashOutRes = await takeoutTrash()
console.log (takeTrashOutRes)

console.log ("All tasks Completed")
}
catch (e) {
  console.error(e)
}
}

toDo()