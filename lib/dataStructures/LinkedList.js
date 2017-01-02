module.exports = exports = LinkedList = (function() {
  /** Constructor for LinkedList
  */
  function LinkedList() {
    this.head = null;
  }

  /** Print the LinkedList
  * @this LinkedList
  */
  function print() {
    process.stdout.write('LinkedList: [');
    let current = this.head;
    process.stdout.write(current.value.toString());
    while (current.next) {
      current = current.next;
      process.stdout.write(', ' + current.value.toString());
    }
    console.log(']');
  }
  LinkedList.prototype.print = print;

  /** Push node to end of linked list
  * @param {Any} value
  * @this LinkedList
  */
  function push(value) {
    console.log('LL push');
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

  return LinkedList;
})();
