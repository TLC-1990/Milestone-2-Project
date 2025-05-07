const introSectionContainer = document.getElementById("intro-section-container")
console.log(introSectionContainer)


const startScreenContainer = document.getElementById("start-screen-container")
console.log(startScreenContainer)


const gameSectionContainer = document.getElementById("game-section-container")
console.log(gameSectionContainer)

const wholeGameboardArea = document.getElementById("gameboard")
console.log(wholeGameboardArea)

/*Start splash screen*/

const startGameButton = document.getElementById('start-game-button');
console.log(startGameButton)

function startGame() {
    if (wholeGameboardArea.style.display == "none") {
        wholeGameboardArea.style.display = "block";
        startScreenContainer.style.display = "block";
    } else {
        wholeGameboardArea.style.display = "block";
    }
}
console.log(startGame())
startGameButton.addEventListener('click', startGame())




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

let flippedCards = [];
let matchedPairs = 0;
const totalPairs = document.querySelectorAll('.game-card').length / 2;
console.log(totalPairs)

/* Shuffle function using Fisher-Yates */
function shuffleCards() {
    const board = document.getElementById('game-board');
    const cards = [...board.children]

    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        board.appendChild(cards[j]); // Rearrange DOM
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function checkForWin() {
    if (matchedPairs === totalPairs) {
        setTimeout(() => {
            alert('🎉 You matched all the cards! Want to play again?');
        }, 500);
    }
}

function flipCard(event) {
    const clickedCard = event.currentTarget;

    if (
        clickedCard.classList.contains('is-flipped') ||
        flippedCards.length === 2
    ) {
        return;
    }

    clickedCard.classList.add('is-flipped');
    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        const isMatch = card1.dataset.card === card2.dataset.card;

        if (isMatch) {
            matchedPairs++;
            flippedCards = [];
            checkForWin();
        } else {
            setTimeout(() => {
                card1.classList.remove('is-flipped');
                card2.classList.remove('is-flipped');
                flippedCards = [];
            }, 1000);
        }
    }
}

/*Initiate game*/
function initGame() {
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        card.addEventListener('click', flipCard);
    });

    shuffleCards();
}
/*Initiate game automatically*/
initGame();