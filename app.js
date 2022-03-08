// import functions and grab DOM elements
const cup1El = document.getElementById('cup1');
const cup2El = document.getElementById('cup2');
const cup3El = document.getElementById('cup3');

const button1 = document.getElementById('cup1Button');
const button2 = document.getElementById('cup2Button');
const button3 = document.getElementById('cup3Button');

const correctEl = document.getElementById('correct-guesses');
const incorrectEl = document.getElementById('incorrect-guesses');
const totalEl = document.getElementById('total-guesses');


// let state
let totalGuess = 0;
let correctGuess = 0;

function clearImage() {
    cup1El.src = './assets/cupdown.png';
    cup2El.src = './assets/cupdown.png';
    cup3El.src = './assets/cupdown.png';
}

// set event listeners 
button1.addEventListener('click', () => {
    clearImage();
    totalGuess++;
    const getRandomCup = Math.floor(Math.random() * 3);
    if (getRandomCup === 0) {
        cup1El.src = './assets/cupup.png';
        correctGuess++;
    } else if (getRandomCup === 1) {
        cup2El.src = './assets/cupup.png';
    } else {
        cup3El.src = './assets/cupup.png';
    }

});
button2.addEventListener('click', () => {
    clearImage();
    totalGuess++;
    const getRandomCup = Math.floor(Math.random() * 3);
    if (getRandomCup === 0) {
        cup1El.src = './assets/cupup.png';
    } else if (getRandomCup === 1) {
        cup2El.src = './assets/cupup.png';
        correctGuess++;
    } else {
        cup3El.src = './assets/cupup.png';
    }
});
button3.addEventListener('click', () => {
    clearImage();
    totalGuess++;
    const getRandomCup = Math.floor(Math.random() * 3);
    if (getRandomCup === 0) {
        cup1El.src = './assets/cupup.png';
    } else if (getRandomCup === 1) {
        cup2El.src = './assets/cupup.png';
    } else {
        cup3El.src = './assets/cupup.png';
        correctGuess++;
    }
});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
