/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

const SinglyLinkedList = require('../src/linked-list/SinglyLinkedList')
const InvalidArgument = require('../src/exception/InvalidArgument')
const chai = require('chai')

describe('SinglyLinkedList', function() {
  describe('#insertBeginning()', function() {
    it('should keep two values when insertBeginning two values', function() {
      const list = new SinglyLinkedList()
      list.insertBeginning(1)
      list.insertBeginning(2)
      chai.assert.equal(list.head.data, 2, 'insertBeginning not working')
      chai.assert.equal(list.head.next.data, 1, 'insertBeginning not working')
    })
  })

  describe('#removeBeginning()', function() {
    it('should remove one value when removeBeginning one value', function() {
      var list = new SinglyLinkedList()
      list.insertBeginning(1)
      list.insertBeginning(2)
      const removed = list.removeBeginning()
      chai.assert.equal(removed, 2, 'removeBeginning not working')
      chai.assert.equal(list.head.data, 1, 'removeBeginning not working')
    })

    it('should removeBeginning null from empty list', function() {
      const list = new SinglyLinkedList()
      const nullData = list.removeBeginning()
      chai.assert.isNull(nullData, 'removeBeginning not working')
    })
  })

  describe('#get(finder)', function() {
    it('should get the right data using index', function() {
      const list = new SinglyLinkedList()
      list.insertBeginning(1)
      list.insertBeginning(2)
      list.insertBeginning(3)
      const first = list.get(0)
      const second = list.get(1)
      const third = list.get(2)
      const inexistent = list.get(3)
      chai.assert.equal(first, 3, 'get not working')
      chai.assert.equal(second, 2, 'get not working')
      chai.assert.equal(third, 1, 'get not working')
      chai.assert.isNull(inexistent)
    })

    it('should get the right data using function', function() {
      const list = new SinglyLinkedList()
      list.insertBeginning(1)
      list.insertBeginning(2)
      list.insertBeginning(3)
      const first = list.get(data => data === 3)
      const second = list.get(data => data === 2)
      const third = list.get(data => data === 1)
      const inexistent = list.get(data => data === 4)
      chai.assert.equal(first, 3, 'get not working')
      chai.assert.equal(second, 2, 'get not working')
      chai.assert.equal(third, 1, 'get not working')
      chai.assert.isNull(inexistent)
    })

    it('should throws a InvalidArgument exception', function() {
      const list = new SinglyLinkedList()
      try {
        list.get('invalid')
        chai.assert.fail('A exception should be throw')
      } catch (e) {
        chai.assert.instanceOf(e, InvalidArgument)
      }
    })
  })

  describe('#toString()', function() {
    it('should return the righ string representation', function() {
      const list = new SinglyLinkedList()
      list.insertBeginning(1)
      list.insertBeginning(2)
      list.insertBeginning(3)
      const strRepresentation = list.toString()
      chai.assert.equal(
        strRepresentation,
        '3 -> 2 -> 1 -> ',
        'toString not working'
      )
    })
  })
})
