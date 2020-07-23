const BinaryTree = require('./binary-tree')

class BinaryTreeBuilder {
  constructor() {
    this._binaryTree = new BinaryTree()
  }

  static oneBynaryTree() {
    return new BinaryTreeBuilder()
  }

  withValue(value) {
    this._binaryTree.value = value
    return this
  }

  withLeft(left) {
    this._binaryTree.left = left
    return this
  }

  withRight(right) {
    this._binaryTree.right = right
    return this
  }

  build() {
    return this._binaryTree
  }
}

module.exports = BinaryTreeBuilder
