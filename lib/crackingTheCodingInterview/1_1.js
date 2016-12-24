/*
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?
*/

// Initial Solution which solves in O(n log n)
// module.exports = c1q1 = function(string) {
//   // sort
//   let array = string.split('').sort();
//   // see if any adjacent characters are equal
//   for (let i = 0; i < array.length-1; i++) {
//     if (array[i] === array[i+1]) {
//       return false;
//     }
//   }
//   return true;
// };

// Faster (O(n)) but consumes more memory
module.exports = c1q1 = function(string) {
  let sparseArray = new Array(65535);
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    if (sparseArray[code]) {
      return false;
    }
    sparseArray[code] = true;
  }

  return true;
};
