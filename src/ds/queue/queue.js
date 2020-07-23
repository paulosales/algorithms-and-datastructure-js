/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

const DoublyLinkedList = require('../linked-list/doubly-linked-list')
class Queue {
  constructor() {
    this.linkedList = new DoublyLinkedList()
  }

  isEmpty() {
    return this.linkedList.isEmpty()
  }

  enqueue(data) {
    this.linkedList.insertBeginning(data)
  }

  dequeue() {
    const removed = this.linkedList.removeEnd()
    if (removed) {
      return removed
    } else {
      return null
    }
  }
}

module.exports = Queue
