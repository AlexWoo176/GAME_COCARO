class Game {
    constructor() {
        this.boardGame = new GameBoard(DEFAULT_ROWS, DEFAULT_COLUMNS, 'board-game');
    }

    start() {
        this.boardGame.draw();
    }

    displayAll() {
        this.start();
    }
}

let game = new Game();

function startCaro() {
    game.displayAll();
    document.getElementById('btnStart').innerHTML = 'CHƠI LẠI';
}

function playGame(x, y) {
    game.boardGame.clickCell(x, y);
}