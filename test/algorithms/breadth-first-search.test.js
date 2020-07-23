const chai = require('chai')
const breadthFirstSearch = require('../../src/algorithms/tree/breadth-first-search')
const BinaryTreeBuilder = require('../../src/ds/tree/binary-tree-builder')
const expect = chai.expect

describe('Breadth-first Search', () => {
  context(
    'when searches on the tree with two nodes on the left and one on the right',
    () => {
      it('return a list with the order root, left, right, and left.', () => {
        const binaryTree = BinaryTreeBuilder.oneBynaryTree()
          .withValue(1)
          .withLeft(
            BinaryTreeBuilder.oneBynaryTree()
              .withValue(2)
              .withLeft(
                BinaryTreeBuilder.oneBynaryTree()
                  .withValue(4)
                  .build()
              )
              .build()
          )
          .withRight(
            BinaryTreeBuilder.oneBynaryTree()
              .withValue(3)
              .build()
          )
          .build()

        const visitedNodes = breadthFirstSearch(binaryTree)

        expect(visitedNodes).is.eql([1, 2, 3, 4])
      })
    }
  )
})
