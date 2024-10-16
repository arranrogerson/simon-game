// VARIABLES
// The random button pattern created by the computer that the player must follow
var computerChoices = [];
// The button pattern chosen by players
var playerChoices = [];
// Four button colors
var buttonColors = ["red", "blue", "green", "yellow"];
// Level of the game
var level = 0;
// Has the game started switch
var started = false;

// GAME MECHANICS
// If any key is pressed, start the game, computer chooses a square
$(document).keypress(function() {
	if (!started) {
		// Change the heading
		$("#main-heading").text(level);
		nextSequence();
		started = true;
	}
});

// When it's the player's turn, and the player chooses a square...
$(".square").on("click", function() {

	// Get the color of the chosen square
	playerChoice = $(this).attr("id");

	// Record the choice to the playerChoicesArray, along with all their other choices for this level
	playerChoices.push(playerChoice);

	// Then animate the square
	animateSquare(playerChoice);

	// Play the sound
	playSound(playerChoice);

	// And see if the player got it right, if they didn't then game over
	checkAnswer(playerChoices.length - 1); // This will check the most recent selection
})


// FUNCTIONS
// Check to see if the player got their most recent choice right
function checkAnswer(level) {
	// If the player's choice matches computer's choice...
	if (playerChoices[level] === computerChoices[level]) {
		 
		// and the player has finished their entire sequence
		if (playerChoices.length === computerChoices.length) {

			// After a one second pause, start the next level
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}

		// if the player hasn't finished their sequence, let them keep choosing (do nothing)

	// ...otherwise, if the player's choice doesn't match the computer's choice, GAME OVER	
	} else {
		$("#main-heading").text("GAME OVER");
		var finalScore = level + 1;
		$("#final-score").text("You made it to level " + finalScore);
		$("html").css("background-color", "red");
		var wrong = new Audio("./sounds/wrong.mp3");
		wrong.play();
	}
}

// Start the next level
function nextSequence() {
	// reset the player's sequence
	playerChoices = [];
	// increase the level and reflect that in the heading
	level++;
	$("#main-heading").text(level);

	// computer chooses a random number between 0 and 3
	var randomNumber = Math.floor(Math.random()*4);

	// ...which corresponds to a button
	randomChosenColor = buttonColors[randomNumber];

	// save the chosen button to the gamePattern array
	computerChoices.push(randomChosenColor);

	// Animate the square
	animateSquare(randomChosenColor);

	// Play the sound
	playSound(randomChosenColor);

}

// Animate the chosen button
function animateSquare(choice) {
	$("#" + choice).fadeIn(100).fadeOut(100).fadeIn(100);
}

// Play the button's associated sound
function playSound(choice) {
	var audio = new Audio("sounds/" + choice + ".mp3");
	audio.play();
}
