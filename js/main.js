// --------------
// Variables
// --------------
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('.btn__reset');
let missed = 0;

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

    const overlay = document.getElementById('overlay');
    const startGame = document.querySelector('a.btn__reset');

    startGame.addEventListener('click', () => {
        overlay.style.display = 'none';
      });

// --------------
// Return a random phrase from an array movies.split('')
// --------------

const getRandomPhraseAsArray = (movies) => { // should this arr be movies?
    let i = Math.floor(Math.random() * movies.length);
    return movies[i].split('');
    console.log(getRandomPhraseAsArray(movies));
}

getRandomPhraseAsArray(movies);

// --------------
// Adds the letters of a string to the display use the ul in id "phrase"
// --------------

    const addPhraseToDisplay = (movies) => {
        for (let i = 0; i < movies.length; i += 1) {
            const ul = document.querySelector('#phrase ul'); // targets the ul
            const li = document.createElement('li'); // creates the li
            const letter = document.createTextNode(movies[i]); // add text of letter movies to letter
            if (letter === '') {
                li.className = 'space';
            } else {
                li.className = 'letter';
            }
            li.appendChild(letter);
            ul.appendChild(li); //append to the ul
            }
        };































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

