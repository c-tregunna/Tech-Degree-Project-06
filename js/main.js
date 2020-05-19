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
            const ul = phrase; // targets the ul - can I use the phrase variable
            const li = document.createElement('li'); // creates the li
            li.textContent = movies[i];
            // const letter = document.createTextNode(arr[i]); // add text of letter movies to letter *****
            if (arr[i] === ' ') {
                li.className = 'space';
            } else {
                li.className = 'letter';
            }
            ul.appendChild(li); //append to the ul
            // li.appendChild(letter);
            }
            return arr[i];

            console.log(addPhraseToDisplay(movies));
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

