/*
Sum Lists: You have two numbers represented by a linked list, where each node
contains a single digit. The digits are stored in reverse order, such that the
1's digit is at the head of the list. Write a function that adds the two numbers
and returns the sum as a linked list.
EXAMPLE
Input: (7-) 1 -) 6) + (5 -) 9 -) 2).That is,617 + 295.
Output: 2 -) 1 -) 9.That is, 912.
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.
EXAMPLE
Input: (6 -) 1 -) 7) + (2 -) 9 -) 5).That is,617 + 295.
Output: 9 -) 1 -) 2.That is, 912.
*/

require('../bootstrap.test.js');

describe('2.5 - Sum Lists', function() {
  c2q5.forEach(function(solution) {
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
