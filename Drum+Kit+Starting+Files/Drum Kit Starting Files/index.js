var buttons = ["w", "a", "s", "d", "j", "k", "l"];
for (let i = 0; i < buttons.length; i++)
  [document.querySelector(`.${buttons[i]}`).addEventListener("click", clickMe)];

function clickMe() {
  alert("You clicked me");
}
