/*
Palindrome Permutation:
Given a string, write a function to check if it is a permutation of a
palindrome. A palindrome is a word or phrase that is the same forwards and
backwards. A permutation is a rearrangement of letters. The palindrome does not
need to be limited to just dictionary words.
*/

require('../bootstrap.test.js');

describe('1.4 - Palindrome Permutation', function() {
  c1q4.forEach(function(solution) {
    it(solution.name + ' ' +
      'should return OUTPUT\t' +
      'if input is INPUT', () => {
        const input = 'INPUT';
        const output = 'OUTPUT';
        solution(input).should.equal(output);
    });
  });
});
