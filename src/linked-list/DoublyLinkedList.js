'use strict'

const { InvalidArgument } = require('../exception/InvalidArgument');

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  insertBeginning (node) {
    if (!(node instanceof DoublyLinkedNode)) {
      throw new InvalidArgument('node should be a instance of DoublyLinkedNode');
    }
    node.prev = null
    node.next = this.head
    this.head = node
    if (this.tail === null) {
      this.tail = this.head
    }
    if (node.next) {
      node.next.prev = node
    }
  }

  removeBeginning () {
    const currentNode = this.head
    if (this.head) {
      if (this.head.next) {
        this.head.next.prev = null
      }
      this.head = this.head.next
      if (this.head === null) {
        this.tail = null
      }
      currentNode.next = null
      return currentNode
    }
    return null
  }

  insertEnd (node) {
    if (!(node instanceof DoublyLinkedNode)) {
      throw new InvalidArgument('node should be a instance of DoublyLinkedNode');
    }
    node.next = null
    node.prev = this.tail
    this.tail = node
    if (this.head === null) {
      this.head = this.tail
    }
    if (node.prev) {
      node.prev.next = node
    }
  }

  removeEnd () {
    const currentNode = this.tail
    if (this.tail) {
      if (this.tail.prev) {
        this.tail.prev.next = null
      }
      this.tail = this.tail.prev
      if (this.tail === null) {
        this.head = null
      }
      currentNode.prev = null
      return currentNode
    }
    return null
  }

  get (index) {
    let currentNode = this.head
    for (let i = 0; i < index && currentNode; i++) {
      currentNode = currentNode.next
    }

    if (currentNode) {
      return currentNode
    } else {
      return null
    }
  }
}

class DoublyLinkedNode {
  constructor (data = null) {
    this.prev = null
    this.data = data
    this.next = null
  }
}

module.exports = { DoublyLinkedList, DoublyLinkedNode }
