/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

const Queue = require('../../ds/queue/queue')

function breadthFirstSearch(binaryTree) {
  const visitedNodes = []

  const queue = new Queue()

  if (binaryTree) {
    queue.enqueue(binaryTree)
  }

  let node = null

  while (!queue.isEmpty()) {
    node = queue.dequeue()

    visitedNodes.push(node.value)

    if (node.left) {
      queue.enqueue(node.left)
    }

    if (node.right) {
      queue.enqueue(node.right)
    }
  }

  return visitedNodes
}

module.exports = breadthFirstSearch
