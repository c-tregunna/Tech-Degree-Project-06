// Create an array for movies

let movies = [
    ['Forrest Gump'],
    ['Doctor Strange'],
    ['Hidden Figures'],
    ['La La Land'],
    ['Memphis Belle'],
    ['Saving Private Ryan'],
    ['Hot Fuzz'],
    ['Beauty and the Beast'],
    ['Pitch Perfect'],
    ['Waterworld']
];

console.log(movies);

// --------------
// Hide overlay when you click start game button
// --------------


    const overlay = document.getElementById('overlay');
    const startGame = document.querySelector('a.btn__reset');

    startGame.addEventListener('click', () => {
        overlay.style.display = 'none';
      });
