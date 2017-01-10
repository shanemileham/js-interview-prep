# JavaScript Interview Prep
[![Travis CI Badge](https://travis-ci.org/shanemileham/js-interview-prep.svg?branch=master)](https://travis-ci.org/shanemileham/js-interview-prep)
[![codecov](https://codecov.io/gh/shanemileham/js-interview-prep/branch/master/graph/badge.svg)](https://codecov.io/gh/shanemileham/js-interview-prep)
[![Dependency Badge](https://david-dm.org/shanemileham/js-interview-prep.svg)](https://david-dm.org/shanemileham/js-interview-prep)
[![Dependency Dev Badge](https://david-dm.org/shanemileham/js-interview-prep/dev-status.svg)](https://david-dm.org/shanemileham/js-interview-prep?type=dev)


## Resources

### Basics
* [MDN JavaScript Tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
* [JS The Right Way](http://jstherightway.org/)
* [Crockford JS](http://javascript.crockford.com/)

### Common Libraries
* [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
* [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

### Interview Prep
* [Cracking the Coding Interview (6th Edition)](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=dp_ob_title_bk)
* [Cracking the Coding Interview JS Solutions](https://github.com/careercup/CtCI-6th-Edition-JavaScript-ES2015)
* [Awesome Interview Questions](https://github.com/MaximAbramchuck/awesome-interview-questions) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

### ES2015 Resources
* [ES6 Features](https://github.com/lukehoban/es6features)
* [ES6 Cheatsheet](https://github.com/DrkSephy/es6-cheatsheet)

### Functional Programming
* [Why Programmers Need Limits](https://medium.com/@cscalfani/why-programmers-need-limits-3d96e1a0a6db#.imre1jqxt)
* [So You Want to be a Functional Programmer](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536#.em3lo7lke)
* [Functional Light JS](https://github.com/getify/Functional-Light-JS)

### Style Guides
* [Google JS Style Guide](https://google.github.io/styleguide/jsguide.html)
* [Airbnb JS Style Guide](http://airbnb.io/javascript/)

---

## JavaScript Data Structures

Primitives are immutable, but objects are mutable.

### [Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) (Primitives)

* Undefined
* Null (Note: `typeof(null)` is `Object`)
* Boolean
* Number
* String
* Symbol

### [Standard Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

* [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  * `keys()` - Returns an array containing the names of all of the given object's own enumerable properties.
  * `values()` - Returns an array of a given object's own enumerable values.
* [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  * `length` - Specifies the number of arguments expected by the function.
  * `name` - The name of the function.
  * `apply(thisArg, [argsArray])` - Calls a function with a given `this` value and arguments provided as an array (or an array-like object).
  * `bind(thisArg[, arg1[, arg2[, ...]]])` - Creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
  * `call(thisArg[, arg1[, arg2[, ...]]])` - Calls a function with a given this value and arguments provided individually.
* [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
  * Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object. `new Boolean("false") === true`
* [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
  * `length` - Reflects the length of the string.
  * `chatAr(index)` - Returns the character at the specified index.
  * `charCodeAt(index)` - Returns a number indicating the Unicode value of the character at the given index.
  * `indexOf(searchValue[, fromIndex])` - Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
  * `match(regexp)` - Returns an Array containing the entire match result and any parentheses-captured matched results; null if there were no matches.
  * `slice(beginSlice[, endSlice])` - Returns a new string containing the extracted section of the string.
  * `split([separator[, limit]])` - Returns an array of strings split at each point where the separator occurs in the given string.
  * `substring(indexStart[, indexEnd])` - Returns a new string containing the extracted section of the given string.
* [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
  * `EPSILON` - The smallest interval between two representable numbers
  * `MAX_SAFE_INTEGER` / `MIN_SAFE_INTEGER`
  * `MAX_VALUE` / `MIN_VALUE`
  * `POSITIVE_INFINITY` / `NEGATIVE_INFINITY`
  * `NaN` - Special "not a number" value
  * `isNaN()` - Determine whether the passed value is NaN.
  * `parseInt(string, radix)` - Returns an integer number parsed from the given string. If the first character cannot be converted to a number, NaN is returned.
  * `parseFloat(string)` - Returns a floating point number parsed from the given string. If the first character cannot be converted to a number, NaN is returned.
* [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  * METHOD
* [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
  * METHOD
* [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
  * METHOD
* [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) / [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
  * METHOD
* [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) / [WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
  * METHOD

---

## Abstract Data Structures
[Abstract Data Structures](https://en.wikipedia.org/wiki/List_of_data_structures)|Access|Search|Insertion|Deletion
---|---|---|---|---
[**Array**](https://en.wikipedia.org/wiki/Array_data_structure)|O(1)|O(n)|O(1)|O(1)
[**Array List**](https://en.wikipedia.org/wiki/Dynamic_array)|O(1)|O(n)|O(1)|O(1)
[**Stack**](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))|O(n)|O(n)|O(1)|O(1)
[**Queue**](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))|O(n)|O(n)|O(1)|O(1)
[**Linked List**](https://en.wikipedia.org/wiki/Linked_list)|O(n)|O(n)|O(1)|O(1)
[**Hash Table**](https://en.wikipedia.org/wiki/Hash_table)|N/A|O(1)|O(1)|O(1)
[**Binary Search Tree**](https://en.wikipedia.org/wiki/Binary_search_tree)|O(log n)|O(log n)|O(log n)|O(log n)

Other
- [Trees](https://en.wikipedia.org/wiki/Tree_(data_structure))
- [Tries](https://en.wikipedia.org/wiki/Trie)
- [Graphs](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))
- [Heaps](https://en.wikipedia.org/wiki/Heap_(data_structure))


## Algorithms

### Search Algorithms
- [Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [Breadth-First Search](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Depth-First Search](https://en.wikipedia.org/wiki/Depth-first_search)

### Sort Algorithms
Algorithm | Time (Best) | Time (Average) | Time (Worst) | Space Complexity
---|---|---|---|---
[Selection Sort](https://www.toptal.com/developers/sorting-algorithms/selection-sort)|Ω(n^2)|Θ(n^2)|O(n^2)|O(1)
[Insertion Sort](https://www.toptal.com/developers/sorting-algorithms/insertion-sort)|Ω(n)|Θ(n^2)|O(n^2)|O(1)
[Bubble Sort](https://www.toptal.com/developers/sorting-algorithms/bubble-sort)|Ω(n)|Θ(n^2)|O(n^2)|O(1)
[Quick Sort](https://www.toptal.com/developers/sorting-algorithms/quick-sort)|Ω(n log(n))|Θ(n log(n))|O(n^2)|O(log(n))
[Merge Sort](https://www.toptal.com/developers/sorting-algorithms/merge-sort)|Ω(n log(n))|Θ(n log(n))|O(n log(n))|O(n)
[Heap Sort](https://www.toptal.com/developers/sorting-algorithms/heap-sort)|Ω(n log(n))|Θ(n log(n))|O(n log(n))|O(1)

Resources:
- http://bigocheatsheet.com/
- https://www.toptal.com/developers/sorting-algorithms


---

## Cracking the Coding Interview (6th Edition)

*You might want to consider buying the book  [here](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=dp_ob_title_bk) if you are preparing for an interview.
The book covers much more than just these questions;
this repository is primarily for my own use in preparing for a JavaScript position.*

### Chapter 1 - Arrays and Strings
- [x] 1.1 - Is Unique
- [x] 1.2 - Check Permutation
- [x] 1.3 - URLify
- [x] 1.4 - Palindrome Permutation
- [ ] 1.5 - One Away
- [ ] 1.6 - String Compression
- [ ] 1.7 - Rotate Matrix
- [ ] 1.8 - Zero Matrix
- [ ] 1.9 - String Rotation

### Chapter 2 - Linked Lists
- [x] 2.1 - Remove Dups
- [ ] 2.2 - Return Kth to Last
- [ ] 2.3 - Delete Middle Node
- [ ] 2.4 - Partition
- [ ] 2.5 - Sum Lists
- [ ] 2.6 - Palindrome
- [ ] 2.7 - Intersection
- [ ] 2.8 - Loop Detection

### Chapter 3 - Stacks and Queues
- [ ] 3.1 - Three in One
- [ ] 3.2 - Stack Min
- [ ] 3.3 - Stack of Plates
- [ ] 3.4 - Queue via Stacks
- [ ] 3.5 - Sort Stack
- [ ] 3.6 - Animal Shelter

### Chapter 4 - Trees and Graphs
- [ ] 4.1 - Route Between Nodes
- [ ] 4.2 - Minimal Tree
- [ ] 4.3 - List of Depths
- [ ] 4.4 - Check Balanced
- [ ] 4.5 - Validate BST
- [ ] 4.6 - Successor
- [ ] 4.7 - Build Order
- [ ] 4.8 - First Common Ancestor
- [ ] 4.9 - BST Sequences
- [ ] 4.10 - Check Subtree
- [ ] 4.11 - Random Node
- [ ] 4.12 - Paths with Sum

### Chapter 5 - Bit Manipulation

### Chapter 6 - Math and Logic Puzzles

### Chapter 7 - Object-Oriented Design

### Chapter 8 - Recursion and Dynamic Programming

### Chapter 10 - Sorting and Searching

### Chapter 16 - Moderate

### Chapter 17 - Hard

### Omitted Chapters
* 9 - System Design and Scalability: No coding / Not in the scope of this preparation guide
* 11 - Testing: Used on all coding questions
* 12-15: Language specific; not relevant
