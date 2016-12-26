/**
@file
Is Unique:
Implement an algorithm to determine if a string has all unique
characters. What if you cannot use additional data structures?
@author Shane Mileham
*/

module.exports = c1q1 = [];

/** Initial Solution which solves in O(n log n)
* @param {String} string The string whose uniqueness is to be determined
* @return {Boolean} The string has all unique characters
*/
function c1q1a(string) {
  // sort
  const array = string.split('').sort();
  // see if any adjacent characters are equal
  for (let i = 0; i < array.length-1; i++) {
    if (array[i] === array[i+1]) {
      return false;
    }
  }
  return true;
};
c1q1.push(c1q1a);

/** Faster (O(n)) but consumes more memory
* @param {String} string The string whose uniqueness is to be determined
* @return {Boolean} The string has all unique characters
*/
function c1q1b(string) {
  let sparseArray = new Array(65535);
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    if (sparseArray[code]) {
      return false;
    }
    sparseArray[code] = true;
  }

  return true;
};
c1q1.push(c1q1b);
