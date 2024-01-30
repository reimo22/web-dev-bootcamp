var buttons = ["w", "a", "s", "d", "j", "k", "l"];
for (let i = 0; i < buttons.length; i++)
  [document.querySelector(`.${buttons[i]}`).addEventListener("click", clickMe)];

  var audio = new Audio("./sounds/tom-1.mp3");

function clickMe() {
  audio.play();
}


