module.exports = exports = LinkedList = (function() {
  /** Constructor for LinkedList
  * @param {Array} elements Initial values in the LinkedList
  * @this LinkedList
  */
  function LinkedList(elements) {
    this.head = null;
  }

  /** Print the LinkedList
  * @this LinkedList
  * @return {String} The string representation of LinkedList
  */
  function toString() {
    let string = '[';
    let current = this.head;
    if (current) {
      string += ' ';
      string += current.value.toString();
      while (current.next) {
        current = current.next;
        string += ', ' + current.value.toString();
      }
      string += ' ';
    }
    string += ']';
    return string;
  }
  LinkedList.prototype.toString = toString;

  /** Get length of LinkedList
  * @this LinkedList
  * @return {Number} The length of the LinkedList
  */
  function length() {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }
  LinkedList.prototype.length = length;

  /** Push node to end of linked list
  * @param {Any} value
  * @this LinkedList
  */
  function push(value) {
    let node = {
      value: value,
      next: null,
    };
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  LinkedList.prototype.push = push;

  /** Pop node from end of linked list
  * @this LinkedList
  * @return {value} The value of the popped node
  */
  function pop() {
    let current = this.head;

    if (this.length() === 0) {
      return null;
    }

    if (this.length() === 1) {
      let current = this.head;
      this.head = null;
      return current.value;
    }

    // One or more elements
    let previous = current;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    return current.value;
  }
  LinkedList.prototype.pop = pop;

  return LinkedList;
})();
