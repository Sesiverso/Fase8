const phrases = [
    "Cactos são comuns na Caatinga.",
    "O xaxim é uma planta típica deste bioma.",
    "A caatinga tem um clima semiárido.",
    "O tatu-bola é um animal do bioma.",
    "A arara-azul é encontrada na Caatinga.",
    "O cacto mandacaru é característico da região.",
    "A seca é uma característica marcante da Caatinga.",
    "O quebra-cabo é um arbusto típico da Caatinga."
];

const shuffledPhrases = [...phrases, ...phrases].sort(() => Math.random() - 0.5);

let flippedCards = [];
let matchedPairs = 0;
const totalPairs = phrases.length;

const gameBoard = document.getElementById('game-board');

// Criar o tabuleiro do jogo
shuffledPhrases.forEach((phrase, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.phrase = phrase;
    card.dataset.index = index;
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
});

function flipCard() {
    if (flippedCards.length === 2 || this.classList.contains('flipped') || this.classList.contains('matched')) {
        return;
    }

    this.textContent = this.dataset.phrase;
    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.phrase === card2.dataset.phrase) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;

        if (matchedPairs === totalPairs) {
            setTimeout(() => alert('Parabéns! Você encontrou todos os pares!'), 100);
        }
    } else {
        setTimeout(() => {
            card1.textContent = '';
            card2.textContent = '';
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }, 1000);
    }

    flippedCards = [];
}
