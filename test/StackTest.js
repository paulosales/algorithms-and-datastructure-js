const chai = require('chai');
const { Stack } = require('../src/stack/Stack');

describe('Stack', function () {
  describe('#pop()', function () {
    it('should remove one value when pop one value', function () {
      var queue = new Stack()
      queue.push(1)
      queue.push(2)
      var removed1 = queue.pop()
      chai.assert.equal(removed1, 2, 'pop not working')
      chai.assert.equal(queue.get(0).data, 1, 'pop not working')
      var removed2 = queue.pop()
      chai.assert.equal(removed2, 1, 'pop not working')
      var removed3 = queue.pop()
      chai.assert.isNull(removed3, 'pop not working')
    })
  })

  describe('#get(index)', function () {
    it('should get the right data using index', function () {
      var queue = new Stack()
      queue.push(1)
      queue.push(2)
      queue.push(3)
      chai.assert(queue.get(0), 3, 'get not working')
      chai.assert(queue.get(1), 2, 'get not working')
      chai.assert(queue.get(1), 1, 'get not working')
    })
  })
})
