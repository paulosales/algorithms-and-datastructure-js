/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

const { expect } = require('chai')
const depthFirstSearch = require('../../../src/algorithms/tree/depth-first-search')
const BinaryTreeBuilder = require('../../../src/ds/tree/binary-tree-builder')

describe('#depthFirstSearch', () => {
  context(
    'when searches on the tree with two nodes on the left and one on the right',
    () => {
      it('return a list with the order root, left, left, and right.', () => {
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

        const visitedNodes = depthFirstSearch(binaryTree)

        expect(visitedNodes).is.eql([1, 2, 4, 3])
      })
    }
  )
})
