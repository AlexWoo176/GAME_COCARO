class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.value = VALUE_EMPTY;
    }

    setX(x) {
        this.x = x;
    }

    getX() {
        return this.x;
    }

    setY(y) {
        this.y = y;
    }

    getY() {
        return this.y;
    }

    createCellHtml() {
        let cellHtml = '<td id="cell-' + this.x + '-' + this.y + '" ' +
            'onclick="playGame(' + this.x + ',' + this.y + ')"></td>';
        return cellHtml;
    }

    draw() {
        let cellTd = document.getElementById("board-game").rows[this.x].cells[this.y];
        switch (this.value) {
            case VALUE_X:
                cellTd.innerHTML = 'X';
                break;
            case VALUE_O:
                cellTd.innerHTML = 'O';
                break;
            default:
                cellTd.innerHTML = '';
                break;
        }
    }
}