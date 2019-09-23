// State Variables
let gameState = [];

const play = (id) => {
	let boardFull = true;
	const mySpan = document.getElementById("player");
	const td = document.getElementById(`${id}`);

	if (mySpan.innerText === "X") {
		mySpan.innerText = "O";
		td.innerText = "X";
		gameState[id] = "X";
	} else {
		mySpan.innerText = "X";
		td.innerText = "O";
		gameState[id] = "O";
	}

	let topLeft = gameState[0];
	let topMiddle = gameState[1];
	let topRight = gameState[2];
	let centerLeft = gameState[3];
	let centerMiddle = gameState[4];
	let centerRight = gameState[5];
	let bottomLeft = gameState[6];
	let bottomMiddle = gameState[7];
	let bottomRight = gameState[8];

	if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
		alert(`Winner is  ${topLeft}`);
	}

	if (
		centerMiddle !== undefined &&
		centerMiddle === centerLeft &&
		centerMiddle === centerRight
	) {
		alert(`Winner is  ${centerMiddle}`);
	}

	if (
		bottomLeft !== undefined &&
		bottomLeft === bottomMiddle &&
		bottomMiddle === bottomRight
	) {
		alert(`Winner is  ${bottomLeft}`);
	}

	if (
		topLeft !== undefined &&
		topLeft === centerLeft &&
		topLeft === bottomLeft
	) {
		alert(`Winner is  ${topLeft}`);
	}

	if (
		topMiddle !== undefined &&
		topMiddle === centerMiddle &&
		topMiddle === bottomMiddle
	) {
		alert(`Winner is  ${topMiddle}`);
	}

	if (
		topRight !== undefined &&
		topRight === centerRight &&
		topRight === bottomRight
	) {
		alert(`Winner is  ${topRight}`);
	}

	if (
		topRight !== undefined &&
		topRight === centerMiddle &&
		topRight === bottomLeft
	) {
		alert(`Winner is  ${topRight}`);
	}

	if (
		topLeft !== undefined &&
		topLeft === centerMiddle &&
		topLeft === bottomRight
	) {
		alert(`Winner is  ${topLeft}`);
	}

	for (let i = 0; i <= 8; i++) {
		if (gameState[i] === undefined) {
			boardFull = false;
		}
	}

	if (boardFull === true) {
		alert("CATS GAME");
	}
};
