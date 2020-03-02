'use strict'

var { SinglyLinkedList, SinglyLinkedNode } = require("../linked-list/SinglyLinkedList")

class Stack {
  constructor () {
    this.linkedList = new SinglyLinkedList()
  }

  pop () {
    const removed = this.linkedList.removeBeginning()
    if (removed) {
      return removed.data
    } else {
      return null
    }
  }

  push (data) {
    const node = new SinglyLinkedNode(data)
    this.linkedList.insertBeginning(node)
  }

  get (index) {
    return this.linkedList.get(index)
  }
}

module.exports = { Stack }
