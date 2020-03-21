/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

const chai = require('chai')
const { Stack } = require('../src/stack/Stack')

describe('Stack', function() {
  describe('#pop()', function() {
    it('should remove one value when pop one value', function() {
      const stack = new Stack()
      stack.push(1)
      stack.push(2)
      const removed1 = stack.pop()
      chai.assert.equal(removed1, 2, 'pop not working')
      chai.assert.equal(stack.get(0).data, 1, 'pop not working')
      const removed2 = stack.pop()
      chai.assert.equal(removed2, 1, 'pop not working')
      const removed3 = stack.pop()
      chai.assert.isNull(removed3, 'pop not working')
    })
  })

  describe('#get(index)', function() {
    it('should get the right data using index', function() {
      const stack = new Stack()
      stack.push(1)
      stack.push(2)
      stack.push(3)
      chai.assert(stack.get(0), 3, 'get not working')
      chai.assert(stack.get(1), 2, 'get not working')
      chai.assert(stack.get(1), 1, 'get not working')
    })
  })
})
