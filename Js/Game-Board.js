class GameBoard {
    constructor(rows, cols, elementId) {
        this.rows = rows;
        this.cols = cols;
        this.elementId = elementId;
        this.turn = VALUE_X;
        this.cells = [];
        this.isOver = false;
    }

    draw() {
        let element = '';
        for (let i = 0; i < this.rows; i++) {
            element += '<tr>';
            let row = [];
            this.cells.push(row);
            for (let j = 0; j < this.cols; j++) {
                let cell = new Cell(i, j);
                row.push(cell);
                element += cell.createCellHtml();
            }
            element += '</tr>';
        }
        document.getElementById(this.elementId).innerHTML = element;
    }

    clickCell(x, y) {
        if (this.isOver) {
            return;
        }
        let cell = this.cells[x][y];
        if (cell.value === VALUE_EMPTY) {
            cell.value = this.turn;
            cell.draw();
            if (this.turn === VALUE_X) {
                this.turn = VALUE_O;
            } else {
                this.turn = VALUE_X;
            }
        } else {
            alert('Cell is not emptied');
        }
        this.checkWin(x, y);
    }

    getCellValue(x, y) {
        let cell = document.getElementById("board-game").rows[x].cells[y];
        return cell.innerHTML;
    }

    checkWin(x, y) {
        let countX = this.getCount(x, y, 'horizontal');
        let countY = this.getCount(x, y, 'vertical');
        let countXY = this.getCount(x, y, "diagonal_1");
        let countYX = this.getCount(x, y, "diagonal_2");
        this.gameOver(countX);
        this.gameOver(countY);
        this.gameOver(countXY);
        this.gameOver(countYX);
    }

    gameOver(count) {
        if (count >= VALUE_WIN) {
            setTimeout(function () {
                alert('WON');
            }, 100);
            this.isOver = true;
        }
    }

    getCount(x, y, direction) {
        let count = 1, i = 1, j = 1;
        switch (direction) {
            case 'horizontal':
                while ((x + i) < DEFAULT_ROWS && this.getCellValue(x + i, y) === this.getCellValue(x, y)) {
                    count++;
                    i++;
                }
                while ((x - j) >= 0 && this.getCellValue(x - j, y) === this.getCellValue(x, y)) {
                    count++;
                    j++;
                }
                break;
            case 'vertical':
                while ((y + i) < DEFAULT_COLUMNS && this.getCellValue(x, y + i) === this.getCellValue(x, y)) {
                    count++;
                    i++;
                }
                while ((y - j) >= 0 && this.getCellValue(x, y - j) === this.getCellValue(x, y)) {
                    count++;
                    j++;
                }
                break;
            case 'diagonal_1':
                while ((x + i) < DEFAULT_ROWS && (y + i) < DEFAULT_COLUMNS && this.getCellValue(x + i, y + 1) === this.getCellValue(x, y)) {
                    count++;
                    i++;
                }
                while ((x - j) >= 0 && (x - j) >= 0 && this.getCellValue(x - j, y - j) === this.getCellValue(x, y)) {
                    count++;
                    j++;
                }
                break;
            case "diagonal_2":
                while ((x - i) < DEFAULT_ROWS && (y + i) < DEFAULT_COLUMNS && this.getCellValue(x - i, y + i) === this.getCellValue(x, y)) {
                    count++;
                    i++;
                }
                while ((x + j) >= 0 && (y - j) >= 0 && this.getCellValue(x + j, y - j) === this.getCellValue(x, y)) {
                    count++;
                    j++;
                }
                break;
        }
        return count;
    }

}