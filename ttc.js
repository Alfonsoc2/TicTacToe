const gridCells = document.querySelectorAll('.gameGrid');
const reset = document.getElementById('reset');
const resultDiv = document.getElementById('gameResult')
const pTurnDiv = document.getElementById('playerTurn')

let currentPlayer = "X";
let gameOver = false




gridCells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (!cell.textContent && !gameOver) {
            cell.textContent = currentPlayer;

            const winner = checkWinner();
            if (winner) {
                resultDiv.textContent = `${winner} Wins!`;
                gameOver = true;
                pTurnDiv.textContent = 'Game Over!';
            } else if (Array.from(gridCells).every(cell => cell.textContent)){
                resultDiv.textContent = `It's A Draw !!!`;
                gameOver = true;
                pTurnDiv.textContent = 'Game Over!';
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            pTurnDiv.textContent = `${currentPlayer}'s Turn`;
        }
    }
    });
});
reset.addEventListener('click', () => {
    gridCells.forEach((cell) => {
        cell.textContent ='';
    });
    currentPlayer = 'X' ;
    gameOver = false;
    resultDiv.textContent = '';
    pTurnDiv.textContent = `X's Turn`;
});

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], // row 1
        [3, 4, 5], // row 2
        [6, 7, 8], // row 3
        [0, 3, 6], // column 1
        [1, 4, 7], // column 2
        [2, 5, 8], // column 3
        [0, 4, 8], // diagonal
        [2, 4, 6], // diagonal
    ];
     for (const pattern of winPatterns){
      const [a,b,c] = pattern;
      const cellA = gridCells[a].textContent;
      const cellB = gridCells[b].textContent;
      const cellC = gridCells[c].textContent;
    
      if (cellA && cellA === cellB && cellB === cellC) {
        return cellA;
      }
     }
    return null;
}