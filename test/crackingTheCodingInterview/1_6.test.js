/*
String Compression:
Implement a method to perform basic string compression using the counts of
repeated characters. For example, the string aabcccccaaa would become a2b1c5a3.
If the "compressed" string would not become smaller than the original string,
your method should return the original string. You can assume the string has
only uppercase and lowercase letters (a - z).
*/

require('../bootstrap.test.js');

describe('1.6 - String Compression', function() {
  c1q6.forEach(function(solution) {
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
