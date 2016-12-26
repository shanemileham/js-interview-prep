/*
Check Permutation
Given two strings, write a method to decide
if one is a permutation of the other.
*/

// Sort (slower, but more memory efficient)
module.exports = c1q2a = function(stringA, stringB) {
  const sortedStringA = stringA.split('').sort().join('');
  const sortedStringB = stringB.split('').sort().join('');

  if (sortedStringA === sortedStringB) {
    return true;
  }else{
    return false;
  }
};

// Sparse array check (faster, but more memory intensive)
module.exports = c1q2b = function(stringA, stringB) {
  let sparseArray = new Array(65535);

  if (stringA.length !== stringB.length) {
    return false;
  }

  // Count number of each character
  for (let i = 0; i < stringA.length; i++) {
    let charCode = stringA.charCodeAt(i);
    if (sparseArray[charCode] === undefined) {
      sparseArray[charCode] = 0;
    }
    sparseArray[charCode]++;
  }

  // Check number of each character matches
  for (let i = 0; i < stringA.length; i++) {
    let charCode = stringB.charCodeAt(i);
    if (sparseArray[charCode] === undefined ||
        sparseArray[charCode] === 0) {
      return false;
    }
    sparseArray[charCode]--;
  }

  return true;
};

module.exports = c1q2 = [c1q2a, c1q2b];
