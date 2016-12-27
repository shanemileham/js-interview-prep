/**
@file
Palindrome Permutation:
Given a string, write a function to check if it is a permutation of a
palindrome. A palindrome is a word or phrase that is the same forwards and
backwards. A permutation is a rearrangement of letters. The palindrome does not
need to be limited to just dictionary words.
@author Shane Mileham
*/

module.exports = c1q4 = [];

/** Sorting - O(n log n)
* @param {String} input
* @return {Boolean} The string is a permutation of a palindrome
*/
function c1q4a(input) {
  const sortedArray = input.split('').sort();
  let middleCharacterUsed = false;

  for (let i = 0; i < input.length; i++) {
    if (sortedArray[i] === sortedArray[i+1]) {
      i++;
      continue;
    } else {
      if (middleCharacterUsed) {
        return false;
      } else {
        middleCharacterUsed = true;
      }
    }
  }
  return true;
}
c1q4.push(c1q4a);

/** Sparse array mapping - O(n)
* @param {String} input
* @return {Boolean} The string is a permutation of a palindrome
*/
function c1q4b(input) {
  let sparseArray = new Array(65535).fill(0);
  input.split('').map(function(char) {
    const charCode = char.charCodeAt(0);
    sparseArray[charCode]++;
  });

  let middleCharacterUsed = false;
  for (const key in sparseArray) {
    if (sparseArray[key] % 2 === 1) {
      if (middleCharacterUsed) {
        return false;
      } else {
        middleCharacterUsed = true;
      }
    }
  }
  return true;
}
c1q4.push(c1q4b);
