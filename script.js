var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
	var randomNumber = Math.floor(Math.random()*4);

	randomChosenColor = buttonColors[randomNumber];

	gamePattern.push(randomChosenColor);

	$("." + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

	var audio = new Audio("./sounds/" + randomChosenColor + ".mp3");
	audio.play();
}

nextSequence();