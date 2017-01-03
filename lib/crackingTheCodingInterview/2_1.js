/**
@file
Remove Dups:
Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
@author Shane Mileham
*/

module.exports = c2q1 = [];

/** Remove Duplicates with temporary buffer
* @param {LinkedList} input
* @this LinkedList
* @return {LinkedList} The LinkedList without duplicates
*/
function c2q1a() {
  let set = new Set();
  let linkedSet = new LinkedList();
  let current = this.head;
  while (current) {
    if (!set.has(current.value)) {
      set.add(current.value);
      linkedSet.push(current.value);
    }
    current = current.next;
  }
  return linkedSet;
}
c2q1.push(c2q1a);
