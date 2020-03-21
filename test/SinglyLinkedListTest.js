/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

const {
  SinglyLinkedList,
  SinglyLinkedNode,
} = require('../src/linked-list/SinglyLinkedList')
const { InvalidArgument } = require('../src/exception/InvalidArgument')
const chai = require('chai')

describe('SinglyLinkedNode', () => {
  describe('#constructor', () => {
    context('with no parameters', () => {
      it('data should be undefined', () => {
        const list = new SinglyLinkedNode()
        chai.assert.isNull(list.data)
      })
    })

    context('with one parameter', () => {
      it('data should have da parameter value', () => {
        const list = new SinglyLinkedNode(10)
        chai.assert.equal(list.data, 10)
      })
    })
  })
})

describe('SinglyLinkedList', function() {
  describe('#insertBeginning()', function() {
    it('should keep two values when insertBeginning two values', function() {
      const list = new SinglyLinkedList()
      const node1 = new SinglyLinkedNode(1)
      const node2 = new SinglyLinkedNode(2)
      list.insertBeginning(node1)
      list.insertBeginning(node2)
      chai.assert.equal(list.head, node2, 'insertBeginning not working')
      chai.assert.equal(list.head.next, node1, 'insertBeginning not working')
    })

    it("should raise a error if don't pass a SinglyLinkedNode as a parameter.", function() {
      const list = new SinglyLinkedList()
      try {
        list.insertBeginning(1)
        chai.assert.fail('should raise an invalid argument error')
      } catch (e) {
        if (e instanceof InvalidArgument) {
          chai.assert.isOk(true)
        } else {
          throw e
        }
      }
    })
  })

  describe('#removeBeginning()', function() {
    it('should remove one value when removeBeginning one value', function() {
      var list = new SinglyLinkedList()
      const node1 = new SinglyLinkedNode(1)
      const node2 = new SinglyLinkedNode(2)
      list.insertBeginning(node1)
      list.insertBeginning(node2)
      const removed = list.removeBeginning()
      chai.assert.equal(removed, node2, 'removeBeginning not working')
      chai.assert.equal(list.head, node1, 'removeBeginning not working')
    })

    it('should removeBeginning null from empty list', function() {
      const list = new SinglyLinkedList()
      const nullData = list.removeBeginning()
      chai.assert.isNull(nullData, 'removeBeginning not working')
    })
  })

  describe('#get(index)', function() {
    it('should get the right data using index', function() {
      const list = new SinglyLinkedList()
      const node1 = new SinglyLinkedNode(1)
      const node2 = new SinglyLinkedNode(2)
      const node3 = new SinglyLinkedNode(3)
      list.insertBeginning(node1)
      list.insertBeginning(node2)
      list.insertBeginning(node3)
      const first = list.get(0)
      const second = list.get(1)
      const third = list.get(2)
      const inexistent = list.get(3)
      chai.assert.equal(first, node3, 'get not working')
      chai.assert.equal(second, node2, 'get not working')
      chai.assert.equal(third, node1, 'get not working')
      chai.assert.isNull(inexistent)
    })
  })

  describe('#toString()', function() {
    it('should return the righ string representation', function() {
      const list = new SinglyLinkedList()
      const node1 = new SinglyLinkedNode(1)
      const node2 = new SinglyLinkedNode(2)
      const node3 = new SinglyLinkedNode(3)
      list.insertBeginning(node1)
      list.insertBeginning(node2)
      list.insertBeginning(node3)
      const strRepresentation = list.toString()
      chai.assert.equal(
        strRepresentation,
        '3 -> 2 -> 1 -> ',
        'toString not working'
      )
    })
  })

  describe('#insertAfter()', function() {
    context('with valid nodes', () => {
      it('should insert a node after another', function() {
        const list = new SinglyLinkedList()
        const node1 = new SinglyLinkedNode(1)
        const node2 = new SinglyLinkedNode(2)
        const node3 = new SinglyLinkedNode(3)
        list.insertBeginning(node1)
        list.insertAfter(node1, node3)
        list.insertAfter(node1, node2)
        const strRepresentation = list.toString()
        chai.assert.equal(
          strRepresentation,
          '1 -> 2 -> 3 -> ',
          'toString not working'
        )
      })
    })

    context('with invalid nodes', () => {
      it('should fail', function() {
        const list = new SinglyLinkedList()
        const node1 = new SinglyLinkedNode(1)
        try {
          list.insertAfter(node1, '')
        } catch (e) {
          chai.assert.equal(
            e.message,
            'newNode should be a instance of SinglyLinkedNode.'
          )
        }

        try {
          list.insertAfter('', node1)
        } catch (e) {
          chai.assert.equal(
            e.message,
            'node should be a instance of SinglyLinkedNode.'
          )
        }
      })
    })
  })

  describe('#remove(node)', function() {
    it('should remove a node', function() {
      const list = new SinglyLinkedList()
      const node1 = new SinglyLinkedNode(1)
      const node2 = new SinglyLinkedNode(2)
      const node3 = new SinglyLinkedNode(3)
      list.insertBeginning(node3)
      list.insertBeginning(node2)
      list.insertBeginning(node1)

      list.remove(node2)
      chai.assert.equal(list.toString(), '1 -> 3 -> ', 'toString not working')

      list.remove(node1)
      chai.assert.equal(list.toString(), '3 -> ', 'toString not working')

      list.remove(node3)
      chai.assert.equal(list.toString(), '', 'toString not working')
    })
  })
})
