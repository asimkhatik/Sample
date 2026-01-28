let currPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
const statusText = document.getElementById("status");
let gameActive = true;

// Sound Effects
const win = new Audio('assets/sounds/click.mp3');
const tap = new Audio('assets/sounds/click.mp3');
tap.playbackRate = 3;
const crackers = new Audio('assets/sounds/crackers.mp3')


// 'X' or 'Y' Choice

// function selCurrPlayer(e) {
//     currPlayer = e.innerHTML;
//     console.log(currPlayer);
// }


// Game Logic
const cells = document.querySelectorAll('.cells');

cells.forEach(cell => {
    cell.addEventListener("click", (e) => {
        let index = cell.getAttribute("id");
        tap.play();
        board[index] = currPlayer;
        e.target.textContent = currPlayer;
        checkResult();
    })
})


// Check Winner 
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
function checkResult() {
    let roundWon = false;

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            crackers.play();
            // // window.confirm(`Player ${currPlayer} wins!`);
            // if(window.confirm(statusText.textContent).valueOf()){
            //     restart();
            // } 
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `Player ${currPlayer} wins!`;
        gameActive = false;
        return;
    }

    //Check Draw 
    if (!board.includes("")) {
        statusText.textContent = `It's a Draw...!`;
        gameActive = false;
        // window.confirm(statusText.textContent);
        return;
    }

    currPlayer = currPlayer == "X" ? "O" : "X";
    statusText.textContent = `Player ${currPlayer}'s turn`;
}


// Restart the Game
const btn = document.getElementById('restart');

function restart() {
    btn.addEventListener("click", () => {
        board.fill("");
        cells.forEach(cell => {
            cell.textContent = "";
        })
        gameActive = true;
        currPlayer = "X";
        statusText.textContent = "Player X's turn";
        crackers.pause();
    })
}