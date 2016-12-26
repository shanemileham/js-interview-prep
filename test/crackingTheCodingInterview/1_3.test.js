/*
URLify:
Write a method to replace all spaces in a string with '%20' You may assume that
the string has sufficient space at the end to hold the additional characters,
and that you are given the "true" length of the string.
(Note: if implementing in Java, please use a character array so that you can
perform this operation in place.)
*/

require('../bootstrap.test.js');

describe('1.3 - URLify', function() {
  c1q3.forEach(function(solution) {
    it(solution.name + ' ' +
      'should return \'\'\t' +
      'if the string is empty', () => {
      const stringA = '';
      const stringB = '';
      solution(stringA).should.equal(stringB);
    });
    it(solution.name + ' ' +
      'should return the string ' +
      'if the string has no spaces', () => {
      const stringA = 'qwerty';
      const stringB = 'qwerty';
      solution(stringA).should.equal(stringB);
    });
    it(solution.name + ' ' +
      'should not contain any spaces', () => {
      const stringA = 'asdf';
      const stringB = 'qwe rty  ';
      const stringC = 'a b c    ';
      solution(stringA).indexOf(' ').should.equal(-1);
      solution(stringB).indexOf(' ').should.equal(-1);
      solution(stringC).indexOf(' ').should.equal(-1);
    });
    it(solution.name + ' ' +
      'should have expected output', () => {
      const stringA = 'asdf';
      const stringB = 'qwe rty  ';
      const stringC = 'a b c    ';
      solution(stringA).should.equal('asdf');
      solution(stringB).should.equal('qwe%20rty');
      solution(stringC).should.equal('a%20b%20c');
    });
  });
});
