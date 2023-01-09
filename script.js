'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality

let currentScore = 0;

btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 4) + 1;
  // 2. Display dice number
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. check for rolled 1: if is true, switch to next player
  if (dice !== 1) {
    currentScore += dice;
  } else {
    currentScore = 0;
  }
  current0El.textContent = currentScore; // IMPORTANT change later
  console.log(currentScore);
});
