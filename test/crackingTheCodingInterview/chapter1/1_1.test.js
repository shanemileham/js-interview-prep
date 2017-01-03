/*
Is Unique:
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?
*/

require('../bootstrap.test.js');

describe('1.1 - Is Unique', function() {
  c1q1.forEach(function(solution) {
    describe('Solution: ' + solution.name, function() {
      it(solution.name + ' ' +
        'should return true\t' +
        'if all characters are unique', () => {
        const string = 'qwerty';
        solution(string).should.be.true;
      });
      it(solution.name + ' ' +
        'should return false\t' +
        'if any character repeats', () => {
        const string = 'xqwertyuiopx';
        solution(string).should.be.false;
      });
    });
  });
});
