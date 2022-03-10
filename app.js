// import functions and grab DOM elements
const button1 = document.getElementById('cup1Button');
const button2 = document.getElementById('cup2Button');
const button3 = document.getElementById('cup3Button');

const correctEl = document.getElementById('correct-guesses');
const incorrectEl = document.getElementById('incorrect-guesses');
const totalEl = document.getElementById('total-guesses');

const img1 = document.getElementById('standard1');
const img2 = document.getElementById('standard2');
const img3 = document.getElementById('standard3');

// let state
let totalGuess = 0;
let correctGuess = 0;

function resetStyles() {
    img1.src = './assets/cupdown.png';
    img2.src = './assets/cupdown.png';
    img3.src = './assets/cupdown.png';
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
    } 
    if (correctSpot === 'oneCup') {
        img1.src = `./assets/cupup.png`;
    } else if (correctSpot === 'twoCup') {
        img2.src = `./assets/cupup.png`;
    } else {
        img3.src = `./assets/cupup.png`;
    }
    totalGuesses();
    console.log(correctSpot);
}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
