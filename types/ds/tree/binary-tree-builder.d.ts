declare class BinaryTreeBuilder {
  constructor()

  static oneBynaryTree(): BinaryTreeBuilder
  withValue(value: any): BinaryTreeBuilder
  withLeft(left: BinaryTree): BinaryTreeBuilder
  withRight(right: BinaryTree): BinaryTreeBuilder
  build(): BinaryTree
}

export default BinaryTreeBuilder
