const { Queue } = require('../src/queue/Queue');
const { assert } = require('chai')

describe('Queue', function () {
  describe('#enqueue()', function () {
    it('should keep two values when enqueue and dequeue two values', function () {
      var queue = new Queue()
      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)
      assert.equal(queue.dequeue(), 1, 'push not working')
      assert.equal(queue.dequeue(), 2, 'push not working')
      assert.equal(queue.dequeue(), 3, 'push not working')
      assert.isNull(queue.dequeue(), 'push not working')
    })
  })

  describe('#dequeue()', function () {
    it('should get null when dequeue an empty queue', function () {
      var queue = new Queue()
      assert.isNull(queue.dequeue(), 'push not working')
    })
  })
})
