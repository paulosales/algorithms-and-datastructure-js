/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

const DoublyLinkedList = require('../../ds/linked-list/doubly-linked-list')

function LRUCache(capacity = 1024) {
  let _hashMap = {}
  const _linkedList = new DoublyLinkedList()
  const _capacity = capacity
  let _size = 0

  const _hit = function(node) {
    _linkedList.remove(node)
    _linkedList.unshift(node)
  }

  const _evict = function() {
    const node = _linkedList.pop()
    delete _hashMap[node.data.key]
    _size--
  }

  const _get = function(key) {
    const node = _hashMap[key]
    if (node) {
      _hit(node)
      return node.data.value
    }
    return undefined
  }

  const _set = function(key, value) {
    if (_size === _capacity) {
      _evict()
    }
    const node = _hashMap[key]

    if (node) {
      node.data.value = value
      _hit(node)
    } else {
      _size++
      const newNode = _linkedList.unshift({ key, value })
      _hashMap[key] = newNode
    }
  }

  const _getCapacity = function() {
    return _capacity
  }

  const _getSize = function() {
    return _size
  }

  const _clear = function() {
    _size = 0
    _hashMap = {}
    _linkedList.clear()
  }

  this.clear = _clear

  this.get = _get

  this.set = _set

  this.getCapacity = _getCapacity

  this.getSize = _getSize
}

module.exports = LRUCache
