//create variables for buttons
//add event listeners to buttons
const startButton = document.querySelector('#start-button');
const greenButton = document.querySelector('#green-button');
const yellowButton = document.querySelector('#yellow-button');
const redButton = document.querySelector('#red-button');
const blueButton = document.querySelector('#blue-button');
// const buttons = document.querySelectorAll('.game-buttons');
const restartButton = document.querySelector('#restart-button');
const counterDisplay = document.querySelector('#counter-display');
let colors = [greenButton, yellowButton, redButton, blueButton];
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
	compSequence.push(buttons[Math.floor(Math.random() * 4)]);
	console.log(compSequence);
	playerSeq();
}

function playerSeq(event) {
	// for (let i = 0; i < buttons.length; i++) {
	// 	buttons[i].addEventListener('click', playerTurn);
	// }
	// function playerTurn() {
	// 	playerSequence.push(event.target);
	// 	console.log(playerSequence);
	// }
}

//create the computer's random sequencer and store it to an array
//create an array for the user's sequence to be stored
//write a function to compare the sequences
//start game function
