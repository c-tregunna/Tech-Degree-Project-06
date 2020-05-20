// --------------
// Variables
// --------------
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('.btn__reset');
let missed = 0;

const overlay = document.getElementById('overlay');
const startGame = document.querySelector('a.btn__reset');

// Create an array for movies

let movies = [
    'forrest gump',
    'doctor strange',
    'hidden figures',
    'la la land',
    'memphis belle',
    'saving private ryan',
    'hot fuzz',
    'beauty and the beast',
    'pitch perfect',
    'waterworld'
];

// --------------
// Hide overlay when you click start game button
// --------------

    startGame.addEventListener('click', () => {
        overlay.style.display = 'none';
      });

// --------------
// Return a random phrase from an array movies.split('')
// --------------

const getRandomPhraseAsArray = (arr) => { // should this arr be movies?
    let i = Math.floor(Math.random() * arr.length);
    return arr[i].split('');
} // this function works, do not touch!!

getRandomPhraseAsArray(movies);

// --------------
// Adds the letters of a string to the display use the ul in id "phrase"
// --------------

const addPhraseToDisplay = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        const ul = document.querySelector('#phrase ul'); // targets the ul - can I use the phrase variable
        const li = document.createElement('li'); // creates the li
        li.textContent = getRandomPhraseAsArray(arr[i]);
        if (arr[i] === ' ') {
                li.className = 'space';
            } else {
                li.className = 'letter';
            }
            ul.appendChild(li); //append to the ul
    }
};

const movieArray = getRandomPhraseAsArray(movies);
addPhraseToDisplay(movieArray); // moves above into this function

// --------------
// Check if a letter is in the phrase
// --------------
let match = null; // start with no matches
const checkLetter = (button) => {
    const letter = document.querySelectorAll('li .letter'); // what we are searching, li with class letter
    for (let i = 0; i < letter.length; i += 1) {
        if (button === letter[i]) {
            match = true;
            letter.className = 'show';
        }
    }
    return match;
};

// --------------
// Check if the game has been won or lost
// --------------

const checkWin = () => {
    const letter = document.querySelectorAll('li .letter');
    const show = document.querySelectorAll('li .show');
    const winTitle = document.querySelector('.title')
    if (letter.length === show.length) {
        overlay.className = 'win';
        winTitle.textContent = 'YOU WON!';
        overlay.style.display = 'flex';

    }

}

const checkWin = () => {
    const letter = document.querySelectorAll(".letter");
    const show = document.querySelectorAll(".show");
    const title = document.querySelector(".title");
    if (letter.length === show.length) {
      setTimeout(() => {
        overlay.classList.add("win");
        title.textContent = "YOU WIN!";
        overlay.style.display = "flex";
        startButton.textContent = "Reset Game";
      }, 1000);
    }
    if (missed >= 5) {
      setTimeout(() => {
        overlay.classList.add("lose");
        title.textContent = "You Lose. Try again?";
        overlay.style.display = "flex";
        startButton.textContent = "Reset Game";
      }, 300);
    }
  };






























// --------------
// Listen for the on screen keyboard to be clicked
// --------------

qwerty.addEventListener('click', e => {

});

