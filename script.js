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
//keeps track of how many buttons comp has in sequence
let counter = 0;
//interval used to track current index of computerArray
let computerInterval = 0;
//Where 20 random numbers between 1-4 are stored
let computerArray = [];
//where one of the random numbers from computerArray are stored: 1 at a time
let compSequence = [];
//used to track the index of the compSequence
let currentColorNumber = 0;
//Where player's moves are stored
let playerSequence = [];
let compGo;
let playerGo;
let gameWin;

//reset game function
restartButton.addEventListener('click', resetGame);
function resetGame() {
	wrongMessage.innerText = `LET'S PLAY`;
	wrongMessage.style.fontSize = '3em';
	counter = 0;
	counterDisplay.innerText = counter;
	currentColorNumber = 0;
	computerInterval = 0;
	computerArray = [];
	compSequence = [];
	playerSequence = [];
}
//start game function
startButton.addEventListener('click', startGame);
function startGame() {
	compGo = true;

	generateCompArray();
}
//generate 20 random moves
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

	console.log(compSequence);
	playCompAnimation();
}

//sets the animation for each number in compSequence
function assignColorAnimation(move) {
	if (move === 1) {
		green();
	}
	if (move === 2) {
		yellow();
	}
	if (move === 3) {
		red();
	}
	if (move === 4) {
		blue();
	}
	playerGo = true;
	compGo = false;
}
//need a function that plays the interval from the beginning each time with a timeout between indices.
function playCompAnimation() {
	compGo = true;
	for (let i = 0; i < compSequence.length; i++) {
		setTimeout(function () {
			assignColorAnimation(compSequence[i]);
		}, (i + 1) * 1000);
	}
	playerSequence = [];
}

//each button and their function when clicked by player
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
const wrongMessage = document.querySelector('h2');
//compare the computer's and player's moves arrays
function compareColors() {
	let compStr = compSequence.toString();
	let playerStr = playerSequence.toString();
	if (compStr === playerStr && counter !== 20) {
		wrongMessage.innerText = 'CORRECT!';
		setTimeout(function () {
			wrongMessage.innerText = `LET'S PLAY`;
		}, 800);
		console.log('correct');
		storeCompMoves();
	} else if (compStr !== playerStr && compStr.length === playerStr.length) {
		wrongMessage.innerText = 'WRONG!';
		setTimeout(function () {
			wrongMessage.innerText = `LET'S PLAY`;
		}, 1500);
		playCompAnimation();
	} else if (compStr === playerStr && counter === 20) {
		wrongMessage.innerText = 'WINNER!';
		wrongMessage.style.fontSize = '5em';
		setTimeout(function () {
			resetGame();
		}, 2000);
	}
}

//button glowing/audio playing functions

function green() {
	greenButton.classList.add('glow');
	setTimeout(function () {
		greenButton.classList.remove('glow');
	}, 500);
	greenAudio.play();
}

function yellow() {
	yellowButton.classList.add('glow');
	setTimeout(function () {
		yellowButton.classList.remove('glow');
	}, 500);
	yellowAudio.play();
}
function red() {
	redButton.classList.add('glow');
	setTimeout(function () {
		redButton.classList.remove('glow');
	}, 500);
	redAudio.play();
}
function blue() {
	blueButton.classList.add('glow');
	setTimeout(function () {
		blueButton.classList.remove('glow');
	}, 500);
	blueAudio.play();
}
//function for a replay sequence button
const replayButton = document.querySelector('#replay-button');
replayButton.addEventListener('click', replayCompSequence);

function replayCompSequence() {
	replayButton.style.background = 'red';
	setTimeout(function () {
		replayButton.style.background = 'none';
	}, 500);
	playCompAnimation();
}
