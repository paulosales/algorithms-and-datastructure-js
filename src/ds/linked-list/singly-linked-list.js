/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

const InvalidArgument = require('../exception/invalid-argument')

/**
 * A Singly Linked List
 */
class SinglyLinkedList {
  constructor() {
    this.head = null
  }

  /**
   * Insert a data into the beginning of the linked list.
   * @param {any} data Data that will be inserted.
   */
  insertBeginning(data) {
    const newNode = new SinglyLinkedNode(data)
    const currentHead = this.head
    this.head = newNode
    this.head.next = currentHead
  }

  /**
   * Remove the begging node.
   */
  removeBeginning() {
    const currentNode = this.head
    if (this.head) {
      this.head = this.head.next
      currentNode.next = null
      return currentNode.data
    }

    return null
  }

  /**
   * Remove and return the removed data.
   * @param {number|function} finder a index number of a function the identify the data that will be removed.
   * @return {any} the removed data.
   */
  remove(finder) {
    let currentNode = this.head
    let deleteFromHead = false
    const finderType = typeof finder

    if (finderType !== 'number' && finderType !== 'function') {
      throw new InvalidArgument(
        'The finder should be a index number or a function.'
      )
    }

    if (!this.head) {
      return null
    }

    if (finderType === 'number') {
      for (let i = 0; currentNode && i < finder - 1; i++) {
        currentNode = currentNode.next
      }
      deleteFromHead = finder === 0
    } else if (finderType === 'function') {
      if (currentNode && !finder(currentNode.data)) {
        for (
          let i = 0;
          currentNode.next && !finder(currentNode.next.data);
          i++
        ) {
          currentNode = currentNode.next
        }
      } else {
        deleteFromHead = true
      }
    }

    if (deleteFromHead) {
      this.head = this.head.next
      return currentNode.data
    } else if (currentNode.next) {
      const removedData = currentNode.next.data
      currentNode.next = currentNode.next.next
      return removedData
    } else {
      return null
    }
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

    if (currentNode) {
      return currentNode
    } else {
      return null
    }
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

  isEmpty() {
    return this.head === null
  }

  /**
   * Get the linked list represented as string.
   */
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

/**
 * A Singly Linked List Node
 */
class SinglyLinkedNode {
  constructor(data = null) {
    this.data = data
    this.next = null
  }
}

module.exports = SinglyLinkedList
