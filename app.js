const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');

let score = document.querySelector('#score');
let result = 0;
let currentTime = timeLeft.textContent;
let hitPosition;
let timerId = null


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
      })
    
      let randomSquare = squares[Math.floor(Math.random() * 9)]
      randomSquare.classList.add('mole')
    
      hitPosition = randomSquare.id
}

squares.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1;
            score.textContent = result;
        }
    })
});

function moveMole(){

    timerId = setInterval(randomSquare, 1000);
}

moveMole();
function countDown(){
    currentTime --;
    timeLeft.textContent = currentTime;
    if(currentTime === 0){
        clearInterval(ctdTimerID);
        clearInterval(timerId);
        alert("Game Over, your final score is "+result);
    }
}

let ctdTimerID = setInterval(countDown, 1000);