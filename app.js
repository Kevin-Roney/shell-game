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
let incorrectGuess = 0;
// set event listeners 
button1.addEventListener('click', () => {
    const correctCup = getRandomCup();
});
button2.addEventListener('click', () => {

});
button3.addEventListener('click', () => {

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
