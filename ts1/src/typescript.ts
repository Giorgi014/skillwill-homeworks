const boardEl = document.getElementById("board") as HTMLDivElement;

const statusEl = document.getElementById("status") as HTMLDivElement;

const resetBtn = document.getElementById("reset") as HTMLButtonElement;

// const buttons = document.querySelectorAll("button") ;
// const buttons = document.querySelectorAll(".button") ;
// const buttons = document.querySelectorAll("#button") ;

let board: (string | null)[] = Array(9).fill(null);

let currentPlayer: "X" | "O" = "X";

let gameActive: boolean = true;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function renderBoard() {
  boardEl.innerHTML = "";
  board.forEach((value, index) => {
    const cell = document.createElement("div");

    cell.classList.add("cell");

    cell.textContent = value || "";
    cell.addEventListener("click", () => {
      if (cell.textContent === "X" || cell.textContent === "O") {
        statusEl.textContent = "This cell is already in use";
        return;
      } else {
        handleMove(index);
      }
    });

    boardEl.appendChild(cell);
  });
}

function handleMove(index: number) {
  if (!gameActive) {
    return;
  }

  board[index] = currentPlayer;

  if (checkWinner()) {
    statusEl.textContent = `Player ${currentPlayer} Wins`;
    gameActive = false;
  } else if (board.every(Boolean)) {
    statusEl.textContent = `Draw`;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusEl.textContent = `Player ${currentPlayer} turn`;
  }

  renderBoard();
}

function checkWinner() {
  return winningCombos.some((combo) => {
    const [a, b, c] = combo;
    return (
      board[a] === currentPlayer &&
      board[b] === currentPlayer &&
      board[c] === currentPlayer
    );
  });
}

function resetGame(){
  board = Array(9).fill(null);

}

resetBtn.addEventListener("click", () => {
  resetGame();
  statusEl.textContent = `Player X turn`;
  currentPlayer = "X"
  renderBoard()
})
renderBoard();


console.log(navigator.language) // ბრაუზერის ენა
console.log(navigator.platform) // რა სისტემაში მუშაობთ (ოპერაციული სისტემა - OS);
console.log(navigator.geolocation) //ლოკაციის ამოღება
console.log(navigator.doNotTrack) //

console.log(screen.height) 
console.log(screen.width)

console.log(screen.availHeight) 
console.log(screen.availWidth)

// available

// history.back();

// history.forward();
// history.go(3)