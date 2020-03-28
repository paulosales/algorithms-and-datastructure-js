/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

var SinglyLinkedList = require('../linked-list/SinglyLinkedList')

class Stack {
  constructor() {
    this.linkedList = new SinglyLinkedList()
  }

  pop() {
    const removed = this.linkedList.removeBeginning()
    if (removed) {
      return removed
    } else {
      return null
    }
  }

  push(data) {
    this.linkedList.insertBeginning(data)
  }

  get(index) {
    return this.linkedList.get(index)
  }
}

module.exports = Stack
