/*
Intersection:
Given two (singly) linked lists, determine if the two lists intersect. Return
the inter- secting node. Note that the intersection is defined based on
reference, not value. That is, if the kth node of the first linked list is the
exact same node (by reference) as the jth node of the second linked list, then
they are intersecting.
*/

require('../bootstrap.test.js');

describe('2.7 - Intersection', function() {
  c2q7.forEach(function(solution) {
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
