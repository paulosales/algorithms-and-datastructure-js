/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

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
