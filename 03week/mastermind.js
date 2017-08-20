'use strict';
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let board = [];
let solution = 'abcd';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


function printBoard() {
    for (let i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}

function generateSolution() {
    for (let i = 0; i < 4; i++) {
        var randomIndex = getRandomInt(0, letters.length);
        solution += letters[randomIndex];
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  var rl = 0;
  var clp = 0;
  var solarr = solution.split('');
  var guesarr = guess.split('');

  for (var i = 0; i < solarr.length; i++) {

      if (solarr[i] === guesarr[i]) {
       clp++;
       solarr[i] = null; }
    }
  for (var i = 0; i < solarr.length; i++) {
      var dstIndex = solarr.indexOf(guesarr[i]);
      if (dstIndex > -1) {
      rl++;
      solarr[dstIndex] = null;
      }
      }
      return clp + '-' + rl;
        }

function mastermind(guess) {
  solution = 'abcd';
     if (guess === solution) {
       return ('You guessed it!');
     } else if (board.length === 10) {
       return ('Good Attempt! Try again?')
     } else {
       var hint = generateHint(solution, guess);
       board.push(hint + ': ' + guess);
       return 'Take Another Shot at it!'
     }
    }



function getPrompt() {
    rl.question('guess: ', (guess) => {
        printBoard();
        getPrompt();
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#mastermind()', function() {
        it('should register a guess and generate hints', function() {
            solution = 'abcd';
            mastermind('aabb');
            assert.equal(board.length, 1);
        });
        it('should be able to detect a win', function() {
            assert.equal(mastermind(solution), 'You guessed it!');
        });
    });

    describe('#generateHint()', function() {
        it('should generate hints', function() {
            assert.equal(generateHint('abcd', 'abdc'), '2-2');
        });
        it('should generate hints if solution has duplicates', function() {
            assert.equal(generateHint('abcd', 'aabb'), '1-1');
        });

    });

} else {

    generateSolution();
    getPrompt();
}
