// Denotes the four button colors
var buttonColors = ["red", "blue", "green", "yellow"];

// Keeps track of the randomly chosen colors
var gamePattern = [];

var level = 0;
var gameStarted = false;

// Play sound function, takes <fileName> as input
function playSound(name) {
  var audio = new Audio(`./sounds/${name}.mp3`);
  audio.play();
}

// Array for user clicks
var userClickedPattern = [];

$(".btn").click(function () {
  if (gameStarted == true) {
    // Push most recent click color into array
    userClickedPattern.push(this.id);

    // Calls check answer function
    checkAnswer(userClickedPattern.length - 1);

    // Call play sound function
    playSound(this.id);

    // Animates click
    $(this).addClass("pressed");
    setTimeout(() => {
      $(this).removeClass("pressed");
    }, "100");
  }
});

// Generate next random color, animate and play sound
function nextSequence() {

    // Generate random color and push it into array
    var randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColor);

    // Animation and sound for latest random color
    $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
    playSound(randomChosenColor);

    // Increments level, updates level header
    level++;
    $("#level-title").html(`Level ${level}`);

    // Resets click pattern
    userClickedPattern = [];
}

// Starts the game upon pressing any key, updates the 
$(document).keydown(function () {
  if (gameStarted == false) {
    nextSequence();
    gameStarted = true;
    $("#level-title").text(`Level ${level}`);
  }
});

// Check Answer
function checkAnswer(currentLevel) {
    // If the player got every answer right so far
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    // AND the user reached the current level, it triggers the next sequence
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, "1000");
    }
  } else {
    // Game over sound and animation
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, "200");

    $("#level-title").html("Game Over, Press Any Key to Restart");
    startOver();
  }
}

// Resets game to initial values
function startOver() {
  gameStarted = false;
  gamePattern = [];
  level = 0;
}
