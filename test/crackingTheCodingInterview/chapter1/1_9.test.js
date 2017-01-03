/*
String Rotation:
Assume you have amethod isSubstring which checks ifone word is asubstring of
another. Given two strings, 51 and 52, write code to check if 52 is a rotation
of 51 using only one call to isSubstring (e.g.,"waterbottle"is a rotation
of"erbottlewat").
*/

require('../bootstrap.test.js');

describe('1.9 - String Rotation', function() {
  c1q9.forEach(function(solution) {
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
