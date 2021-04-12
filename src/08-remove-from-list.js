/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let head = l;
  // If first (aka head) node need to be deleted
  // just move head reference to next node
  while (head.value === k) {
    head = head.next;
  }
  // If any other nested node needs to be deleted, link 'next'
  // property of current node to the 'next' property of the
  // node that follows the current one
  let current = head;
  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else current = current.next;
  }
  return head;
}

module.exports = removeKFromList;
