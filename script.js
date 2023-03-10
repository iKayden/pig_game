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

//Use global scope to initialize variables
let scores, currentScore, activePlayer, isPlaying;

//game restarting function
const gameInit = function() {
  //  Game starting conditions
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  player0CurrentScore.textContent = 0;
  player1CurrentScore.textContent = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  //remove winner class if there is one
  dieElement.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");

  player1.classList.remove("player--active");
  player0.classList.add("player--active");
};
gameInit();

// Rolling dice functionality
btnRoll.addEventListener("click", function() {
  if (isPlaying) {

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
  }

});

btnHold.addEventListener("click", function() {
  if (isPlaying) {

    //Move current balance to the player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`)
      .textContent = scores[activePlayer];
    // Check if score >= 100
    if (scores[activePlayer] >= 100) {
      //adding visuals to a winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      // removing unneeded class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      dieElement.classList.add("hidden");
      isPlaying = false;
    } else {
      //change player
      switchPlayer();
    }

  }
});

btnNew.addEventListener("click", gameInit);
