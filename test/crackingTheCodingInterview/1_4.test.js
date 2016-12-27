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
    /*
    TRUE
    123
    123122
    FALSE
    12321
    123321
    21321
    321321
    */
    it(solution.name + ' ' +
      'should return false\t' +
      'if input is 123', () => {
        const input = '123';
        solution(input).should.be.false;
    });
    it(solution.name + ' ' +
      'should return false\t' +
      'if input is 123122', () => {
        const input = '123122';
        solution(input).should.be.false;
    });
    it(solution.name + ' ' +
      'should return true\t' +
      'if input is 12321', () => {
        const input = '12321';
        solution(input).should.be.true;
    });
    it(solution.name + ' ' +
      'should return true\t' +
      'if input is 123321', () => {
        const input = '123321';
        solution(input).should.be.true;
    });
    it(solution.name + ' ' +
      'should return true\t' +
      'if input is 21321', () => {
        const input = '21321';
        solution(input).should.be.true;
    });
    it(solution.name + ' ' +
      'should return true\t' +
      'if input is 321321', () => {
        const input = '321321';
        solution(input).should.be.true;
    });
  });
});
