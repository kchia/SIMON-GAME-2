//create variables for buttons
//add event listeners to buttons
const startButton = document.querySelector('#start-button');
const greenButton = document.querySelector('#green');
const yellowButton = document.querySelector('#yellow');
const redButton = document.querySelector('#red');
const blueButton = document.querySelector('#blue');
const buttons = document.querySelectorAll('.game-buttons');
const restartButton = document.querySelector('#restart-button');
const counterDisplay = document.querySelector('#counter-display');
let colors = ['green', 'yellow', 'red', 'blue'];
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
let counter = 0;
let compSequence = [];
let playerSequence = [];
let gameWin;

function handleGameButtonClick() {}

restartButton.addEventListener('click', resetGame);
function resetGame() {
	counter = 0;
	counterDisplay.innerText = counter;
	compSequence = [];
	playerSequence = [];
}

startButton.addEventListener('click', startGame);
function startGame() {
	generateCompSeq();
}

function generateCompSeq() {
	// on = false;
	counter++;
	counterDisplay.innerText = counter;
	compSequence.push(colors[Math.floor(Math.random() * 4)]);
	console.log(compSequence);
	for (let i = 0; i < compSequence.length; i++) {
		setTimeout(() => {
			if (compSequence[i] === 'green') {
				green();
			}
			if (compSequence[i] === 'yellow') {
				yellow();
			}
			if (compSequence[i] === 'red') {
				red();
			}
			if (compSequence[i] === 'blue') {
				blue();
			}
		}, 550);
	}

	playerSequence = [];
	playerSeq();
}
function playerSeq() {
	greenButton.addEventListener('click', () => {
		green();
		playerTurn();
	});
	yellowButton.addEventListener('click', () => {
		yellow();
		playerTurn();
	});
	redButton.addEventListener('click', () => {
		red();
		playerTurn();
	});
	blueButton.addEventListener('click', () => {
		blue();
		playerTurn();
	});
}
function playerTurn() {
	playerSequence.push(this.id);
	console.log(playerSequence);
	compareColors();
	// buttons.forEach((button) => {
	// 	button.addEventListener('click', playerTurn);
}

function compareColors() {
	let compStr = compSequence.toString();
	let playerStr = playerSequence.toString();
	if (compStr === playerStr) {
		console.log('correct');
		generateCompSeq();
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
