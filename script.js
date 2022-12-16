'use strict';


const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const dieElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0CurrentScore = document.getElementById("current--0");
const player1CurrentScore = document.getElementById("current--1");

//  Game starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
dieElement.classList.add("hidden");

let currentScoreP0 = 0;
let currentScoreP1 = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function() {
  //1. Generate a random die roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the die
  dieElement.classList.remove('hidden');
  dieElement.src = `dice-${dice}.png`;
  // 3. Check for rolled 1: if true, switch to another player
  if (dice !== 1) {
    // store to score
    player0CurrentScore.textContent = currentScoreP0 += dice;
  } else { // switch to another player and reset current player score
    player0CurrentScore.textContent = currentScoreP0 = 0;
  }

});
