"use strict";
const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const resetEl = document.getElementById("reset");
let board = Array(9).fill(null);
let currentPlayer = "X";
let gameActive = true;
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
const RenderBorder = () => {
    boardEl.innerHTML = "";
    board.forEach((value, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = value || "";
        cell.addEventListener("click", () => { });
    });
};
//# sourceMappingURL=typescript.js.map