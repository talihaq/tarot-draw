const words = new URLSearchParams(window.location.search);

// gets the vistor's username from index.html for reading.html
const userName = words.get('username');


// grab greeting element
const greeting = document.getElementById('greeting');

// greeting for reading.html
greeting.innerHTML = `Hi there, <span title='id: username'>${userName}</span>.`;

// code to let the cards be selected randomly
let randomCard = Math.floor(Math.random() * 21);

// control flow for tarot card
tarotCard = '';

switch (randomCard) {
    case 0:
        tarotCard = 'The Fool';
        break;
    case 1:
        tarotCard = 'The Magician';
        break;
    case 2:
        tarotCard = 'The High Priestess';
        break;
    case 3:
        tarotCard = 'The Empress';
        break;
    case 4:
        tarotCard = 'The Emperor';
        break;
    case 5:
        tarotCard = 'The Hierophant';
        break;
    case 6:
        tarotCard = 'The Lovers';
        break;
    case 7:
        tarotCard = 'The Chariot';
        break;
    case 8:
        tarotCard = 'Strength';
        break;
    case 9:
        tarotCard = 'The Hermit';
        break;
    case 10:
        tarotCard = 'Wheel of Fortune';
        break;
    case 11:
        tarotCard = 'Justice';
        break;
    case 12:
        tarotCard = 'The Hanged Man';
        break;
    case 13:
        tarotCard = 'Death';
        break;
    case 14:
        tarotCard = 'Temperance';
        break;
    case 15:
        tarotCard = 'The Devil';
        break;
    case 16:
        tarotCard = 'The Tower';
        break;
    case 17:
        tarotCard = 'The Star';
        break;
    case 18:
        tarotCard = 'The Moon';
        break;
    case 19:
        tarotCard = 'The Sun';
        break;
    case 20:
        tarotCard = 'Judgement';
        break;
    case 21:
        tarotCard = 'The World';
        break;
}

// grab card element
const card = document.getElementById('card');

//populate card element with text
card.innerHTML = `You drew <span title='id: card'>${tarotCard}</span>`;