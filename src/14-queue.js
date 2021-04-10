// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  get size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  enqueue(element) {
    // Add new node as head node. If one is already exist then add reference
    // to new node to the 'next' property of last available node
    if (this.head) {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new ListNode(element);
    } else this.head = new ListNode(element);
  }

  dequeue() {
    // Copy head node value to return it as a result
    // Change head reference to previous node
    const lastNode = this.head.value;
    this.head = this.head.next;
    return lastNode;
  }
}

module.exports = Queue;
