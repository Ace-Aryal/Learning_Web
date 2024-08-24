//whenever you are stuck you have chat gpt , google , stackoverflow so watch em and clear concepts if new things show up
document.querySelectorAll(".drum").forEach(function (btn) {
btn.addEventListener("click", (e)=>{


const letter = btn.innerHTML;
animate(letter)
switch (letter) {
    case "w": audioCrash = new Audio("sounds/crash.mp3")
    audioCrash.play();
        
        break;
        case "a": audioKick = new Audio("sounds/kick-bass.mp3")
    audioKick.play();
        
        break;
        case "s": audioSnare = new Audio("sounds/snare.mp3")
    audioSnare.play();
        
        break;
        case "d": audioTom1 = new Audio("sounds/tom-1.mp3")
    audioTom1.play();
        
        break;
        case "j": audioTom2 = new Audio("sounds/tom-2.mp3")
    audioTom2.play();
        
        break;
        case "k": audioTom3 = new Audio("sounds/tom-3.mp3")
    audioTom3.play();
        
        break;
        case "l": audioTom4 = new Audio("sounds/tom-4.mp3")
    audioTom4.play();
        
        break;
    default:
        break;
}



   
})
})

document.addEventListener("keydown",(e)=> {
     let clickedKey = e.key;
     animate(clickedKey)
     switch (clickedKey) {
        case "w": audioCrash = new Audio("sounds/crash.mp3")
        audioCrash.play();
            
            break;
            case "a": audioKick = new Audio("sounds/kick-bass.mp3")
        audioKick.play();
            
            break;
            case "s": audioSnare = new Audio("sounds/snare.mp3")
        audioSnare.play();
            
            break;
            case "d": audioTom1 = new Audio("sounds/tom-1.mp3")
        audioTom1.play();
            
            break;
            case "j": audioTom2 = new Audio("sounds/tom-2.mp3")
        audioTom2.play();
            
            break;
            case "k": audioTom3 = new Audio("sounds/tom-3.mp3")
        audioTom3.play();
            
            break;
            case "l": audioTom4 = new Audio("sounds/tom-4.mp3")
        audioTom4.play();
            
            break;
        default:
            break;
    }
    
})

function animate (currentkey) {
    var activeBtn = document.querySelector(`.${currentkey}`)
    activeBtn.classList.add("pressed")
    setTimeout(()=>{
        activeBtn.classList.remove("pressed")
    },100)
}

// Higher order functions
// Those fns which take anotherfunction as  input or return a function


// callBack functions 
// Those functions which are passed as arguement to another function
// const audio1 = new Audio("./sounds/tom-1.mp3")
// audio1.play();


// btn.style.color = "white";

// we still want to preserve previous styles so we are using class list .add
// Summary
// Use setAttribute when you need to completely replace the current list of classes with a new list.
// Use classList.add() when you need to add new classes without altering or removing the existing classes.
// In most dynamic scenarios where you are working with class manipulation, classList.add() is preferred because it allows you to preserve existing classes and incrementally add or manage additional classes.