/*
Check Permutation
Given two strings, write a method to decide
if one is a permutation of the other.
*/

require('../bootstrap.test.js');

describe('1.2 - Check Permutation', function() {
  it('should return true if strings are identical', () => {
    let stringA = 'qwerty';
    let stringB = 'yqwetr';
    c1q2(stringA, stringB).should.be.true;
  });
  it('should return true if strings are permutations', () => {
    let stringA = 'qwerty';
    let stringB = 'qwerty';
    c1q2(stringA, stringB).should.be.true;
  });
  it('should return false if strings are different lengths', () => {
    let stringA = 'abcdef';
    let stringB = 'abcde';
    c1q2(stringA, stringB).should.be.false;
  });
  it('should return false' +
    'if strings have same letters but of different amounts', () => {
    let stringA = 'abcdeef';
    let stringB = 'abcdeff';
    c1q2(stringA, stringB).should.be.false;
  });
  it('should return false if strings are completely different', () => {
    let stringA = 'abcdef';
    let stringB = 'ghijkl';
    c1q2(stringA, stringB).should.be.false;
  });
});
