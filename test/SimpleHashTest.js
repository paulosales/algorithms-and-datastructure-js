const SimpleHash = require('../src/hash/SimpleHash')
const chai = require('chai')
const expect = chai.expect

describe('SimpleHash', () => {
  describe('#digest', () => {
    context('when calculate a hash of string abc', () => {
      it('should return 96354', () => {
        const hash = SimpleHash.digest('abc')
        expect(hash).to.be.equal(96354)
      })
    })

    context('when calculate a hash of empty string', () => {
      it('should return 0', () => {
        const hash = SimpleHash.digest('')
        expect(hash).to.be.equal(0)
      })
    })
  })
})
