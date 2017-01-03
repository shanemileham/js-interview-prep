/*
Remove Dups:
Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

require('../bootstrap.test.js');

describe('2.1 - Remove Duplicates', function() {
  c2q1.forEach(function(solution) {
    describe('Solution: ' + solution.name, function() {
      before(function() {
        LinkedList.prototype.removeDuplicates = solution;
      });

      it(solution.name + ' ' +
        'should return []\t' +
        'if input is []', () => {
          const input = [];
          const output = '[]';

          let sll = new LinkedList();
          input.forEach(function(value) {
            sll.push(value);
          });

          let sllSet = sll.removeDuplicates();
          sllSet.toString().should.equal(output);
      });
      it(solution.name + ' ' +
        'should return [1]\t' +
        'if input is [1]', () => {
          const input = [1];
          const output = '[ 1 ]';

          let sll = new LinkedList();
          input.forEach(function(value) {
            sll.push(value);
          });

          sll.removeDuplicates().toString().should.equal(output);
        });
      it(solution.name + ' ' +
        'should return [1, 2, 3]\t' +
        'if input is [1, 2, 3]', () => {
          const input = [1, 2, 3];
          const output = '[ 1, 2, 3 ]';

          let sll = new LinkedList();
          input.forEach(function(value) {
            sll.push(value);
          });

          sll.removeDuplicates().toString().should.equal(output);
        });
      it(solution.name + ' ' +
        'should return [1, 2]\t' +
        'if input is [1, 2, 1]', () => {
          const input = [1, 2, 1];
          const output = '[ 1, 2 ]';

          let sll = new LinkedList();
          input.forEach(function(value) {
            sll.push(value);
          });

          sll.removeDuplicates().toString().should.equal(output);
        });
      it(solution.name + ' ' +
        'should return [1]\t' +
        'if input is [1, 1, 1]', () => {
          const input = [1, 1, 1];
          const output = '[ 1 ]';

          let sll = new LinkedList();
          input.forEach(function(value) {
            sll.push(value);
          });

          sll.removeDuplicates().toString().should.equal(output);
        });
    });
  });
});
