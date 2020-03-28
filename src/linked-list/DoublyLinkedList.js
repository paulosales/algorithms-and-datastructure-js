/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

const InvalidArgument = require('../exception/InvalidArgument')

/**
 * A Doubly Linked List
 */
class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  /**
   * Create a node in the beginning of the list and store the data there.
   * @param {any} data The data that will be inserted.
   */
  insertBeginning(data) {
    const node = new DoublyLinkedNode(data)
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

  /**
   * Remove the first node.
   */
  removeBeginning() {
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
      return currentNode.data
    }
    return null
  }

  /**
   * Create a node in the end of the list and store the data there.
   * @param {any} data The data that will be inserted.
   */
  insertEnd(data) {
    const node = new DoublyLinkedNode(data)
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

  /**
   * Remove the last node.
   */
  removeEnd() {
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
      return currentNode.data
    }
    return null
  }

  /**
   * Search the node into the linked list and return it.
   * @param {number|function} finder index number or a function that receives a data as a parameter a return true if that requested node is founded.
   */
  getNode(finder) {
    let currentNode = this.head
    if (typeof finder === 'number') {
      for (let i = 0; i < finder && currentNode; i++) {
        currentNode = currentNode.next
      }
    } else if (typeof finder === 'function') {
      for (let i = 0; currentNode && !finder(currentNode.data); i++) {
        currentNode = currentNode.next
      }
    } else {
      throw new InvalidArgument(
        'The finder should be a index number or a function.'
      )
    }

    return currentNode
  }

  /**
   * Search the data into the linked list and return it.
   * @param {number|function} finder index number or a function that receives a data as a parameter a return true if that requested data is founded.
   */
  get(finder) {
    const currentNode = this.getNode(finder)

    if (currentNode) {
      return currentNode.data
    } else {
      return null
    }
  }
}

class DoublyLinkedNode {
  constructor(data = null) {
    this.prev = null
    this.data = data
    this.next = null
  }
}

module.exports = DoublyLinkedList
