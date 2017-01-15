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
* [Google Interview Prep (Full)](https://github.com/jwasham/google-interview-university)

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

### [Standard Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) (and useful methods)

* [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  * `keys()` - Returns an array containing the names of all of the given object's own enumerable properties.
  * `values()` - Returns an array of a given object's own enumerable values.
* [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  * `length` - Specifies the number of arguments expected by the function.
  * `name` - The name of the function.
  * `apply(thisArg, [argsArray])` - Calls a function with a given `this` value and arguments provided as an array (or an array-like object).
  * `bind(thisArg[, arg1[, arg2[, ...]]])` - Creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
  * `call(thisArg[, arg1[, arg2[, ...]]])` - Calls a function with a given this value and arguments provided individually.
  * _Use `.bind()` when you want that function to later be called with a certain context, useful in events. Use `.call()` or `.apply()` when you want to invoke the funciton immediately, and modify the context._
* [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
  * Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object. `new Boolean("false") === true`
* [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) ([Double-Precision Floating-Point](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) [Interactive](http://bartaz.github.io/ieee754-visualization/))
  * `EPSILON` - The smallest interval between two representable numbers
  * `MAX_SAFE_INTEGER` / `MIN_SAFE_INTEGER`
  * `MAX_VALUE` / `MIN_VALUE`
  * `POSITIVE_INFINITY` / `NEGATIVE_INFINITY`
  * `NaN` - Special "not a number" value
  * `isNaN()` - Determine whether the passed value is NaN.
  * `toString([radix])` - returns a string representing the specified Number object. Radix is in [2,36].
  * `parseInt(string, radix)` - Returns an integer number parsed from the given string. If the first character cannot be converted to a number, NaN is returned.
  * `parseFloat(string)` - Returns a floating point number parsed from the given string. If the first character cannot be converted to a number, NaN is returned.
* [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
  * `new Date()`;
  * `new Date(value);`
  * `new Date(dateString);`
  * `new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);`
  * `now()` - Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC, with leap seconds ignored.
  * `getTime()` - Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC (negative for prior times).
  * `getFullYear()` - Returns the year (4 digits for 4-digit years) of the specified date according to local time.
  * `getDate()` - Returns the day of the month (1-31) for the specified date according to local time.
  * `getDay()` - Returns the day of the week (0-6) for the specified date according to local time.
  * `getHours()` - Returns the hour (0-23) in the specified date according to local time.
* [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
  * `length` - Reflects the length of the string.
  * `chatAr(index)` - Returns the character at the specified index.
  * `charCodeAt(index)` - Returns a number indicating the Unicode value of the character at the given index.
  * `indexOf(searchValue[, fromIndex])` - Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
  * `replace(regexp|substr, newSubstr|function)` - Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
  * `match(regexp)` - Returns an Array containing the entire match result and any parentheses-captured matched results; null if there were no matches.
  * `slice(beginSlice[, endSlice])` - Returns a new string containing the extracted section of the string.
  * `split([separator[, limit]])` - Returns an array of strings split at each point where the separator occurs in the given string.
  * `substring(indexStart[, indexEnd])` - Returns a new string containing the extracted section of the given string.
* [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
  * `new RegExp(/pattern/flags)`
  * Special characters
    * `g` - global match; find all matches rather than stopping after the first match
    * `i` - ignore case
    * `.` - Matches any single character except line terminators
    * `\d` - Matches a digit character (Opposite: `\D`)
    * `\w` - Matches any alphanumeric character, including the underscore (Opposite: `\W`)
    * `\s` - Matches a single white space character (Opposite: `\S`)
    * `[abcd]` or `[a-d]` - Matches any one of the enclosed characters (Opposite: `[^abcd]`)
    * `one|two` - Matches either `one` or `two`
    * `^` - Matches beginning of input
    * `$` - Matches end of input
    * `\b` - Matches a word boundary (alternated `\w` and `\W`)
    * `\B` - Matches a non-word boundary
    * `(x)` - Matches x and remembers the match. These are called capturing groups. The matches substring can be recalled from the resulting array's elements `[1], ..., [n]`
    * `(?:x)` - Matches x but does not remember the match.
    * `x*` - Matches the preceding item x 0 or more times.
    * `x?` - Matches the preceding item x 0 or 1 time.
    * `x{n,m}` - Where n and m are positive integers. Matches at least n and at most m occurrences of the preceding item x.
    * `x*?` / `x??` / `x{n,m}` - Matches like above, but gets the smallest possible match. Quantifiers without ? are said to be greedy. Those with ? are called "non-greedy".
    * `x(?=y)` - Matches x only if x is followed by y. (Opposite: `x(?!y)`)
  * `exec(str)` - Executes a search for a match in a specified string. Returns a result array, or null.
  * `test(str)` - Executes a search for a match between a regular expression and a specified string. Returns true or false.
* [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  * `[element0, element1, ..., elementN]`
  * `new Array(element0, element1[, ...[, elementN]])`
  * `new Array(arrayLength)`
  * `length` - Reflects the number of elements in an array. (Highest number plus one)
  * Mutator Methods
    * `fill(value, start, end)` - Fills all the elements of an array from a start index to an end index with a static value.
    * `pop()` - Removes the last element from an array and returns that element.
    * `push([element1[, ...[, elementN]]])` - Adds one or more elements to the end of an array and returns the new length of the array.
    * `shift()` - Removes the first element from an array and returns that element.
    * `unshift([element1[, ...[, elementN]]])` - Adds one or more elements to the front of an array and returns the new length of the array.
    * `splice(start, deleteCount, item1, item2, ...)` - Adds and/or removes elements from an array. If deleteCount is omitted, deleteCount will be equal to (arr.length - start). If you don't specify any elements, splice() will only remove elements from the array. Returns an array containing the deleted elements.
    * `reverse()` - Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
    * `sort(compareFunction)` - Sorts the elements of an array in place and returns the array. If compareFunction is omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element. Compare function for numbers as example: `(a,b) => a-b`.
  * Accessor Methods
    * `indexOf(searchElement, fromIndex=0)` - Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
    * `join(separator=',')` - Joins all elements of an array into a string.
    * `slice(begin=0, end=length)` - Extracts a section of an array and returns a new array.
  * Iteration Methods
    * `find(callback[, thisArg])` - Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found. Callback function takes (element, index, array).
    * `findIndex(callback[, thisArg])` - Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. Callback function takes (element, index, array).
    * `every(callback[, thisArg])` - Returns true if every element in this array satisfies the provided testing function. Callback function takes (element, index, array).
    * `some(callback[, thisArg])` - Returns true if at least one element in this array satisfies the provided testing function. Callback function takes (element, index, array).
    * `filter(callback[, thisArg])` - Creates a new array with all of the elements of this array for which the provided filtering function returns true. Callback function takes (element, index, array).
    * `forEach(callback[, thisArg])` - Calls a function for each element in the array. Callback function takes (element, index, array).
    * `map(callback[, thisArg])` - Creates a new array with the results of calling a provided function on every element in this array. Callback function takes (element, index, array).
    * `reduce(callback, [initialValue])` - Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. Callback function takes (accumulator, currentValue, currentIndex, array).
    * `reduceRight(callback[, initialValue])` - Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. Callback function takes (accumulator, currentValue, currentIndex, array).
* [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) / [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
  * An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. This could be bypassed by using map = Object.create(null) since ES5, but was seldom done.
  * The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
  * You can get the size of a Map easily with the size property, while the size of an Object must be determined manually.
  * `new Map([iterable])`
  * `size` - Returns the number of key/value pairs in the Map object. (NOT possible with weak)
  * `clear()` - Removes all key/value pairs from the Map object. (NOT possible with weak)
  * `set(key, value)` - Sets the value for the key in the Map object. Returns the Map object.
  * `has(key)` - Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
  * `get(key)` - Returns the value associated to the key, or undefined if there is none.
  * `delete(key)` - Removes any value associated to the key and returns the value that `Map.prototype.has(key)` would have previously returned. `Map.prototype.has(key)` will return false afterwards.
* [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) / [WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
  * `new Set([iterable])`
  * `clear()` - Removes all elements from the Set object.
  * `add(value)` - Appends a new element with the given value to the Set object. Returns the Set object.
  * `has(value)` - Returns a boolean asserting whether an element is present with the given value in the Set object or not.
  * `delete(value)` - Removes the element associated to the value and returns the value that Set.prototype.has(value) would have previously returned. Set.prototype.has(value) will return false afterwards.
* Iterations
  * `for ([initialization]; [condition]; [final-expression])`
  * `for (enumerableKey in object)` - loops through the enumerable properties of an object, not the indexes of an array. The order is not guaranteed
  * `for (value of iterableObject)` - loops through the iterableObject in order.
  * `while` - creates a loop that executes a specified statement as long as the test condition evaluates to true.
  * `do {} while ()` - creates a loop that executes a specified statement until the test condition evaluates to false.
* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * `all(iterable)` - Returns a promise that either fulfills when all of the promises in the iterable argument have fulfilled or rejects as soon as one of the promises in the iterable argument rejects. If the returned promise fulfills, it is fulfilled with an array of the values from the fulfilled promises in same order as defined in the iterable. If the returned promise rejects, it is rejected with the reason from the first promise in the iterable that rejected. This method can be useful for aggregating results of multiple promises.
  * `race(iterable)` - Returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects, with the value or reason from that promise.
  * `reject(reason)` - Returns a Promise object that is rejected with the given reason.
  * `resolve(value)` - Returns a Promise object that is resolved with the given value. If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. Generally, if you don't know if a value is a promise or not, Promise.resolve(value) it instead and work with the return value as a promise.
  * `catch(onRejected)` - Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.
  * `then(onFulfilled, onRejected)` - Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled (i.e. if the relevant handler onFulfilled or onRejected is not a function).

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

Things to keep in mind while solving problems involving...

### Chapter 1 - Arrays and Strings
* JS Array
* Objects (dictionary / hash table)
* Array (array list)
* Sparse array

### Chapter 2 - Linked Lists
* JS Array (all up to engine implementation)
* Nodes
* Runners
* Recursive

### Chapter 3 - Stacks and Queues
* JS Array
* Plates to represent a stack
* Like an Array / Hash Map / Object / LinkedList

### Chapter 4 - Trees and Graphs
* Binary Trees
  * Binary Search Tree: BT where left is less and right is more
  * Balanced vs. Unbalanced
  * Complete Binary: All filled except last level, filled L→R
  * Full Binary: Every node has 0 or 2 children
  * Perfect Binary: Full and complete. 2**k-1 nodes.
* Binary Tree Traversal
  * In-Order (LvR)
  * Pre-Order (vLR) (root is first)
  * Post-Order (LRv) (root is last)
* Binary Heaps
  * Insert: put next and bubble up
  * Extract: remove, put last at top, bubble down
* Tries (prefix trees)
  * Each node is a letter
  * Has a termination node (bool or subclass)
* Graphs
  * Node Class (nodes have adj = [])
  * Adjacency Matrix [[][][]] nxn
  * Adjacency List (left compressed matrix with values instead of flags)
* Graph Search
  * Depth First Search (recursive)
    * Stack push, mark visited
  * Breadth First Search (queue)
    * Queue push
  * Bidirectional BFS (shortest path)


### Chapter 5 - Bit Manipulation
```
* &, |, ^, ~ (all in 2s complement)
* << (L shift zero), >> (sign propagating R), >>> (zero fill R)
* GET(k): num & 1<<k
* SET(k): num | 1<<k
* CLEAR(k): num & ~(1<<k)
* CLEAR(i,j): num & ~(-1>>>i & -1<<j)
* UPDATE = clear, set = (num & mask) | (1<<k)
* Also use 2**k
```


### Chapter 6 - Math and Logic Puzzles
Prime Numbers
* Unique factorization
* `x = 2**j0 + 3**j1 + …`
* `y = 2**k0 + 3**k1 + … `
* `gcd(x,y) = 2**min(j0,k0) + 3**min(j1,k1) + … `
* `lcm(x,y) = 2**max(j0,k0) + 3**max(j1,k1) + … `
* `gcd(x,y) + lcm(x,y) = xy`
* Sieve of Eratosthenes
  * Cross off all numbers divisible by 2
  * Next number (3) is a prime
  * Repeat with next number

Probability
* P(A,B) = P(B)P(A|B) = P(A)P(B|A)
* BAYES: P(A|B) = P(B|A)P(A)/P(B)
* P(A|B) = P(A)+P(B)-P(A,B)
* Independent: one happening tells you nothing about the other happening. Orthogonal. P(A,B) = P(A)+P(B). Also P(B|A) = P(B) because A indicates nothing about B.
* Mutually Exclusive: if one happens, then the other cannot happen. P(A,B) = P(A)+P(B)

Notes
* Write down lemmas
* Worst case shifting - balance worst with best to decrease average (like 9 ball problem)



### Chapter 7 - Object-Oriented Design
How to approach
* Handle ambiguity (clarify)
* Define core concepts (DB Tables)
* Analyze Relationships (DB Relationships)
* Investigate Actions (Behavioral API Endpoints)

Design Patterns
* Singleton (often anti-pattern)
* Factory method - creates an instance of a class with subclasses deciding which class to instantiate `function createCardGame(gameType)`



### Chapter 8 - Recursion and Dynamic Programming
* How to Identify
  * Can be built off of subproblems
  * “Design an algorithm to compute the nth…” (if it depends on the n-1 for example)
* How to approach
  * Bottom up - simple case, then build
  * Top down - divide case N into subproblems
  * Half and half - like merge sort
  * All recursive algorithms can be implemented iteratively (code can be more complex)
* Dynamic programming and memoization - recursion with caching (can go top down or bottom up) Bottom up is more memory efficient, at least in the case of fib.


### Testing and Threads
Testing
* Software: Are we doing Black Box Testing * or White Box Testing?
* Who will use it? Why?
* What are the use cases?
* What are the bounds of use?
* What are the failure conditions?
* How would you perform the testing? What * are the test cases?
  * Normal case
  * Extreme case
  * Illegal input (null, undefined)
  * Strange input

Threads
* Deadlock conditions
  * Mutual exclusion (only one process can access resource)
  * Hold and Wait (process holding resources can request additional resources without relinquishing)
  * No Preemption (process cannot remove another process’ resource)
  * Circular Wait (2+ processes form a circular chain waiting for other’s resource)


## Problem Solving Steps
1. Clarify
  1. Write down question and bold important/unique parts
  2. Draw an example (make sure I understand the question)
  3. Write table of testing I/O; doubles as TDD/BDD (make sure I understand desired behavior); Ask what kind and range of inputs I can expect
2. Solve
  1. Start:
    * Solve manually (intuition) ||
    * Brute force ||
    * Base Case and Build ||
    * DS Brainstorm
  2. Optimize
    * BUD - Bottlenecks, Unnecessary work, * Duplicated work
    * Simplify and Generalize
    * Best Conceivable Runtime (based on * inputs and outputs)
  3. Convert to code
  4. Error Checking - Note TODOs
3. Test
  1. Walk through like code review
  2. Weird code, Hot spots…
  3. Small test cases
  4. Special cases
  5. Large cases

Notes
* Pretend needed classes exist
* Abbreviate long variable names in successive use
