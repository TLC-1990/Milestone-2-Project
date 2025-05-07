const introSectionContainer = document.getElementById("intro-section-container")
console.log(introSectionContainer)


const startScreenContainer = document.getElementById("start-screen-container")
console.log(startScreenContainer)


const gameSectionContainer = document.querySelector("game-section-container")
console.log(gameSectionContainer)

const wholeGameboardArea = document.getElementById("gameboard")
console.log(wholeGameboardArea)

/*Start splash screen*/

const startGameButton = document.getElementById('start-game-button');
console.log(startGameButton)

function startGame() {
    if (wholeGameboardArea.style.display == "none") {
        wholeGameboardArea.style.display = "block";
        startScreenContainer.style.display = "none";
    } else {
        wholeGameboardArea.style.display = "block";
    }
    confirm('Are you sure you want to start the game?');
}

startGameButton.addEventListener('click', startGame)


/*Game functionality*/

let firstCard = false;
let secondCard = false;
let lockboard = false;
let score = 0;


const cards = [{
        name: 'Irish Elk',
        image: 'assets/images/irish-elk.webp',
        altAttribute: 'An image of an Irish elk on a sand-coloured background with a name label below'
    },
    {
        name: 'Glyptodon',
        image: 'assets/images/glyptodon.webp',
        altAttribute: 'An image of a glyptodon on a sand-coloured background with a name label below'
    },
    {
        name: 'Woolly Mammoth',
        image: 'assets/images/woolly-mammoth.webp',
        altAttribute: 'An image of a woolly mammoth on a sand-coloured background with a name label below'
    },
    {
        name: 'Megatherium',
        image: 'assets/images/megatherium.webp',
        altAttribute: 'An image of a megatherium on a sand-coloured background with a name label below'
    },
    {
        name: 'Short-Faced Bear',
        image: 'assets/images/short-faced-bear.webp',
        altAttribute: 'An image of a short-faced bear on a sand-coloured background with a name label below'
    },
    {
        name: 'Smilodon',
        image: 'assets/images/smilodon.webp',
        altAttribute: 'An image of a smilodon on a sand-coloured background with a name label below'
    },
    {
        name: 'Titanis',
        image: 'assets/images/titanis.webp',
        altAttribute: 'An image of a titanis bird on a sand-coloured background with a name label below'
    },
    {
        name: 'Steppe Bison',
        image: 'assets/images/steppe-bison.webp',
        altAttribute: 'An image of a steppe bison on a sand-coloured background with a name label below'
    },
];

console.log(cards)

/*duplicate cards*/

const currentCards = [...cards, ...cards];
// shuffle
currentCards.sort(() => Math.random())

/*Flip cards*/
const card = document.querySelectorAll(".game-card");


card.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
    for (let i = 0; i < card.length; i++) {
        if (card[i].classList.contains('is-flipped')) card[i].classList.remove('is-flipped')
    }
    this.classList.toggle('is-flipped');
};


/*shuffle cards*/
function shuffleCards(currentCards) {
    for (let i = currentCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = currentCards[i];
        currentCards[i] = currentCards[j];
        currentCards[j] = temp;
    }
}

console.log(shuffleCards(currentCards))

function generateCards() {
    for (let card of currentCards) {
        gridContainer.appendChild(cardElement);
        cardElement.addEventListener("click", flipCard);
    }
}


/*countdown timer*/
let start = document.querySelector('#startTimer');
let restart = document.querySelector('#restartTimer');

let timerId; // makes the variable global
startTimer.addEventListener('click', function () {
    timerId = setInterval(function () {
        console.log('!')
    }, 1000);
});

restartTimer.addEventListener('click', function () {
    clearInterval(timerId);
});


function countdown(minutes, seconds) {
    function tick() {
        const countdownTimer = document.getElementById("game-timer");
        countdownTimer.innerHTML =
            minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        seconds--;
        if (seconds >= 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {
            if (minutes >= 1) {
                setTimeout(function () {
                    countdown(minutes - 1, 59);
                }, 1000);
                if (seconds !== -1) {
                    setTimeout(Decrement, 1000);
                } else {
                    alert('Game OVER! Would you like to start again?');
                }
            };
        }
    }
    tick();
}

countdown(2, 0);

/*game restart button*/
function restartTimer() {
    shuffleCards(currentCards);
    alert('Do you want another go?');
    clearInterval(timerId);
}