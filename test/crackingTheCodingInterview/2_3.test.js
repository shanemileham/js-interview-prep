/*
Delete Middle Node:
Implement an algorithm to delete a node in the middle
(i.e., any node but the first and last node, not necessarily the exact middle)
of a singly linked list, given only access to that node.
EXAMPLE
Input: the node c from the linked list a->b->c->d->e->f
Result: nothing is returned, but the new linked list looks like a->b->d->e->f
*/

require('../bootstrap.test.js');

describe('2.3 - Delete Middle Node', function() {
  c2q3.forEach(function(solution) {
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
