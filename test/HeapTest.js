/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

const { Heap } = require('../src/tree/Heap')
const { assert } = require('chai')

describe('Heap', function() {
  describe('#constructor', () => {
    context('with no compare function', () => {
      it('should fail', () => {
        try {
          const heap = new Heap()
          assert.fail('it should fail, but returned %s', heap.toString)
        } catch (e) {
          assert.equal(e.message, 'You should inform a compare function.')
        }
      })
    })

    context('with a invalid compare function', () => {
      it('should fail', () => {
        try {
          const heap = new Heap('invalid function')
          assert.fail('it should fail, but returned %s', heap.toString)
        } catch (e) {
          assert.equal(
            e.message,
            'The compareFunc parameter should be a function.'
          )
        }
      })
    })
  })

  describe('#get', () => {
    context('get from a empty heap', () => {
      it('should return undefined', () => {
        const heap = new Heap((a, b) => a - b)
        const value = heap.get()
        assert.isUndefined(value)
      })
    })
  })

  describe('#insert(data)', function() {
    it('should insert 4 items in que heap and check the heap integrity.', function() {
      const heap = new Heap((a, b) => a - b)
      heap.insert(8)
      heap.insert(4)
      heap.insert(2)
      heap.insert(7)
      const value = heap.get()
      assert.equal(value, 2, `O valor esperado é 2 e veio ${value}.`)
    })
  })

  describe('#extract()', function() {
    it('should insert 4 items in que heap and extract the min value.', function() {
      const heap = new Heap((a, b) => a - b)
      heap.insert(8)
      heap.insert(4)
      heap.insert(2)
      heap.insert(7)

      const value1 = heap.extract()
      assert.equal(value1, 2, `O valor esperado é 2 e veio ${value1}.`)
      assert.equal(
        heap.size(),
        3,
        `O valor esperado é 3 e veio ${heap.size()}.`
      )

      const value2 = heap.extract()
      assert.equal(value2, 4, `O valor esperado é 4 e veio ${value2}.`)
      assert.equal(
        heap.size(),
        2,
        `O valor esperado é 2 e veio ${heap.size()}.`
      )

      const value3 = heap.extract()
      assert.equal(value3, 7, `O valor esperado é 7 e veio ${value3}.`)
      assert.equal(
        heap.size(),
        1,
        `O valor esperado é 1 e veio ${heap.size()}.`
      )

      const value4 = heap.extract()
      assert.equal(value4, 8, `O valor esperado é 8 e veio ${value4}.`)
      assert.equal(
        heap.size(),
        0,
        `O valor esperado é 0 e veio ${heap.size()}.`
      )
    })
  })

  describe('#remove()', function() {
    it('inserting 4 items and removing', () => {
      const heap = new Heap((a, b) => a - b)
      heap.insert(8)
      heap.insert(4)
      heap.insert(2)
      heap.insert(7)

      heap.remove(100)
      assert.equal(heap.size(), 4)

      heap.remove(4)
      assert.equal(heap.size(), 3)
      assert.equal(heap.get(), 2)

      heap.remove(2)
      assert.equal(heap.size(), 2)
      assert.equal(heap.get(), 7)

      heap.remove(8)
      assert.equal(heap.size(), 1)
      assert.equal(heap.get(), 7)

      heap.remove(7)
      assert.equal(heap.size(), 0)
    })
  })
})
