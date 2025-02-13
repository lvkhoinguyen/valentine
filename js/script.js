// This file contains the JavaScript code for the Valentine's Day game.

document.addEventListener('DOMContentLoaded', () => {
    const startGameButton = document.getElementById('startGame');
    const puzzleContainer = document.getElementById('puzzleContainer');
    const puzzlePieces = document.getElementById('puzzlePieces');
    const puzzleBoard = document.getElementById('puzzleBoard');
    const completionMessage = document.getElementById('completionMessage');

    const pieces = [
        { id: 1, correctPosition: 0, image: 'image/piece1.jpg' },
        { id: 2, correctPosition: 1, image: 'image/piece2.jpg' },
        { id: 3, correctPosition: 2, image: 'image/piece3.jpg' },
        { id: 4, correctPosition: 3, image: 'image/piece4.jpg' },
        { id: 5, correctPosition: 4, image: 'image/piece5.jpg' },
        { id: 6, correctPosition: 5, image: 'image/piece6.jpg' },
        { id: 7, correctPosition: 6, image: 'image/piece7.jpg' },
        { id: 8, correctPosition: 7, image: 'image/piece8.jpg' },
        { id: 9, correctPosition: 8, image: 'image/piece9.jpg' }
    ];

    startGameButton.addEventListener('click', () => {
        startGameButton.classList.add('hidden');
        puzzleContainer.classList.remove('hidden');
        initializePuzzle();
    });

    function initializePuzzle() {
        // Shuffle the pieces array
        const shuffledPieces = pieces.sort(() => Math.random() - 0.5);

        shuffledPieces.forEach(piece => {
            const pieceElement = document.createElement('div');
            pieceElement.classList.add('puzzle-piece');
            pieceElement.draggable = true;
            pieceElement.dataset.id = piece.id;
            pieceElement.style.backgroundImage = `url(${piece.image})`;
            pieceElement.addEventListener('dragstart', handleDragStart);
            puzzlePieces.appendChild(pieceElement);
        });

        for (let i = 0; i < 9; i++) {
            const boardSlot = document.createElement('div');
            boardSlot.classList.add('puzzle-slot');
            boardSlot.dataset.position = i;
            boardSlot.addEventListener('dragover', handleDragOver);
            boardSlot.addEventListener('drop', handleDrop);
            puzzleBoard.appendChild(boardSlot);
        }
    }

    function handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.dataset.id);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const pieceId = event.dataTransfer.getData('text/plain');
        const pieceElement = document.querySelector(`[data-id='${pieceId}']`);
        const targetPosition = event.target.dataset.position;

        if (pieces.find(piece => piece.id == pieceId).correctPosition == targetPosition) {
            event.target.appendChild(pieceElement);
            checkCompletion();
        }
    }

    function checkCompletion() {
        const placedPieces = puzzleBoard.querySelectorAll('.puzzle-piece');
        if (placedPieces.length === 9) {
            completionMessage.classList.remove('hidden');
            completionMessage.textContent = "Congratulations! You completed the puzzle! Wishing you a day filled with love and happiness!";
        }
    }
});