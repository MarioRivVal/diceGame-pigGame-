'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const buttonsEl = document.querySelectorAll('.btn');
const buttonRol = document.querySelector('.btn--roll');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

buttonRol.addEventListener('click', function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);
});
