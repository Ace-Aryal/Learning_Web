const body = document.querySelector ("body")
const start = document.querySelector ("#start")
const stop = document.querySelector ("#stop")


function Changer() {
  // Tab to edit
var Initializer = setInterval (function (){
  let rgb = function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
let color = rgb()

  body.style.backgroundColor = color
},1000)
stop.addEventListener('click' ,Stopper)
function Stopper (){
  clearInterval(Initializer)
}
}


start.addEventListener('click', Changer)

