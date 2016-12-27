/**
@file
URLify:
Write a method to replace all spaces in a string with '%20' You may assume that
the string has sufficient space at the end to hold the additional characters,
and that you are given the "true" length of the string.
(Note: if implementing in Java, please use a character array so that you can
perform this operation in place.)
@author Shane Mileham
*/

module.exports = c1q3 = [];

/** Replace - Replaces all spaces in a string with '%20'
* @param {String} input
* @return {String} The URLified string
*/
function c1q3a(input) {
  const length = input.length;
  if (false) {
    console.log('Code coverage should fail');
  }
  return input.replace(/ /g, '%20').substring(0, length);
};
c1q3.push(c1q3a);

/** Slice - Replaces all spaces in a string with '%20'
* @param {String} input
* @return {String} The URLified string
*/
function c1q3b(input) {
  const length = input.length;
  let string = input; // deep copy
  let i = string.indexOf(' ');
  while (i !== -1) {
    string = string.slice(0, i) + '%20' + string.slice(i+1);
    i = string.indexOf(' ');
  }
  return string.substring(0, length);
};
c1q3.push(c1q3b);

/** Character Array - Replaces all spaces in a string with '%20'
* @param {String} input
* @return {String} The URLified string
*/
function c1q3c(input) {
  const length = input.length;
  let charArray = input.split('');
  charArray.forEach(function(char, i) {
    if (char === ' ') {
      charArray[i] = '%20';
    }
  });
  const output = charArray.join('');
  return output.substring(0, length);
};
c1q3.push(c1q3c);

/** Functional (Map) - Replaces all spaces in a string with '%20'
* @param {String} input
* @return {String} The URLified string
*/
function c1q3d(input) {
  const length = input.length;
  const charArray = input.split('');
  const replaced = charArray.map(function(char) {
    if (char === ' ') {
      return '%20';
    }else{
      return char;
    }
  });
  const output = replaced.join('');
  return output.substring(0, length);
};
c1q3.push(c1q3d);

/** Create new string - Replaces all spaces in a string with '%20'
* @param {String} input
* @return {String} The URLified string
*/
function c1q3e(input) {
  const length = input.length;
  let output = '';
  for (let i = 0; i < length; i++) {
    const char = input.charAt(i);
    if (char === ' ') {
      output += '%20';
    } else {
      output += char;
    }
  }
  return output.substring(0, length);
};
c1q3.push(c1q3e);
