/*
Return Kth to Last:
Implement an algorithm to find the kth to last element of a singly linked list.
*/

require('../bootstrap.test.js');

describe('2.2 - Return Kth to Last', function() {
  c2q2.forEach(function(solution) {
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
