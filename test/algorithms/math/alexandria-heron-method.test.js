/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

const sqrt = require('../../../src/algorithms/math/alexandria-heron-method/sqrt')
const expect = require('chai').expect

describe('Alexandria Heron Square Root Method', () => {
  context('when calculates square root of 4 16 and 10', () => {
    it('should return 2.0, 4.0, and 3.162', () => {
      const n1 = sqrt(4.0)
      const n2 = sqrt(16.0)
      const n3 = sqrt(10.0)
      expect(n1.toFixed(3)).to.be.equal('2.000')
      expect(n2.toFixed(3)).to.be.equal('4.000')
      expect(n3.toFixed(3)).to.be.equal('3.162')
    })
  })
})
