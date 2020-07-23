/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

const Stack = require('../../ds/stack/stack')

function depthFirstSearch(binaryTree) {
  const stack = new Stack()

  if (binaryTree) {
    stack.push(binaryTree)
  }

  const visitedNodes = []
  let node = null

  while (!stack.isEmpty()) {
    node = stack.pop()

    visitedNodes.push(node.value)

    if (node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }
  }

  return visitedNodes
}

module.exports = depthFirstSearch
