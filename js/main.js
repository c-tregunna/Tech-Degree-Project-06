// --------------
// Variables
// --------------
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('.btn__reset');
let missed = 0;

// Create an array for movies

let movies = [
    ['forrest gump'],
    ['doctor strange'],
    ['hidden figures'],
    ['la la land'],
    ['memphis belle'],
    ['saving private ryan'],
    ['hot fuzz'],
    ['beauty and the beast'],
    ['pitch perfect'],
    ['waterworld']
];

// --------------
// Hide overlay when you click start game button
// --------------

    const overlay = document.getElementById('overlay');
    const startGame = document.querySelector('a.btn__reset');

    startGame.addEventListener('click', () => {
        overlay.style.display = 'none';
      });

// --------------
// Return a random phrase from an array movies.split('')
// --------------

const getRandomPhraseAsArray = arr => {
    let i = Math.floor(Math.random() * movies.length);
    let moviesSplit = movies[i].split('');
    // return(moviesSplit);
    console.log(moviesSplit);
}

// --------------
// Adds the letters of a string to the display usee the ul in id "phrase"
// --------------

const addPhraseToDisplay = arr => {

}

// --------------
// Check if a letter is in the phrase
// --------------

const checkLetter = button => {

}

// --------------
// Check if the game has been won or lost
// --------------

const checkWin = () => {

}

// --------------
// Listen for the on screen keyboard to be clicked
// --------------

qwerty.addEventListener('click', e => {

});

