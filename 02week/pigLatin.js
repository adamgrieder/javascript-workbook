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

  var firstLetter = word[0];

  var vowelIndex = -1;

  if ((word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex) || vowelIndex === -1) {
    vowelIndex = word.indexOf('a');
  }

  if ((word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex) || vowelIndex === -1) {
    vowelIndex = word.indexOf('e');
  }

  if ((word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex) || vowelIndex === -1) {
    vowelIndex = word.indexOf('i');
  }

  if ((word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex) || vowelIndex === -1) {
    vowelIndex = word.indexOf('o');
  }

  if ((word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex) || vowelIndex === -1) {
    vowelIndex = word.indexOf('u');
  }

  if ((word.indexOf('y') > -1 && word.indexOf('y') < vowelIndex) || vowelIndex === -1) {
    vowelIndex = word.indexOf('y');
  }

  var firstPart = word.slice(0, vowelIndex);

  var restWord = word.slice(vowelIndex, word.length);

  if (vowelIndex === 0) {
    return word + 'yay';
  } else {
    return restWord + firstPart + 'ay';
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
