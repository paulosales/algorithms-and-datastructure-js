/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

const SinglyLinkedList = require('../linked-list/singly-linked-list')
const SimpleHash = require('./simple-hash')

/**
 * Implementation of a Hash Table data structure.
 */
class HashTable {
  /**
   * Creates a hash table.
   * @param {number} size The table size
   */
  constructor(size = 100) {
    this.table = []
    this.size = size

    for (let i = 0; i < size; i++) {
      this.table[i] = new SinglyLinkedList()
    }
  }

  /**
   * Returns the table index.
   * @param {string} key a key that will be used to calculate the table index.
   * @returns {number} the table index.
   */
  getTableIndex(key) {
    const hash = SimpleHash.digest(key)
    return hash % this.size
  }

  /**
   * Add a key-value data into the hash table.
   * @param {string} key The key of the value that gonna be inserted.
   * @param {any} value The value that will be inserted.
   */
  set(key, value) {
    const index = this.getTableIndex(key)
    const ll = this.table[index]
    const node = ll.getNode(data => data.key === key)
    if (!node) {
      ll.insertBeginning({ key, value })
    } else {
      node.data.value = value
    }
  }

  /**
   * Get the value inserted with the a given key.
   * @param {string} key The value key.
   * @returns {any} the value associated with the key.
   */
  get(key) {
    const index = this.getTableIndex(key)
    const ll = this.table[index]

    const node = ll.getNode(data => data.key === key)

    if (node) {
      return node.data.value
    } else {
      return null
    }
  }

  /**
   * Remove a data from hash table.
   * @param {string} key the key of the value that will be inserted.
   * @returns {any} the value removed.
   */
  remove(key) {
    const index = this.getTableIndex(key)
    const ll = this.table[index]

    const node = ll.remove(data => data.key === key)

    if (node) {
      return node.value
    } else {
      return null
    }
  }
}

module.exports = HashTable
