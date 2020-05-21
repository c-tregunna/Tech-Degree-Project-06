
// Jquery way to start game
    // $('.btn__reset').on('click', function() {
    //         $('#overlay').css('display', 'none');
    //     });

    function createLi(text) {
        function createElement (elementName, property, value) { // make a function to create an element, so you do not need to repeat creteElement
            const element = document.createElement(elementName);
            element[property] = value;
            return element;
        }

        function appendToLI (elementName, property, value) { // create a function to append the items to the li
            const element = createElement(elementName, property, value); // create element for name, create the property and the value of the input - value
            li.appendChild(element); //append to the li
        }
    }

    document.addEventListener('click', (button) => {
    const checkLetter = (button) => {
        let match = true; // start with no matches
        const letter = querySelectorAll('.letter'); // what we are searching, li with class letter
        for (let i = 0; i < letter.length; i += 1) {
            if(button === letter[i]) {
                li.className = 'show';
        }
        return match;
    }}
});

//
//     if (letterFound === null && e.target.tagName === "BUTTON") {
//         let heart = document.querySelectorAll('img');
//         heart.setAttribute('src', 'images/lostHeart.png');
//         missed += 1;
//     }
//     checkWin(checkLetter);
// });

let heartLives = document.querySelector('img'); // select the image
if (letterFound === null) { // in letterfound in not in string
    heartLives.setAttribute('src', 'images/lostHeart.png') // change the src
    missed += 1; // add 1 to the lives - max 5
    console.log(letterFound);
}
