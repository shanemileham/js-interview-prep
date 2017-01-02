# JavaScript Interview Prep
[![Travis CI Badge](https://travis-ci.org/shanemileham/js-interview-prep.svg?branch=master)](https://travis-ci.org/shanemileham/js-interview-prep)
[![codecov](https://codecov.io/gh/shanemileham/js-interview-prep/branch/master/graph/badge.svg)](https://codecov.io/gh/shanemileham/js-interview-prep)
[![Dependency Badge](https://david-dm.org/shanemileham/js-interview-prep.svg)](https://david-dm.org/shanemileham/js-interview-prep)
[![Dependency Dev Badge](https://david-dm.org/shanemileham/js-interview-prep/dev-status.svg)](https://david-dm.org/shanemileham/js-interview-prep?type=dev)


## Resources
### [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
### [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
### [MDN JavaScript Tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
### [Crockford JS](http://javascript.crockford.com/)
### [Cracking the Coding Interview (6th Edition)](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=dp_ob_title_bk)

## Data Structures

### Abstract Data Structures
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

### JavaScript Data Structures

#### [Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) and [Standard Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

Type|Typeof|Immutable/Primitive?
---|---|---
`undefined`|undefined|Yes
`null`|Object*|?
`""`|String|Yes
`123`|Number|Yes
`true`|Boolean|Yes
`[]`|Array|Yes
[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)|Object|No
[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)|Object|No
[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)|Object|No
[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)|Object|No
[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)|Object|No
[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)|Object|No
[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)|Object|No
[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)|Object|No
[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) / [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)|Object|No
[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) / [WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)|Object|No
* Note: `Null` is also a type, but `typeof(null)` is `Object`


## Algorithms

### Search Algorithms
- [Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [Breadth-First Search](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Depth-First Search](https://en.wikipedia.org/wiki/Depth-first_search)

### Sort Algorithms
Algorithm | Time (Best) | Time (Average) | Time (Worst) | Space Complexity
---|---|---|---|---
[Quick Sort](https://en.wikipedia.org/wiki/Quicksort)|Ω(n log(n))|Θ(n log(n))|O(n^2)|O(log(n))
[Merge Sort](https://en.wikipedia.org/wiki/Merge_sort)|Ω(n log(n))|Θ(n log(n))|O(n log(n))|O(n)

Resources:
- http://bigocheatsheet.com/
- https://www.toptal.com/developers/sorting-algorithms

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
- [ ] 2.1 - Remove Dups
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

### Chapter 9 - System Design and Scalability

### Chapter 10 - Sorting and Searching

### Chapter 11 - Testing

### Chapters 12-15
_Language specific; not relevant_

### Chapter 16 - Moderate

### Chapter 17 - Hard
