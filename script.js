const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const cell4 = document.getElementById("cell4");
const cell5 = document.getElementById("cell5");
const cell6 = document.getElementById("cell6");
const cell7 = document.getElementById("cell7");
const cell8 = document.getElementById("cell8");
const cell9 = document.getElementById("cell9");

const cellX1 = document.getElementById("cellX1");
const cellX2 = document.getElementById("cellX2");
const cellX3 = document.getElementById("cellX3");
const cellX4 = document.getElementById("cellX4");
const cellX5 = document.getElementById("cellX5");
const cellX6 = document.getElementById("cellX6");
const cellX7 = document.getElementById("cellX7");
const cellX8 = document.getElementById("cellX8");
const cellX9 = document.getElementById("cellX9");

const cellO1 = document.getElementById("cellO1");
const cellO2 = document.getElementById("cellO2");
const cellO3 = document.getElementById("cellO3");
const cellO4 = document.getElementById("cellO4");
const cellO5 = document.getElementById("cellO5");
const cellO6 = document.getElementById("cellO6");
const cellO7 = document.getElementById("cellO7");
const cellO8 = document.getElementById("cellO8");
const cellO9 = document.getElementById("cellO9");

cellX1.style.visibility = "hidden";
cellX2.style.visibility = "hidden";
cellX3.style.visibility = "hidden";
cellX4.style.visibility = "hidden";
cellX5.style.visibility = "hidden";
cellX6.style.visibility = "hidden";
cellX7.style.visibility = "hidden";
cellX8.style.visibility = "hidden";
cellX9.style.visibility = "hidden";

cellO1.style.visibility = "hidden";
cellO2.style.visibility = "hidden";
cellO3.style.visibility = "hidden";
cellO4.style.visibility = "hidden";
cellO5.style.visibility = "hidden";
cellO6.style.visibility = "hidden";
cellO7.style.visibility = "hidden";
cellO8.style.visibility = "hidden";
cellO9.style.visibility = "hidden";

const playerTxt = document.getElementById("playerTxt");
const winner = document.getElementById("winner");
const winnerTxt = document.getElementById("winnerTxt");

playerTxt.innerHTML = "PLAYER X";
playerTxt.style.color = "rgb(218, 80, 55)";
winner.style.visibility = "hidden";

var currentPlayer = 1;

var cell1Content = 0;
var cell2Content = 0;
var cell3Content = 0;
var cell4Content = 0;
var cell5Content = 0;
var cell6Content = 0;
var cell7Content = 0;
var cell8Content = 0;
var cell9Content = 0;

cell1.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX1.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER O";
		cell1Content = 1;
		console.log(cell1Content);
	} else if (currentPlayer == 2) {
		cellO1.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER X";
		cell1Content = 2;
	}
	hasWinner();
});

cell2.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX2.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER O";
		cell2Content = 1;
		console.log(cell2Content);
	} else if (currentPlayer == 2) {
		cellO2.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER X";
		cell2Content = 2;
	}
	hasWinner();
});

cell3.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX3.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER O";
		cell3Content = 1;
		console.log(cell2Content);
	} else if (currentPlayer == 2) {
		cellO3.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER X";
		cell3Content = 2;
	}
	hasWinner();
});

cell4.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX4.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER O";
		cell4Content = 1;
	} else if (currentPlayer == 2) {
		cellO4.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER X";
		cell4Content = 2;
	}
	hasWinner();
});

cell5.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX5.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER O";
		cell5Content = 1;
	} else if (currentPlayer == 2) {
		cellO5.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER X";
		cell5Content = 2;
	}
	hasWinner();
});

cell6.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX6.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER O";
		cell6Content = 1;
	} else if (currentPlayer == 2) {
		cellO6.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER X";
		cell6Content = 2;
	}
	hasWinner();
});

cell7.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX7.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER O";
		cell7Content = 1;
	} else if (currentPlayer == 2) {
		cellO7.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER X";
		cell7Content = 2;
	}
	hasWinner();
});

cell8.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX8.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER O";
		cell8Content = 1;
	} else if (currentPlayer == 2) {
		cellO8.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER X";
		cell8Content = 2;
	}
	hasWinner();
});

cell9.addEventListener("click", function () {
	if (currentPlayer == 1) {
		cellX9.style.visibility = "visible";
		currentPlayer = 2;
		playerTxt.innerHTML = "PLAYER O";
		cell9Content = 1;
	} else if (currentPlayer == 2) {
		cellO9.style.visibility = "visible";
		currentPlayer = 1;
		playerTxt.innerHTML = "PLAYER X";
		cell9Content = 2;
	}
	hasWinner();
});

function hasWinner() {
	if (
		(cell1Content == 1 && cell2Content == 1 && cell3Content == 1) ||
		(cell4Content == 1 && cell5Content == 1 && cell6Content == 1) ||
		(cell7Content == 1 && cell8Content == 1 && cell9Content == 1) ||
		(cell1Content == 1 && cell4Content == 1 && cell7Content == 1) ||
		(cell2Content == 1 && cell5Content == 1 && cell8Content == 1) ||
		(cell3Content == 1 && cell6Content == 1 && cell9Content == 1) ||
		(cell1Content == 1 && cell5Content == 1 && cell9Content == 1) ||
		(cell3Content == 1 && cell5Content == 1 && cell7Content == 1)
	) {
		winner.style.visibility = "visible";
		winnerTxt.innerHTML = "PLAYER X";
	} else if (
		(cell1Content == 2 && cell2Content == 2 && cell3Content == 2) ||
		(cell4Content == 2 && cell5Content == 2 && cell6Content == 2) ||
		(cell7Content == 2 && cell8Content == 2 && cell9Content == 2) ||
		(cell1Content == 2 && cell4Content == 2 && cell7Content == 2) ||
		(cell2Content == 2 && cell5Content == 2 && cell8Content == 2) ||
		(cell3Content == 2 && cell6Content == 2 && cell9Content == 2) ||
		(cell1Content == 2 && cell5Content == 2 && cell9Content == 2) ||
		(cell3Content == 2 && cell5Content == 2 && cell7Content == 2)
	) {
		winner.style.visibility = "visible";
		winnerTxt.innerHTML = "PLAYER O";
	}
}
