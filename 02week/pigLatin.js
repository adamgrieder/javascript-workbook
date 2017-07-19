'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//code//
function pigLatin(word) {
  word = word.toLowerCase();

  var ftLetter = word[0];

  var vowel = -1;

  if ((word.indexOf('a') > -1 && word.indexOf('a') < vowel) || vowel === -1) {
    vowel = word.indexOf('a');
  }

  if ((word.indexOf('e') > -1 && word.indexOf('e') < vowel) || vowel === -1) {
    vowel = word.indexOf('e');
  }

  if ((word.indexOf('i') > -1 && word.indexOf('i') < vowel) || vowel === -1) {
    vowel = word.indexOf('i');
  }

  if ((word.indexOf('o') > -1 && word.indexOf('o') < vowel) || vowel === -1) {
    vowel = word.indexOf('o');
  }

  if ((word.indexOf('u') > -1 && word.indexOf('u') < vowel) || vowel === -1) {
    vowel = word.indexOf('u');
  }

  if ((word.indexOf('y') > -1 && word.indexOf('y') < vowel) || vowel === -1) {
    vowel = word.indexOf('y');
  }

  var ftPart = word.slice(0, vowel);

  var lastWord = word.slice(vowel, word.length);

  if (vowel === 0) {
    return word + 'yay';
  } else {
    return lastWord + ftPart + 'ay';
  }

}

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
