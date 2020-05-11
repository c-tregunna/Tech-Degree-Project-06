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

// Hide overlay when you click start game button

$('.btn__reset').on('click', function() {
        $('#overlay').css('display', 'none');
    });
