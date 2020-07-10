//create variables for buttons
//add event listeners to buttons
const gameButtons = document.querySelectorAll('.game-buttons');
gameButtons.forEach((button) => {
	document.addEventListener('click', startGame);
});

var game = {
	buttons: gameButtons,
	compSequence: [],
	playerSequence: [],
	counter: 0,
	counterDisplay: document.querySelector('.counter-display'),
};

function handleGameButtonClick() {}

function resetGame() {}

function generateCompSeq() {
	game.counter++;
	game.counterDisplay.innerText = game.counter;
	game.compSequence.push(game.buttons[Math.floor(Math.random() * 4)]);
	console.log(game.compSequence);
}

function startGame() {
	resetGame();
	generateCompSeq();
}

function addPlayerSeq() {}

//create the computer's random sequencer and store it to an array
//create an array for the user's sequence to be stored
//write a function to compare the sequences
//start game function
