/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

const DoublyLinkedList = require('../../src/ds/linked-list/doubly-linked-list')
const InvalidArgument = require('../../src/ds/exception/invalid-argument')

const assert = require('chai').assert

describe('DoublyLinkedList', function() {
  describe('#get(index)', () => {
    context('get a item from a unexistent index', () => {
      const list = new DoublyLinkedList()
      const item = list.get(1)
      assert.isNull(item)
    })
  })

  describe('#unshift(data)', function() {
    context('insert three items and remove them from head', () => {
      it('should insert at the beginning three items to head', function() {
        const list = new DoublyLinkedList()
        const firstNode = list.unshift(1)
        const secondNode = list.unshift(2)
        const thirdNode = list.unshift(3)
        const first = list.get(0)
        const second = list.get(1)
        const third = list.get(2)
        assert.equal(first, 3, 'The data of the first node should be 3.')
        assert.equal(second, 2, 'The data of the second item should be 2.')
        assert.equal(third, 1, 'The data of the third item should be 1.')
        assert.equal(
          firstNode.data,
          third,
          'The data of the first inserted node should be at 3rd position.'
        )
        assert.equal(
          secondNode.data,
          second,
          'The data of the second inserted node should be at 2nd position.'
        )
        assert.equal(
          thirdNode.data,
          first,
          'The data of the third inserted node should be at 1st position.'
        )
      })
    })
  })

  describe('#push(data)', function() {
    context('with a invalid node', () => {
      it('should raise a error', () => {
        const list = new DoublyLinkedList()
        try {
          list.push('')
        } catch (e) {
          assert.equal(
            e.message,
            'node should be a instance of DoublyLinkedNode'
          )
        }
      })
    })
  })

  describe('#shift()', function() {
    context('insert three items and remove them from the beggining', () => {
      it('should be inserted and removed successfully', function() {
        const list = new DoublyLinkedList()
        list.unshift(1)
        list.unshift(2)
        list.unshift(3)
        const first = list.shift()
        const second = list.shift()
        const third = list.shift()
        assert.equal(
          first.data,
          3,
          'the data of the first removed node should be 3.'
        )
        assert.equal(
          second.data,
          2,
          'the data of the second removed node should be 2.'
        )
        assert.equal(
          third.data,
          1,
          'the data of the third removed node should be 1.'
        )
        assert.isNull(list.head)
        assert.isNull(list.tail)
      })
    })

    context('insert two items at the end and remove them from beginnig', () => {
      it('should insert at the end and remove at the beginning two itens', function() {
        const list = new DoublyLinkedList()
        list.push(1)
        list.push(2)
        const second = list.shift()
        const first = list.shift()
        assert.equal(first.data, 2)
        assert.equal(second.data, 1)
        assert.isNull(list.head)
        assert.isNull(list.tail)
      })
    })

    context('remove from the end of a empy doubly liked list', () => {
      it('should return null', () => {
        const list = new DoublyLinkedList()
        const removed = list.pop()
        assert.isNull(removed)
      })
    })

    context('remove from the beginning of a empy doubly liked list', () => {
      it('should return null', () => {
        const list = new DoublyLinkedList()
        const removed = list.shift()
        assert.isNull(removed)
      })
    })
  })

  describe('#push(data)', function() {
    it('should insert at the end three items', function() {
      const list = new DoublyLinkedList()
      list.push(1)
      list.push(2)
      list.push(3)
      const first = list.get(0)
      const second = list.get(1)
      const third = list.get(2)
      assert.equal(first, 1)
      assert.equal(second, 2)
      assert.equal(third, 3)
    })
  })

  describe('#pop()', function() {
    it('should insert at the end and remove at the end three items', function() {
      const list = new DoublyLinkedList()
      list.push(1)
      list.push(2)
      list.push(3)
      const first = list.pop()
      const second = list.pop()
      const third = list.pop()
      assert.equal(first.data, 3)
      assert.equal(second.data, 2)
      assert.equal(third.data, 1)
      assert.equal(list.head, null)
      assert.equal(list.tail, null)
    })

    it('should insert at the end and remove at the beginning two itens', function() {
      const list = new DoublyLinkedList()
      list.push(1)
      list.push(2)
      const second = list.shift()
      const first = list.shift()
      assert.equal(first.data, 2)
      assert.equal(second.data, 1)
      assert.equal(list.head, null)
      assert.equal(list.tail, null)
    })

    it('removeEnd of an empty list', function() {
      const list = new DoublyLinkedList()
      const nullData = list.pop()
      assert.isNull(nullData)
    })
  })

  describe('#remove(node)', () => {
    let list = null

    beforeEach(() => {
      list = new DoublyLinkedList()
      list.push(1)
      list.push(2)
      list.push(3)
    })

    context('when remove a node from head from the list 1 -> 2 -> 3', () => {
      it('should remove the item 1 from the list', () => {
        const node = list.head

        list.remove(node)

        assert.isNotNull(node)
        assert.equal(1, node.data)
        assert.equal(2, list.get(0))
        assert.equal(3, list.get(1))
      })
    })

    context('when remove a node from tail from the list 1 -> 2 -> 3', () => {
      it('should remove the item 3 from the list', () => {
        const node = list.tail

        list.remove(node)

        assert.isNotNull(node)
        assert.equal(3, node.data)
        assert.equal(1, list.get(0))
        assert.equal(2, list.get(1))
      })
    })

    context('when remove a node from middle from the list 1 -> 2 -> 3', () => {
      it('should remove the item 2 from the list', () => {
        const node = list.getNode(1)

        list.remove(node)

        assert.isNotNull(node)
        assert.equal(2, node.data)
        assert.equal(1, list.get(0))
        assert.equal(3, list.get(1))
      })
    })
  })

  describe('#get(finder)', function() {
    it('should get the right data using function', function() {
      const list = new DoublyLinkedList()
      list.unshift(1)
      list.unshift(2)
      list.unshift(3)
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

  describe('#clear', () => {
    context('when clear the list 1 -> 2 -> 3', () => {
      it('shoudl clear the list and the tail and the head should be null', () => {
        const list = new DoublyLinkedList()
        list.push(1)
        list.push(2)
        list.push(3)

        list.clear()

        assert.isNull(list.head)
        assert.isNull(list.tail)
        assert.isTrue(list.isEmpty())
      })
    })
  })

  context('insert 2 item and remove 2 items', () => {
    it('the list show be empty', () => {
      const list = new DoublyLinkedList()
      assert.isTrue(list.isEmpty())
      list.unshift(1)
      list.unshift(2)
      list.shift()
      list.shift()
      assert.isTrue(list.isEmpty())
    })
  })
})
