const phrases = [
    "Qual o cacto típico da caatinga?", // Pergunta
    "Mandacaru", // Resposta
    "Animal predominante da caatinga?", // Pergunta
    "Arara vermelha", // Resposta
    "Qual seu clima?", // Pergunta
    "Tropical Semiárido", // Resposta
    "Outro animal presente?", // Pergunta
    "Tatu-bola", // Resposta
    "Característica marcante?", // Pergunta
    "Seca", // Resposta
    "Arbusto típico?", // Pergunta
    "Quebra-cabo", // Resposta
    "Curiosidade?", // Pergunta
    "Os cactos são as vegetações mais encontradas da caatinga", // Resposta
    "Planta típica?", // Pergunta
    "Xaxim" // Resposta
];

const shuffledPhrases = [...phrases].sort(() => Math.random() - 0.5);

let flippedCards = [];
let matchedPairs = 0;
const totalPairs = phrases.length / 2;

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

    // Checar se a pergunta e a resposta correspondem como pares
    if (
        (card1.dataset.phrase === "Qual o cacto típico da caatinga?" && card2.dataset.phrase === "Mandacaru") ||
        (card1.dataset.phrase === "Mandacaru" && card2.dataset.phrase === "Qual o cacto típico da caatinga?") ||
        (card1.dataset.phrase === "Animal predominante da caatinga?" && card2.dataset.phrase === "Arara vermelha") ||
        (card1.dataset.phrase === "Arara vermelha" && card2.dataset.phrase === "Animal predominante da caatinga?") ||
        (card1.dataset.phrase === "Qual seu clima?" && card2.dataset.phrase === "Tropical Semiárido") ||
        (card1.dataset.phrase === "Tropical Semiárido" && card2.dataset.phrase === "Qual seu clima?") ||
        (card1.dataset.phrase === "Outro animal presente?" && card2.dataset.phrase === "Tatu-bola") ||
        (card1.dataset.phrase === "Tatu-bola" && card2.dataset.phrase === "Outro animal presente?") ||
        (card1.dataset.phrase === "Característica marcante?" && card2.dataset.phrase === "Seca") ||
        (card1.dataset.phrase === "Seca" && card2.dataset.phrase === "Característica marcante?") ||
        (card1.dataset.phrase === "Arbusto típico?" && card2.dataset.phrase === "Quebra-cabo") ||
        (card1.dataset.phrase === "Quebra-cabo" && card2.dataset.phrase === "Arbusto típico?") ||
        (card1.dataset.phrase === "Curiosidade?" && card2.dataset.phrase === "Os cactos são as vegetações mais encontradas da caatinga") ||
        (card1.dataset.phrase === "Os cactos são as vegetações mais encontradas da caatinga" && card2.dataset.phrase === "Curiosidade?") ||
        (card1.dataset.phrase === "Planta típica?" && card2.dataset.phrase === "Xaxim") ||
        (card1.dataset.phrase === "Xaxim" && card2.dataset.phrase === "Planta típica?")
    ) {
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
