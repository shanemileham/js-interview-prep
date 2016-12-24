/*
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?
*/

require('../bootstrap.test.js');

describe('1.1 - Is Unique', function() {
  it('should return true if all characters are unique', () => {
    let string = 'qwerty';
    c1q1(string).should.be.true;
  });
  it('should return false if any character repeats', () => {
    let string = 'xqwertyuiopx';
    c1q1(string).should.be.false;
  });
});
