import historicalEvents from './historicalevents.js';

let currentEvent;
let score = 0;

function getRandomEvent() {
    const events = Object.keys(historicalEvents);
    return events[Math.floor(Math.random() * events.length)];
}

function displayNewEvent() {
    currentEvent = getRandomEvent();
    document.getElementById('eventDisplay').textContent = currentEvent;
    document.getElementById('yearInput').value = '';
    document.getElementById('result').textContent = '';
}

function checkAnswer() {
    const userYear = parseInt(document.getElementById('yearInput').value);
    if (isNaN(userYear)) {
        document.getElementById('result').textContent = 'Please enter a valid year.';
        return;
    }
    const correctYear = historicalEvents[currentEvent].year;
    
    if (userYear === correctYear) {
        sucess.play();
        document.getElementById('result').textContent = 'Correct!';
        score++;
        document.getElementById('score').textContent = score;
    } else {
        wrong.play();
        document.getElementById('result').textContent = `Wrong. The correct year was ${correctYear}.`;
    }
    
    setTimeout(displayNewEvent, 1000);
}

document.getElementById('submitButton').addEventListener('click', checkAnswer);

document.getElementById('yearInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

document.getElementById('yearInput').addEventListener('input', function(event) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementsByClassName('diff');

    popup.style.display = 'flex';

    Array.from(closePopup).forEach(button => {
        button.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    });
});

document.getElementById('submitButton').addEventListener('click', checkAnswer);

document.getElementById('yearInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

displayNewEvent();