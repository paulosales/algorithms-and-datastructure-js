/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

class Heap {
  constructor(compareFunc) {
    if (!compareFunc) {
      throw new Error('You should inform a compare function.')
    }
    if (typeof compareFunc !== 'function') {
      throw new Error('The compareFunc parameter should be a function.')
    }
    this._heap = []
    this.compareFunc = compareFunc
  }

  swap(a, b) {
    const tmp = this._heap[a]
    this._heap[a] = this._heap[b]
    this._heap[b] = tmp
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  getLeftChildIndex(index) {
    return index * 2 + 1
  }

  getRightChildIndex(index) {
    return index * 2 + 2
  }

  headpfyUp(index) {
    if (index === 0) {
      return
    }
    const parent = this.getParentIndex(index)
    if (this.compareFunc(this._heap[parent], this._heap[index]) > 0) {
      this.swap(parent, index)
      this.headpfyUp(parent)
    }
  }

  heapfyDown(index) {
    const left = this.getLeftChildIndex(index)
    const right = this.getRightChildIndex(index)
    let child = null
    if (left < this._heap.length && right < this._heap.length) {
      if (this.compareFunc(this._heap[left], this._heap[right]) > 0) {
        child = right
      } else {
        child = left
      }
    } else if (left < this._heap.length) {
      child = left
    } else if (right < this._heap.length) {
      child = right
    } else {
      return
    }

    if (this.compareFunc(this._heap[index], this._heap[child]) > 0) {
      this.swap(index, child)
      this.heapfyDown(child)
    }
  }

  insert(data) {
    this._heap.push(data)
    this.headpfyUp(this._heap.length - 1)
  }

  remove(data) {
    const index = this._heap.indexOf(data)
    if (index !== -1) {
      this._heap[index] = this._heap[this._heap.length - 1]
      this._heap.pop()
      this.heapfyDown(index)
    }
  }

  get() {
    if (this._heap.length) {
      return this._heap[0]
    } else {
      return undefined
    }
  }

  size() {
    return this._heap.length
  }

  extract() {
    const data = this._heap[0]
    this._heap[0] = this._heap[this._heap.length - 1]
    this._heap.pop()
    this.heapfyDown(0)
    return data
  }
}

module.exports = Heap
