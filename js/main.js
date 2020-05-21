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
// Check if a letter is in the phrase - DO NOT TOUCH!!!!
// --------------
let match = null; // start with no matches
const checkLetter = (button) => {
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
        overlay.className = 'win'; // if above is true show this
        winTitle.textContent = 'YOU WON!'; // if above is true show this
        overlay.style.display = 'flex'; // if above is true show this
    } else if (missed >= 5) { // if above is false show this, used all their lives
        overlay.className = 'lose'; // if above is false show this, used all their lives
        winTitle.textContent = 'Sorry, you lost!'; // if above is false show this, used all their lives
        overlay.style.display = 'flex'; // if above is false show this, used all their lives
    }
}

// --------------
// Listen for the on screen keyboard to be clicked
// --------------

qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') { //targets the button
        e.target.classList.add('chosen'); // when clicked add chosen button
        e.target.setAttribute('disabled', true);
    }
    const letterFound = checkLetter(event.target.textContent);
    if (letterFound === true) {
        const li = document.querySelectorAll('li .letter'); // creates the li
        li.className = 'show';
    }
    let heartLives = document.querySelector('img'); // select the image
    if (letterFound === null) { // in letterfound in not in string
        heartLives.setAttribute('src', 'images/lostHeart.png') // change the src
        missed += 1; // add 1 to the lives - max 5
        console.log(letterFound);
    }
});

//If the checkLetter function returns a null value, the player has guessed the wrong letter. In the keyboard event listener, after checkLetter is called, write a statement to check the value of the letterFound variable. If the value is null, remove one of the tries from the scoreboard. If you haven't created it yet, make sure you have a missed variable to store the state of the scoreboard (initialized to 0). When you remove a try from the scoreboard, make sure to increase the missed count by 1.