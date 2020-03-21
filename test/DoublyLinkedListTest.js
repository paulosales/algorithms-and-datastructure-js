/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

const { DoublyLinkedList, DoublyLinkedNode } = require('../src/linked-list/DoublyLinkedList');

const assert = require('chai').assert

describe('DoublyLinkedNode', () => {
  describe('#constructor', () => {
    context('with no parameters', () => {
      it('data should be undefined', () => {
        const list = new DoublyLinkedNode()
        assert.isNull(list.data)
      })
    })

    context('with one parameter', () => {
      it('data should have da parameter value', () => {
        const list = new DoublyLinkedNode(10)
        assert.equal(list.data, 10)
      })
    })
  })
})

describe('DoublyLinkedList', function () {
  describe('#get(index)', () => {
    context('get a item from a unexistent index', () => {
      const list = new DoublyLinkedList()
      const item = list.get(1)
      assert.isNull(item)
    })
  })

  describe('#insertBeginning(data)', function () {
    context('insert three items and remove them from head', () => {
      it('should insertBeginning three items to head', function () {
        const list = new DoublyLinkedList()
        const node1 = new DoublyLinkedNode(1)
        const node2 = new DoublyLinkedNode(2)
        const node3 = new DoublyLinkedNode(3)
        list.insertBeginning(node1)
        list.insertBeginning(node2)
        list.insertBeginning(node3)
        const first = list.get(0)
        const second = list.get(1)
        const third = list.get(2)
        assert.equal(first, node3, 'insertBeginning not working.')
        assert.equal(second, node2, 'insertBeginning not working.')
        assert.equal(third, node1, 'insertBeginning not working.')
      })
    })

    context('with a invalide node', () => {
      it('should raise an error.', function () {
        const list = new DoublyLinkedList()
        try {
          list.insertBeginning(1)
          assert.fail('should raise a InvalidArgument error.')
        } catch (e) {
          assert.equal(e.message, 'node should be a instance of DoublyLinkedNode')
        }
      })
    })
  })

  describe('#insertEnd(data)', function () {
    context('with a invalid node', () => {
      it('should raise a error', () => {
        const list = new DoublyLinkedList()
        try {
          list.insertEnd('')
        } catch (e) {
          assert.equal(e.message, 'node should be a instance of DoublyLinkedNode')
        }
      })
    })
  })

  describe('#removeBeginning()', function () {
    context('insert three items and remove them', () => {
      it('should be inserted and removed successfully', function () {
        const list = new DoublyLinkedList()
        const node1 = new DoublyLinkedNode(1)
        const node2 = new DoublyLinkedNode(2)
        const node3 = new DoublyLinkedNode(3)
        list.insertBeginning(node1)
        list.insertBeginning(node2)
        list.insertBeginning(node3)
        const first = list.removeBeginning()
        const second = list.removeBeginning()
        const third = list.removeBeginning()
        assert.equal(first, node3, 'removeBeginning not working.')
        assert.equal(second, node2, 'removeBeginning not working.')
        assert.equal(third, node1, 'removeBeginning not working.')
        assert.equal(list.head, null, 'removeBeginning not working.')
        assert.equal(list.tail, null, 'removeBeginning not working.')
      })
    })

    context('insert two items at the end and remove them from beginnig', () => {
      it('should insertEnd and removeBeginning two itens', function () {
        const list = new DoublyLinkedList()
        const node1 = new DoublyLinkedNode(1)
        const node2 = new DoublyLinkedNode(2)
        list.insertEnd(node1)
        list.insertEnd(node2)
        const second = list.removeBeginning()
        const first = list.removeBeginning()
        assert.equal(first, node2, 'removeBeginning not working.')
        assert.equal(second, node1, 'removeBeginning not working.')
        assert.equal(list.head, null, 'removeBeginning not working.')
        assert.equal(list.tail, null, 'removeBeginning not working.')
      })
    })

    context('remove from the end of a empy doubly liked list', () => {
      it('should return null', () => {
        const list = new DoublyLinkedList()
        const removed = list.removeEnd()
        assert.isNull(removed)
      })
    })

    context('remove from the beginning of a empy doubly liked list', () => {
      it('should return null', () => {
        const list = new DoublyLinkedList()
        const removed = list.removeBeginning()
        assert.isNull(removed)
      })
    })
  })

  describe('#insertEnd(data)', function () {
    it('should insertEnd three items', function () {
      const list = new DoublyLinkedList()
      const node1 = new DoublyLinkedNode(1)
      const node2 = new DoublyLinkedNode(2)
      const node3 = new DoublyLinkedNode(3)
      list.insertEnd(node1)
      list.insertEnd(node2)
      list.insertEnd(node3)
      const first = list.get(0)
      const second = list.get(1)
      const third = list.get(2)
      assert.equal(first, node1, 'insertEnd not working.')
      assert.equal(second, node2, 'insertEnd not working.')
      assert.equal(third, node3, 'insertEnd not working.')
    })
  })

  describe('#removeEnd()', function () {
    it('should insertEnd and removeEnd three items', function () {
      const list = new DoublyLinkedList()
      const node1 = new DoublyLinkedNode(1)
      const node2 = new DoublyLinkedNode(2)
      const node3 = new DoublyLinkedNode(3)
      list.insertEnd(node1)
      list.insertEnd(node2)
      list.insertEnd(node3)
      const first = list.removeEnd()
      const second = list.removeEnd()
      const third = list.removeEnd()
      assert.equal(first, node3, 'removeEnd not working.')
      assert.equal(second, node2, 'removeEnd not working.')
      assert.equal(third, node1, 'removeEnd not working.')
      assert.equal(list.head, null, 'removeEnd not working.')
      assert.equal(list.tail, null, 'removeEnd not working.')
    })

    it('should insertEnd and removeBeginning two itens', function () {
      const list = new DoublyLinkedList()
      const node1 = new DoublyLinkedNode(1)
      const node2 = new DoublyLinkedNode(2)
      list.insertEnd(node1)
      list.insertEnd(node2)
      const second = list.removeBeginning()
      const first = list.removeBeginning()
      assert.equal(first, node2, 'removeBeginning not working.')
      assert.equal(second, node1, 'removeBeginning not working.')
      assert.equal(list.head, null, 'removeBeginning not working.')
      assert.equal(list.tail, null, 'removeBeginning not working.')
    })

    it('removeEnd of an empty list', function () {
      const list = new DoublyLinkedList()
      const nullData = list.removeEnd()
      assert.isNull(nullData)
    })
  })
})
