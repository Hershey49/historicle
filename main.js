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
        document.getElementById('result').textContent = 'Correct!';
        score++;
        document.getElementById('score').textContent = score;
    } else {
        document.getElementById('result').textContent = `Wrong. The correct year was ${correctYear}.`;
    }
    
    setTimeout(displayNewEvent, 2000);
}

document.getElementById('submitButton').addEventListener('click', checkAnswer);

document.getElementById('yearInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Ensure only numbers can be entered
document.getElementById('yearInput').addEventListener('input', function(event) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

displayNewEvent();