/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

const { InvalidArgument } = require('../exception/InvalidArgument')
class SinglyLinkedList {
  constructor() {
    this.head = null
  }

  insertBeginning(newNode) {
    if (!(newNode instanceof SinglyLinkedNode)) {
      throw new InvalidArgument(
        'newNode should be a instance of SinglyLinkedNode.'
      )
    }
    const currentHead = this.head
    this.head = newNode
    this.head.next = currentHead
  }

  /**
   * Insert the a new node after a specific node.
   * @param {SinglyLinkedNode} node The specific node where a new node will be inserted after.
   * @param {SinglyLinkedNode} newNode The new node that will be inserted.
   */
  insertAfter(node, newNode) {
    if (!(newNode instanceof SinglyLinkedNode)) {
      throw new InvalidArgument(
        'newNode should be a instance of SinglyLinkedNode.'
      )
    }
    if (!(node instanceof SinglyLinkedNode)) {
      throw new InvalidArgument(
        'node should be a instance of SinglyLinkedNode.'
      )
    }
    const theNext = node.next
    node.next = newNode
    newNode.next = theNext
  }

  removeBeginning() {
    const currentNode = this.head
    if (this.head) {
      this.head = this.head.next
      currentNode.next = null
      return currentNode
    }

    return null
  }

  /**
   * Removes a node from List.
   * @param {SinglyLinkedNode} node;
   */
  remove(node) {
    if (this.head === node) {
      this.head = this.head.next
      return
    }
    let currentNode = this.head
    while (currentNode) {
      if (node === currentNode.next) {
        currentNode.next = currentNode.next.next
      }
      currentNode = currentNode.next
    }
  }

  get(index) {
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

  toString() {
    let currentNode = this.head
    let stringRepresentation = ''
    while (currentNode) {
      stringRepresentation += currentNode.data + ' -> '
      currentNode = currentNode.next
    }
    return stringRepresentation
  }
}

class SinglyLinkedNode {
  constructor(data = null) {
    this.data = data
    this.next = null
  }
}

module.exports = { SinglyLinkedList, SinglyLinkedNode }
