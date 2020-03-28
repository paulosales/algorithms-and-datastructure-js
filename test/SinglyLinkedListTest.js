/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

const SinglyLinkedList = require('../src/linked-list/SinglyLinkedList')
const InvalidArgument = require('../src/exception/InvalidArgument')
const chai = require('chai')
const dirtyChai = require('dirty-chai')
chai.use(dirtyChai)
const expect = chai.expect

describe('SinglyLinkedList', function() {
  describe('#insertBeginning()', function() {
    it('should keep two values when insertBeginning two values', function() {
      const list = new SinglyLinkedList()
      list.insertBeginning(1)
      list.insertBeginning(2)
      expect(list.head.data).to.be.equal(2)
      expect(list.head.next.data).to.be.equal(1)
    })
  })

  describe('#removeBeginning()', function() {
    it('should remove one value when removeBeginning one value', function() {
      var list = new SinglyLinkedList()
      list.insertBeginning(1)
      list.insertBeginning(2)
      const removed = list.removeBeginning()
      expect(removed).to.be.equal(2)
      expect(list.head.data).to.be.equal(1)
    })

    it('should removeBeginning null from empty list', function() {
      const list = new SinglyLinkedList()
      const nullData = list.removeBeginning()
      expect(nullData).to.be.null()
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
      expect(first).to.be.equal(3)
      expect(second).to.be.equal(2)
      expect(third).to.be.equal(1)
      expect(inexistent).to.be.null()
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
      expect(first).to.be.equal(3)
      expect(second).to.be.equal(2)
      expect(third).to.equal(1)
      expect(inexistent)
    })

    it('should throws a InvalidArgument exception', function() {
      const list = new SinglyLinkedList()
      try {
        list.get('invalid')
        expect.fail('A exception should be throw')
      } catch (e) {
        expect(e).to.be.an.instanceof(InvalidArgument)
      }
    })
  })

  describe('#remove(finder)', () => {
    context('when remove 3 inserted items from the index 0', () => {
      it('should remove each item sucessfully', () => {
        const list = new SinglyLinkedList()
        list.insertBeginning(1)
        list.insertBeginning(2)
        list.insertBeginning(3)

        const removed1 = list.remove(0)
        const removed2 = list.remove(0)
        const removed3 = list.remove(0)
        const removed4 = list.remove(0)

        expect(removed1).to.be.equal(3)
        expect(removed2).to.be.equal(2)
        expect(removed3).to.be.equal(1)
        expect(removed4).to.be.null()
      })
    })

    context('when remove 2 inserted items from the index 1', () => {
      it('should remove each item sucessfully', () => {
        const list = new SinglyLinkedList()
        list.insertBeginning(1)
        list.insertBeginning(2)
        list.insertBeginning(3)

        const removed1 = list.remove(1)
        const removed2 = list.remove(1)
        const removed3 = list.remove(1)

        expect(removed1).to.be.equal(2)
        expect(removed2).to.be.equal(1)
        expect(removed3).to.be.null()
      })
    })

    context('when remove 1 inserted items from the index 2', () => {
      it('should remove each item sucessfully', () => {
        const list = new SinglyLinkedList()
        list.insertBeginning(1)
        list.insertBeginning(2)
        list.insertBeginning(3)

        const removed1 = list.remove(2)
        const removed2 = list.remove(2)

        expect(removed1).to.be.equal(1)
        expect(removed2).to.be.null()
      })
    })

    context('when remove 3 inserted items using finder function', () => {
      it('should remove each item sucessfully', () => {
        const list = new SinglyLinkedList()
        list.insertBeginning(1)
        list.insertBeginning(2)
        list.insertBeginning(3)

        const removed1 = list.remove(data => data === 3)
        const removed2 = list.remove(data => data === 2)
        const removed3 = list.remove(data => data === 1)
        const removed4 = list.remove(data => data === 1)

        expect(removed1).to.be.equal(3)
        expect(removed2).to.be.equal(2)
        expect(removed3).to.be.equal(1)
        expect(removed4).to.be.null()
      })
    })

    context('when remove 2 inserted items using finder function', () => {
      it('should remove each item sucessfully', () => {
        const list = new SinglyLinkedList()
        list.insertBeginning(1)
        list.insertBeginning(2)
        list.insertBeginning(3)

        const removed1 = list.remove(data => data === 2)
        const removed2 = list.remove(data => data === 1)
        const removed3 = list.remove(data => data === 1)

        expect(removed1).to.be.equal(2)
        expect(removed2).to.be.equal(1)
        expect(removed3).to.be.null()
      })
    })

    context('when remove 1 inserted items using finder function', () => {
      it('should remove each item sucessfully', () => {
        const list = new SinglyLinkedList()
        list.insertBeginning(1)
        list.insertBeginning(2)
        list.insertBeginning(3)

        const removed1 = list.remove(data => data === 1)
        const removed2 = list.remove(data => data === 1)

        expect(removed1).to.be.equal(1)
        expect(removed2).to.be.null()
      })
    })

    context('when remove 1 inserted items using a invalid finder', () => {
      it('should raise a InvalidArgument exception', () => {
        const list = new SinglyLinkedList()
        try {
          list.remove('invalid')
          expect.fail('should throw a exception here.')
        } catch (e) {
          expect(e).to.be.an.instanceof(InvalidArgument)
        }
      })
    })
  })

  describe('#toString()', function() {
    it('should return the righ string representation', function() {
      const list = new SinglyLinkedList()
      list.insertBeginning(1)
      list.insertBeginning(2)
      list.insertBeginning(3)
      const strRepresentation = list.toString()
      expect(strRepresentation).to.be.equal(
        '3 -> 2 -> 1 -> ',
        'toString not working'
      )
    })
  })
})
