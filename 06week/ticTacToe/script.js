'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  document.querySelectorAll('[data-cell]').forEach((div) => {
    div.addEventListener('click', (e) => {
    if (!e.target.innerHTML) {
      e.target.innerHTML = toggle ? 'X' : 'O';
      toggle = !toggle;
    } else {
      alert('That space has been taken!');
    }
    });
  });
  let toggle =  true;
  let corARR = {};
  let Diagonal = () => {
    if (corARR[0] === corARR[4] && corARR[4] === corARR[8] && corARR[4] !== undefined || corARR[2] === corARR[4] && corARR[4] === corARR[6] && corARR[4] !== undefined) {
      return true;
    }
  };
  let Verical = () => {
    if (corARR[0] === corARR[3] && corARR[3] === corARR[6] && corARR[3] !== undefined || corARR[1] === corARR[4] && corARR[4] === corARR[7] && corARR[4] !== undefined || corARR[2] === corARR[5] && corARR[5] === corARR[8] && corARR[5] !== undefined) {
      return true;
    }
  };
 let Horizontal = () => {
   if (corARR[0] === corARR[1] && corARR[1] === corARR[2] && corARR[1] !== undefined || corARR[3] === corARR[4] && corARR[4] === corARR[5] && corARR[4] !== undefined || corARR[6] === corARR[7] && corARR[7] === corARR[8] && corARR[7] !== undefined) {
     return true;
   }
 };

 if (Diagonal()) {
         alert('You Won a Game of Tic Tac Toe Diagonally!');

       } else if (Horizontal()) {

         alert('You Won a Game of Tic Tac Toe Horizontally!');

       } else if (Vertical())

         alert('You Won a Game of Tic Tac Toe Vertically!');


  document.querySelector('button').addEventListener('click', (e) => {
      document.querySelectorAll('[data-cell]').forEach((div) => {
        div.innerHTML = '';
        corARR = {};
  });
});
});
