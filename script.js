// The random button pattern created by the computer that the player must follow
var computerChoices = [];
// The button pattern chosen by players
var playerChoices = [];

// Four button colors
var buttonColors = ["red", "blue", "green", "yellow"];

// Game mechanics
function game() {
	// Change the heading
	$("h1").text("Follow the pattern");

	// computer chooses a random number between 0 and 3
	var randomNumber = Math.floor(Math.random()*4);

	// ...which corresponds to a button
	randomChosenColor = buttonColors[randomNumber];

	// save the chosen button to the gamePattern array
	computerChoices.push(randomChosenColor);

	// then play the current button pattern
	for (var i = 0; i < computerChoices.length; i++) {
		// animate the chosen button...
		$("#" + computerChoices[i]).fadeIn(100).fadeOut(100).fadeIn(100);

		// ...and play the button's associated sound
		var audio = new Audio("sounds/" + computerChoices[i] + ".mp3");
		audio.play();

		// pause for a moment
		// setTimeout()
	}

}

// If any key is pressed, start the game, computer chooses a square
$(document).keypress(game);

// When it's the player's turn, the player chooses a square...
$(".square").on("click", function() {

	// Get the color of the button
	playerChoice = $(this).attr("id");

	// Record the choice to the playerChoicesArray
	playerChoices.push(playerChoice);

	// If playerChoices matches computerChoices, continue the game
	if (playerChoices == computerChoices) {
		// animate the chosen button...
		$("#" + playerChoice[i]).fadeIn(100).fadeOut(100).fadeIn(100);

		// ...and play the button's associated sound
		var audio = new Audio("sounds/" + playerChoice[i] + ".mp3");
		audio.play();

		// Then continue the game
		game();

	// ...otherwise GAME OVER	
	} else {
		$("h1").text("GAME OVER");
		$("html").css("background-color", "red");
		var wrong = new Audio("./sounds/wrong.mp3");
		wrong.play();
	}
})