/*
Loop Detection:
Given a circular linked list, implement an algorithm that returns the node at
the beginning of the loop.
DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer
points to an earlier node, so as to make a loop in the linked list.
EXAMPLE
Input: A -> B -> C -> 0 -> E -> C [the same C as earlier]
Output: C
*/

require('../bootstrap.test.js');

describe('2.8 - Loop Detection', function() {
  c2q8.forEach(function(solution) {
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
