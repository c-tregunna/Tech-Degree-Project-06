// --------------
// Variables
// --------------
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('.btn__reset');
let missed = 0;

const overlay = document.getElementById('overlay');
const startGame = document.querySelector('a.btn__reset');

const name = prompt('Welcome to the game, what is your name?')

let heartLives = document.querySelectorAll('img'); // select the image




// Create an array for movies

let movies = [
    'forrest gump',
    'doctor strange',
    'hidden figures',
    'american history x',
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
// Check if a letter is in the phrase - DO NOT TOUCH!!!!
// --------------
 // start with no matches
const checkLetter = (button) => {
    let match = null;
    const letters = document.querySelectorAll('.letter'); // what we are searching, li with class letter
    for (let i = 0; i < letters.length; i += 1) {
        if (button === letters[i].textContent) {
            match = true;
            letters[i].className = 'show letter'; // need to keep the letter class for styking
        }
    }
    return match;
};

// --------------
// Check if the game has been won or lost
// --------------

const checkWin = () => {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const winTitle = document.querySelector('.title');
    if (letter.length === show.length) { // does the li with letter match li with show
        setTimeout(() => { // set delay to screen
        overlay.className = 'win'; // if above is true show this
        winTitle.textContent = `YOU WON! Well done ${name}!`; // if above is true show this
        if (name === null ) { // if they dont add a name run this
            winTitle.textContent = `YOU WON! Well done!`;
        }
        overlay.style.display = 'flex'; // if above is true show this
        resetButton.textContent = 'Play Again';
    }, 1000);
 } else if (missed >= 5) { // if above is false show this, used all their lives
        setTimeout(() => {
        overlay.className = 'lose'; // if above is false show this, used all their lives
        winTitle.textContent = `Sorry ${name}, you lost! Would you like to try again?`; // if above is false show this, used all their lives
        if (name === null ) { // if they dont add a name run this
            winTitle.textContent = `Sorry you lost! Would you like to try again?`;
        }
        overlay.style.display = 'flex'; // if above is false show this, used all their lives
        resetButton.textContent = 'Try Again';
    }, 1000);
}
}

// --------------
// Listen for the on screen keyboard to be clicked
// --------------

qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') { //targets the button
        e.target.classList.add('chosen'); // when clicked add chosen button
        e.target.setAttribute('disabled', true); // sets the button to disable so you can't click
    }
    const letterFound = checkLetter(event.target.textContent);
    if (letterFound === true) {
        const li = document.querySelectorAll('li .letter'); // creates the li
        li.className = 'show';
    }
    if (letterFound === null && e.target.tagName === "BUTTON") { // in letterfound in not in string && e.target.tagName === "BUTTON" stops losing a life inbetween keys, so you are just tragetting button
        for (let i = 0; i < heartLives.length; i++) { // loops through the lives
            heartLives[missed].setAttribute('src', 'images/lostHeart.png') // change the src
        }
    missed++;
}
checkWin(checkLetter);
});

// --------------
// Reset - refresh the page when click button
// --------------

resetButton.addEventListener("click", (e) => {
    if (e.target.textContent === "Play Again") { // if resetButton text is play again
        location.reload(); //reload page, takes back to start game page
    } else if (e.target.textContent === "Try Again") {
        location.reload();
    }
  });

