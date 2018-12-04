// This variable stores the "Pick a Color" button.
const button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button.
const mysteryButton = document.getElementById('next-button');

// This random number function produces a random number up to the limit of "num."
function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

// This random color function applies the random number function to an RGB color code with a limit of 255. Next, this function changes the background color of an event target.
function colorChange() {
  const randomColor = 'rgb(' + randomNumber(256) + ',' + randomNumber(256) + ',' + randomNumber(256) + ')';
  event.target.style.backgroundColor = randomColor;
}

// The following code applies the colorChange() function to events on the each button target.
button.onclick = colorChange;
mysteryButton.onwheel = colorChange;