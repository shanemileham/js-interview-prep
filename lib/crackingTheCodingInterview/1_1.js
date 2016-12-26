/*
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?
*/

module.exports = c1q1 = [];

// Initial Solution which solves in O(n log n)
c1q1.push(function c1q1a(string) {
  // sort
  const array = string.split('').sort();
  // see if any adjacent characters are equal
  for (let i = 0; i < array.length-1; i++) {
    if (array[i] === array[i+1]) {
      return false;
    }
  }
  return true;
});

// Faster (O(n)) but consumes more memory
c1q1.push(function c1q1b(string) {
  let sparseArray = new Array(65535);
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    if (sparseArray[code]) {
      return false;
    }
    sparseArray[code] = true;
  }

  return true;
});
