const gridCells = document.querySelectorAll('.gameGrid');
const reset = document.getElementById('reset');

let currentPlayer = "X";




gridCells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});
reset.addEventListener('click', () => {
    gridCells.forEach((cell) => {
        cell.textContent ='';
    });
    currentPlayer = 'X' ;
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
      const cellC = gridCells[C].textContent;
    
      if (cellA && cellA === cellB & cellB === cellC) {
        return cellA;
      }
     }
    return null;
}