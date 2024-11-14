const gridCells = document.querySelectorAll('.gameGrid');


gridCells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = 'X';
        }
    });
});

const reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    gridCells.forEach((cell) => {
        cell.textContent ='';
    });
});