/*
Check Permutation
Given two strings, write a method to decide
if one is a permutation of the other.
*/

require('../bootstrap.test.js');

describe('1.2 - Check Permutation', function(
  solutions = [c1q2a, c1q2b]) {
  solutions.forEach(function(solution) {
    it(solution.name + ' ' +
      'should return true\t' +
      'if strings are identical', () => {
      let stringA = 'qwerty';
      let stringB = 'yqwetr';
      solution(stringA, stringB).should.be.true;
    });
    it(solution.name + ' ' +
      'should return true\t' +
      'if strings are permutations', () => {
      let stringA = 'qwerty';
      let stringB = 'qwerty';
      solution(stringA, stringB).should.be.true;
    });
    it(solution.name + ' ' +
      'should return false\t' +
      'if strings are different lengths', () => {
      let stringA = 'abcdef';
      let stringB = 'abcde';
      solution(stringA, stringB).should.be.false;
    });
    it(solution.name + ' ' +
      'should return false\t' +
      'if strings have same letters but of different amounts', () => {
      let stringA = 'abcdeef';
      let stringB = 'abcdeff';
      solution(stringA, stringB).should.be.false;
    });
    it(solution.name + ' ' +
      'should return false\t' +
      'if strings are completely different', () => {
      let stringA = 'abcdef';
      let stringB = 'ghijkl';
      solution(stringA, stringB).should.be.false;
    });
  });
});
