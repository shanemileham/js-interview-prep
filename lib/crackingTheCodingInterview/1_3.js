/*
URLify:
Write a method to replace all spaces in a string with '%20' You may assume that
the string has sufficient space at the end to hold the additional characters,
and that you are given the "true" length of the string.
(Note: if implementing in Java, please use a character array so that you can
perform this operation in place.)
*/

module.exports = c1q3 = [];

// Replace
c1q3.push(function c1q3a(input) {
  return input.replace(/ /g, '%20');
});

// Slice
c1q3.push(function c1q3b(input) {
  let string = input; // deep copy
  let i = string.indexOf(' ');
  while (i !== -1) {
    string = string.slice(0, i) + '%20' + string.slice(i+1);
    i = string.indexOf(' ');
  }
  return string;
});

// Character Array
c1q3.push(function c1q3c(input) {
  let charArray = input.split('');
  charArray.forEach(function(char, i) {
    if (char === ' ') {
      charArray[i] = '%20';
    }
  });
  const output = charArray.join('');
  return output;
});

// Functional (Map)
c1q3.push(function c1q3d(input) {
  const charArray = input.split('');
  const replaced = charArray.map(function(char) {
    if (char === ' ') {
      return '%20';
    }else{
      return char;
    }
  });
  const output = replaced.join('');
  return output;
});
