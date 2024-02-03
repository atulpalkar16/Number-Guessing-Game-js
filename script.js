'use strict'

const MAX_VALUE = 20;
const MIN_VALUE = 1;
let highScore = 0;
let score = Number(document.querySelector('#score').textContent);

let randomNumber = randomNumberGenrator();
console.log(randomNumber);


// randomNUmberGenerator function
function randomNumberGenrator(){
    return Math.floor(Math.random()*20)+1;
}
// message function
function message(message){
    document.querySelector('#message').textContent = message;
}
// guessing message
function updateGuessMessage(guess){
    if(guess > randomNumber) document.querySelector('#message').textContent = `try low ⬇️`;
    else if(guess < randomNumber) document.querySelector('#message').textContent = `try high ⬆️`;
}


function handleGuess(guess) {
    if(guess ===  randomNumber) {
        document.querySelector('#secretNumber').textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = 'limegreen';
        message(`you've guessed correct 🎉`); 

        // highscore
        if(highScore <= score) highScore = score;    
        document.querySelector('#HighScore').textContent = highScore;
    }
    else if(isNaN(guess) || guess > MAX_VALUE || guess < MIN_VALUE ){
        alert( `please enter a valid number between ${MIN_VALUE} to ${MAX_VALUE}`);
    }
    else{
        score--;
        document.querySelector('#score').textContent = score;
        updateGuessMessage(guess);

        if(score < MIN_VALUE ){
            alert(`sorry you've lost the game 😔`);
            resetGame();
        }
    }
}
// guess logic event listner
document.querySelector('#check').addEventListener('click', function(){

    let guess = Number(document.querySelector('#guess').value);
    console.log(guess, typeof guess);
    handleGuess(guess);
});



// reset the scores and values
document.querySelector('#again').addEventListener('click', resetGame); 

function resetGame(){
    score =MAX_VALUE;
    randomNumber = randomNumberGenrator();
    console.log(randomNumber);

    message('start guessing ...');
    document.querySelector('#score').textContent = score;
    document.querySelector('#guess').value = '';
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('#secretNumber').textContent = '?';
}