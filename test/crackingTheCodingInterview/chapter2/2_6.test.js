/*
Palindrome:
Implement a function to check if a linked list is a palindrome.
*/

require('../bootstrap.test.js');

describe('2.6 - Palindrome', function() {
  c2q6.forEach(function(solution) {
    describe('Solution: ' + solution.name, function() {
      before(function() {
        LinkedList.prototype.METHOD = solution;
      });

      it(solution.name + ' ' +
        'should return OUTPUT\t' +
        'if input is INPUT', () => {
      });
    });
  });
});
