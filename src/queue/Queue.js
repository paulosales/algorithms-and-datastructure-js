'use strict'

const { DoublyLinkedList, DoublyLinkedNode } = require('../linked-list/DoublyLinkedList')
class Queue {
  constructor () {
    this.linkedList = new DoublyLinkedList()
  }

  enqueue (data) {
    const node = new DoublyLinkedNode(data)
    this.linkedList.insertBeginning(node)
  }

  dequeue () {
    const removed = this.linkedList.removeEnd()
    if (removed) {
      return removed.data
    } else {
      return null
    }
  }
}

module.exports = { Queue }
