/*
Rotate Matrix:
Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. (an you do this in
place?
*/

require('../bootstrap.test.js');

describe('1.7 - Rotate Matrix', function() {
  c1q7.forEach(function(solution) {
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
