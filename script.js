'use strict';

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const dieElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0CurrentScore = document.getElementById("current--0");
const player1CurrentScore = document.getElementById("current--1");

// player switching funcion
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`)
    .textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//  Game starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
dieElement.classList.add("hidden");
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;


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
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`)
      .textContent = currentScore;
  } else {
    switchPlayer();
  }

});

btnHold.addEventListener("click", function() {
  //Move current balance to the player score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`)
    .textContent = scores[activePlayer];
  // Check if score >= 100
  if (scores[activePlayer] >= 10) {
    //adding visuals to a winner
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    // removing unneeded class
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    dieElement.classList.add("hidden");
  } else {
    //change player
    switchPlayer();
  }

});
