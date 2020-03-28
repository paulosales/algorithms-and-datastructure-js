/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

const DoublyLinkedList = require('../src/linked-list/DoublyLinkedList')
const InvalidArgument = require('../src/exception/InvalidArgument')

const assert = require('chai').assert

describe('DoublyLinkedList', function() {
  describe('#get(index)', () => {
    context('get a item from a unexistent index', () => {
      const list = new DoublyLinkedList()
      const item = list.get(1)
      assert.isNull(item)
    })
  })

  describe('#insertBeginning(data)', function() {
    context('insert three items and remove them from head', () => {
      it('should insertBeginning three items to head', function() {
        const list = new DoublyLinkedList()
        list.insertBeginning(1)
        list.insertBeginning(2)
        list.insertBeginning(3)
        const first = list.get(0)
        const second = list.get(1)
        const third = list.get(2)
        assert.equal(first, 3, 'insertBeginning not working.')
        assert.equal(second, 2, 'insertBeginning not working.')
        assert.equal(third, 1, 'insertBeginning not working.')
      })
    })
  })

  describe('#insertEnd(data)', function() {
    context('with a invalid node', () => {
      it('should raise a error', () => {
        const list = new DoublyLinkedList()
        try {
          list.insertEnd('')
        } catch (e) {
          assert.equal(
            e.message,
            'node should be a instance of DoublyLinkedNode'
          )
        }
      })
    })
  })

  describe('#removeBeginning()', function() {
    context('insert three items and remove them', () => {
      it('should be inserted and removed successfully', function() {
        const list = new DoublyLinkedList()
        list.insertBeginning(1)
        list.insertBeginning(2)
        list.insertBeginning(3)
        const first = list.removeBeginning()
        const second = list.removeBeginning()
        const third = list.removeBeginning()
        assert.equal(first, 3, 'removeBeginning not working.')
        assert.equal(second, 2, 'removeBeginning not working.')
        assert.equal(third, 1, 'removeBeginning not working.')
        assert.equal(list.head, null, 'removeBeginning not working.')
        assert.equal(list.tail, null, 'removeBeginning not working.')
      })
    })

    context('insert two items at the end and remove them from beginnig', () => {
      it('should insertEnd and removeBeginning two itens', function() {
        const list = new DoublyLinkedList()
        list.insertEnd(1)
        list.insertEnd(2)
        const second = list.removeBeginning()
        const first = list.removeBeginning()
        assert.equal(first, 2, 'removeBeginning not working.')
        assert.equal(second, 1, 'removeBeginning not working.')
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

  describe('#insertEnd(data)', function() {
    it('should insertEnd three items', function() {
      const list = new DoublyLinkedList()
      list.insertEnd(1)
      list.insertEnd(2)
      list.insertEnd(3)
      const first = list.get(0)
      const second = list.get(1)
      const third = list.get(2)
      assert.equal(first, 1, 'insertEnd not working.')
      assert.equal(second, 2, 'insertEnd not working.')
      assert.equal(third, 3, 'insertEnd not working.')
    })
  })

  describe('#removeEnd()', function() {
    it('should insertEnd and removeEnd three items', function() {
      const list = new DoublyLinkedList()
      list.insertEnd(1)
      list.insertEnd(2)
      list.insertEnd(3)
      const first = list.removeEnd()
      const second = list.removeEnd()
      const third = list.removeEnd()
      assert.equal(first, 3, 'removeEnd not working.')
      assert.equal(second, 2, 'removeEnd not working.')
      assert.equal(third, 1, 'removeEnd not working.')
      assert.equal(list.head, null, 'removeEnd not working.')
      assert.equal(list.tail, null, 'removeEnd not working.')
    })

    it('should insertEnd and removeBeginning two itens', function() {
      const list = new DoublyLinkedList()
      list.insertEnd(1)
      list.insertEnd(2)
      const second = list.removeBeginning()
      const first = list.removeBeginning()
      assert.equal(first, 2, 'removeBeginning not working.')
      assert.equal(second, 1, 'removeBeginning not working.')
      assert.equal(list.head, null, 'removeBeginning not working.')
      assert.equal(list.tail, null, 'removeBeginning not working.')
    })

    it('removeEnd of an empty list', function() {
      const list = new DoublyLinkedList()
      const nullData = list.removeEnd()
      assert.isNull(nullData)
    })
  })

  describe('#get(finder)', function() {
    it('should get the right data using function', function() {
      const list = new DoublyLinkedList()
      list.insertBeginning(1)
      list.insertBeginning(2)
      list.insertBeginning(3)
      const first = list.get(data => data === 3)
      const second = list.get(data => data === 2)
      const third = list.get(data => data === 1)
      const inexistent = list.get(data => data === 4)
      assert.equal(first, 3, 'get not working')
      assert.equal(second, 2, 'get not working')
      assert.equal(third, 1, 'get not working')
      assert.isNull(inexistent)
    })

    it('should throws a InvalidArgument exception', function() {
      const list = new DoublyLinkedList()
      try {
        list.get('invalid')
        assert.fail('A exception should be throw')
      } catch (e) {
        assert.instanceOf(e, InvalidArgument)
      }
    })
  })
})
