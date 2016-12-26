/*
Check Permutation
Given two strings, write a method to decide
if one is a permutation of the other.
*/

require('../bootstrap.test.js');

describe('1.2 - Check Permutation', function() {
  c1q2.forEach(function(solution) {
    it(solution.name + ' ' +
      'should return true\t' +
      'if strings are identical', () => {
      const stringA = 'qwerty';
      const stringB = 'yqwetr';
      solution(stringA, stringB).should.be.true;
    });
    it(solution.name + ' ' +
      'should return true\t' +
      'if strings are permutations', () => {
      const stringA = 'qwerty';
      const stringB = 'qwerty';
      solution(stringA, stringB).should.be.true;
    });
    it(solution.name + ' ' +
      'should return false\t' +
      'if strings are different lengths', () => {
      const stringA = 'abcdef';
      const stringB = 'abcde';
      solution(stringA, stringB).should.be.false;
    });
    it(solution.name + ' ' +
      'should return false\t' +
      'if strings have same letters but of different amounts', () => {
      const stringA = 'abcdeef';
      const stringB = 'abcdeff';
      solution(stringA, stringB).should.be.false;
    });
    it(solution.name + ' ' +
      'should return false\t' +
      'if strings are completely different', () => {
      const stringA = 'abcdef';
      const stringB = 'ghijkl';
      solution(stringA, stringB).should.be.false;
    });
  });
});
