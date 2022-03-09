// import functions and grab DOM elements
const cup1El = document.getElementById('oneCup-container');
const cup2El = document.getElementById('twoCup-container');
const cup3El = document.getElementById('threeCup-container');

const button1 = document.getElementById('cup1Button');
const button2 = document.getElementById('cup2Button');
const button3 = document.getElementById('cup3Button');

const correctEl = document.getElementById('correct-guesses');
const incorrectEl = document.getElementById('incorrect-guesses');
const totalEl = document.getElementById('total-guesses');

// let state
let totalGuess = 0;
let correctGuess = 0;

function resetStyles() {
    cup1El.src = './assets/cupdown.png';
    cup2El.src = './assets/cupdown.png';
    cup3El.src = './assets/cupdown.png';
}
function totalGuesses() {
    correctEl.textContent = correctGuess;
    incorrectEl.textContent = totalGuess - correctGuess;
    totalEl.textContent = totalGuess;
}


// set event listeners 
button1.addEventListener('click', () => {
    const correctSpot = getRandomCup();
    handleGuess('oneCup', correctSpot);
});
button2.addEventListener('click', () => {
    const correctSpot = getRandomCup();
    handleGuess('twoCup', correctSpot);
});
button3.addEventListener('click', () => {
    const correctSpot = getRandomCup();
    handleGuess('threeCup', correctSpot);
});

function getRandomCup() {
    const hidingPlaces = [
        'oneCup',
        'twoCup',
        'threeCup'];

    const index = Math.floor(Math.random() * hidingPlaces.length);
    return hidingPlaces[index];
    
}
function handleGuess(userGuess, correctSpot) {
    resetStyles();
    totalGuess++;
    
    if (userGuess === correctSpot) {
        correctGuess++;
    } else if (cup1El === correctSpot) {
        cup1El.src = './assets/cupup.png';
    } else if (cup2El === correctSpot) {
        cup2El.src = './assets/cupup.png';
    } else {
        cup3El.src = './assets/cupup.png';
    }
    totalGuesses();
}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
