/*
Check Permutation
Given two strings, write a method to decide
if one is a permutation of the other.
*/

// Sort (slower, but more memory efficient)
module.exports = c1q2 = function(stringA, stringB) {
  const sortedStringA = stringA.split('').sort().join('');
  const sortedStringB = stringB.split('').sort().join('');

  if (sortedStringA === sortedStringB) {
    return true;
  }else{
    return false;
  }
};

// Sparse array check
// TODO write faster solution
