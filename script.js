//create variables for buttons
//add event listeners to buttons
//audio courtesy of freecodecamp
let greenAudio = new Audio(
	'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'
);
let redAudio = new Audio(
	'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'
);
let yellowAudio = new Audio(
	'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'
);
let blueAudio = new Audio(
	'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'
);
const startButton = document.querySelector('#start-button');
const greenButton = document.querySelector('#green');
const yellowButton = document.querySelector('#yellow');
const redButton = document.querySelector('#red');
const blueButton = document.querySelector('#blue');
const buttons = document.querySelectorAll('.game-buttons');
const restartButton = document.querySelector('#restart-button');
const counterDisplay = document.querySelector('#counter-display');
let counter = 0;
let computerInterval = 0;
let computerArray = [];
let compSequence = [];
let playerSequence = [];
let currentColorNumber = 0;
let compGo;
let playerGo;
let gameWin;

restartButton.addEventListener('click', resetGame);
function resetGame() {
	counter = 0;
	counterDisplay.innerText = counter;
	currentColorNumber = 0;
	computerInterval = 0;
	computerArray = [];
	compSequence = [];
	playerSequence = [];
}

startButton.addEventListener('click', startGame);
function startGame() {
	compGo = true;

	generateCompArray();
}

function generateCompArray() {
	for (let i = 0; i < 20; i++) {
		computerArray.push(Math.floor(Math.random() * 4 + 1));
	}
	console.log(computerArray);
	storeCompMoves();
}
//push one item from the computerArray into the compSequence at a time
function storeCompMoves() {
	counter++;
	counterDisplay.innerText = counter;
	if (computerInterval <= 19) {
		compSequence.push(computerArray[computerInterval]);
		computerInterval++;
	}
	if (compGo === true) {
		if (compSequence[currentColorNumber] === 1) {
			green();
		}
		if (compSequence[currentColorNumber] === 2) {
			yellow();
		}
		if (compSequence[currentColorNumber] === 3) {
			red();
		}
		if (compSequence[currentColorNumber] === 4) {
			blue();
		}

		currentColorNumber++;
		console.log(compSequence);
	}
}
//select which color function to run based on number in compSequence

greenButton.addEventListener('click', function () {
	playerSequence.push(1);
	green();
	compareColors();
	console.log(playerSequence);
});
yellowButton.addEventListener('click', function () {
	playerSequence.push(2);
	yellow();
	compareColors();
	console.log(playerSequence);
});
redButton.addEventListener('click', function () {
	playerSequence.push(3);
	red();
	compareColors();
	console.log(playerSequence);
});
blueButton.addEventListener('click', function () {
	playerSequence.push(4);
	blue();
	compareColors();
	console.log(playerSequence);
});

function compareColors() {
	let compStr = compSequence.toString();
	let playerStr = playerSequence.toString();
	if (compStr === playerStr) {
		console.log('correct');
		storeCompMoves();
	}
}

//create the computer's random sequencer and store it to an array
//create an array for the user's sequence to be stored
//write a function to compare the sequences
//start game function

//button glowing/audio playing functions

function green() {
	greenButton.classList.add('glow');
	setTimeout(function () {
		greenButton.classList.remove('glow');
	}, 550);
	greenAudio.play();
}

function yellow() {
	yellowButton.classList.add('glow');
	setTimeout(function () {
		yellowButton.classList.remove('glow');
	}, 550);
	yellowAudio.play();
}
function red() {
	redButton.classList.add('glow');
	setTimeout(function () {
		redButton.classList.remove('glow');
	}, 550);
	redAudio.play();
}
function blue() {
	blueButton.classList.add('glow');
	setTimeout(function () {
		blueButton.classList.remove('glow');
	}, 550);
	blueAudio.play();
}

// function generateCompSeq() {
// 	// on = false;
// 	counter++;
// 	counterDisplay.innerText = counter;
// 	compSequence.push(colors[Math.floor(Math.random() * 4)]);
// 	console.log(compSequence);
// 	for (let i = 0; i < compSequence.length; i++) {
// 		setTimeout(() => {
// 			if (compSequence[i] === 'green') {
// 				green();
// 			}
// 			if (compSequence[i] === 'yellow') {
// 				yellow();
// 			}
// 			if (compSequence[i] === 'red') {
// 				red();
// 			}
// 			if (compSequence[i] === 'blue') {
// 				blue();
// 			}
// 		}, 550);
// 	}

// 	playerSequence = [];
// 	playerSeq();
// }
