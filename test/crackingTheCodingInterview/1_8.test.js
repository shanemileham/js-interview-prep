/*
Zero Matrix:
Write an algorithm such that if an element in an MxN matrix is 0,its entire row
and column are set to O.
*/

require('../bootstrap.test.js');

describe('1.8 - Zero Matrix', function() {
  c1q8.forEach(function(solution) {
    describe('Solution: ' + solution.name, function() {
      it(solution.name + ' ' +
        'should return OUTPUT\t' +
        'if input is INPUT', () => {
          const input = 'INPUT';
          const output = 'OUTPUT';
          solution(input).should.equal(output);
      });
    });
  });
});
