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
    } else {
        wholeGameboardArea.style.display = "none";
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

const duplicateCards = [];
for (let i = 0; i < cards.length; i++) {
    duplicateCards.push(cards[i]);
}
console.log(duplicateCards)

const currentCards = cards.concat(duplicateCards);
console.log(currentCards)

currentCards = []


const shuffleCards = currentCards => {
    for (let i = currentCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = currentCards[i];
        currentCards[i] = currentCards[j];
        currentCards[j] = temp;
    }
}
console.log(shuffleCards)

function generateCards() {
    for (let card of currentCards) {
        gridContainer.appendChild(cardElement);
        cardElement.addEventListener("click", flipCard);
    }
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    score++;
    document.querySelector(".score").textContent = score;
    lockBoard = true;

    checkForMatch();
}


function restart() {

    confirm('Do you want another go?')
}