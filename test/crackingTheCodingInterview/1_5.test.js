/*
One Away:
There are three types of edits that can be performed on strings:
insert a character, remove a character, or replace a character. Given two
strings, write a function to check if they are one edit (or zero edits) away.
EXAMPLE
pale, pIe -> true pales. pale -> true pale. bale -> true pale. bake -> false
*/

require('../bootstrap.test.js');

describe('1.5 - One Away', function() {
  c1q5.forEach(function(solution) {
    it(solution.name + ' ' +
      'should return OUTPUT\t' +
      'if input is INPUT', () => {
        const input = 'INPUT';
        const output = 'OUTPUT';
        solution(input).should.equal(output);
    });
  });
});
