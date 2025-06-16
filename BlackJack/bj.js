let card1 = 10;
let card2 = 11;
let sum = card1 + card2;
let hasBJ = false;
let isAlive = true;
let message = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function start() {
    cardsEl.textContent = "Cards: " + card1 + " " + card2;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        sum =
            message.textContent = "Do you want to draw another card?";
    } else if (sum === 21) {
        message.textContent = "You've got BlackJack!";
        hasBJ = true;
    } else {
        message.textContent = "You busted!";
        isAlive = false;
    }
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = 3;
    sum += card;
    newCard();
}

start();
