/*
URLify:
Write a method to replace all spaces in a string with '%20' You may assume that
the string has sufficient space at the end to hold the additional characters,
and that you are given the "true" length of the string.
(Note: if implementing in Java, please use a character array so that you can
perform this operation in place.)
*/

module.exports = c1q3 = [];

c1q3.push(function c1q3a(input) {
  const output = input.replace(/ /g, '%20');
  return output;
});
