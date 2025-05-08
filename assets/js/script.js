const introSectionContainer = document.getElementById("intro-section-container");
const startScreenContainer = document.getElementById("start-screen-container");
const gameSectionContainer = document.getElementById("game-section-container");
const wholeGameboardArea = document.getElementById("gameboard");

/*Start splash screen*/
const startGameButton = document.getElementById('start-game-button');
startGameButton.addEventListener('click', () => {
    startScreenContainer.classList.add('hidden');
    wholeGameboardArea.classList.remove('hidden');
});

/*Game functionality*/
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

let flippedCards = [];
let matchedPairs = 0;
const totalPairs = document.querySelectorAll('.game-card').length / 2;

/* Shuffle using Fisher-Yates method */
function shuffleCards() {
    const cards = [...wholeGameboardArea.children];
    const shuffledCards = [...cards];

    for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }

    wholeGameboardArea.innerHTML = '';
    shuffledCards.forEach(card => {
        wholeGameboardArea.appendChild(card);
    });
}


/*flip cards*/
function flipCard(event) {
    const clickedCard = event.currentTarget;

    if (clickedCard.classList.contains('is-flipped')) {
        return;
    }
    if (flippedCards.length === 2) {
        return;
    }

    /*Check for matched cards*/
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
/*Check for full set of matched cards/user win*/
function checkForWin() {
    if (matchedPairs === totalPairs) {
        setTimeout(() => {
            alert('Amazing! You matched all the cards! Click the Reset button below to play again 🦣');
        }, 500);
    }
}

/* Reset the game to unflipped state */
const resetGameButton = document.getElementById('reset-gameboard');
console.log(resetGameButton);

resetGameButton.addEventListener('click', () => {
    const allCards = document.querySelectorAll('.game-card');
    allCards.forEach(card => card.classList.remove('is-flipped'));
    flippedCards = [];
    matchedPairs = 0;
    shuffleCards();
});


/*Initiate game on page load for user following start screen confirmation*/
function initGame() {
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        card.addEventListener('click', flipCard);
    });

    shuffleCards();
}

document.addEventListener("DOMContentLoaded", () => {
    initGame();
});

/*JavaScript code to ensure the Bootstrap mobile navbar collapses when navigating to in-page links*/
document.querySelectorAll(".navbar-collapse .nav-link")
    .forEach((link) => {
        link.addEventListener("click", function (e) {
            let section = document.querySelector(e.target.getAttribute("href"));
            if (section) {
                e.preventDefault(); // Prevent default anchor click behavior
                let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;
                window.scroll({
                    top: section.offsetTop - navbarHeight, // Adjust for navbar height
                    behavior: "smooth",
                });
                document
                    .querySelector(".navbar-collapse")
                    .classList.remove("show"); // Collapse navbar
            }
        });
    });