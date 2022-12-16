'use strict';


const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const dieElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//  Game starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
dieElement.classList.add("hidden");

// Rolling dice functionality
