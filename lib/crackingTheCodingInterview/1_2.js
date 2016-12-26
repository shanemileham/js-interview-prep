/**
@file
Check Permutation:
Given two strings, write a method to decide
if one is a permutation of the other.
@author Shane Mileham
*/

module.exports = c1q2 = [];

/** Sort (slower, but more memory efficient)
* @param {String} stringA
* @param {String} stringB
* @return {Boolean} The strings are permutations of each other
*/
function c1q2a(stringA, stringB) {
  const sortedStringA = stringA.split('').sort().join('');
  const sortedStringB = stringB.split('').sort().join('');

  return (sortedStringA === sortedStringB);
};
c1q2.push(c1q2a);

/** Sparse array check (faster, but more memory intensive)
* @param {String} stringA
* @param {String} stringB
* @return {Boolean} The strings are permutations of each other
*/
function c1q2b(stringA, stringB) {
  let sparseArray = new Array(65535).fill(0);

  if (stringA.length !== stringB.length) {
    return false;
  }

  // Count number of each character
  for (let i = 0; i < stringA.length; i++) {
    const charCode = stringA.charCodeAt(i);
    sparseArray[charCode]++;
  }

  // Check number of each character matches
  for (let i = 0; i < stringA.length; i++) {
    const charCode = stringB.charCodeAt(i);
    if (sparseArray[charCode] === 0) {
      return false;
    }
    sparseArray[charCode]--;
  }

  return true;
};
c1q2.push(c1q2b);
