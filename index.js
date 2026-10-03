let boxes = document.querySelectorAll('.cell');
let restartBtn = document.getElementById('restart');
let  status = document.getElementById('status');
let turn0 = true;

let winPatterns = [
    [0, 1, 2],
    
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        if (box.textContent !== '')   {
            return;
        }
        if (turn0)   {
            box.textContent = 'X';
            turn0 = false;
        } else 
            {
            box.textContent = 'O';
            turn0 = true;
        }

        checkwinner();
    });
});
function checkwinner() {
    for (let i = 0; i < winPatterns.length; i++) {

        let [a, b, c] = winPatterns[i];

        if (

            boxes[a].textContent &&
            boxes[a].textContent === boxes[b].textContent &&
            boxes[a].textContent === boxes[c].textContent
        ) {
            status.textContent = `${boxes[a].textContent} wins!`;

            boxes[a].classList.add('winner');
            boxes[b].classList.add('winner');
            boxes[c].classList.add('winner');
            
            return;

        }
    }

}
restartBtn.addEventListener('click', function () {
    boxes.forEach(function (box) {
        box.textContent = '';
        box.classList.remove('winner');
    });

    status.textContent = '';
    turn0 = true;
});