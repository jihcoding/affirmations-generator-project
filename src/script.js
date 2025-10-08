function generateAffirmations(event) {
    event.preventDefault();

    new Typewriter('#affirmations-text', {
    strings: ['I am capable of achieving my goals'],
     autoStart: true,
    delay: 1,
    cursor: "",
    });
}

let affirmationsFormElement = document.querySelector('#affirmations-generator-form');
affirmationsFormElement.addEventListener("submit", generateAffirmations);