/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

const InvalidArgument = require('../exception/invalid-argument')

/**
 * Trie data structure implementation. A Trie is an efficient information retrieval data structure.
 * Searches with Trie has the key length complexity. The time needed to a well balanced
 * Binary Search Tree is proportional to M * log(N), where M is maximum string length and N is the
 * number of keys in the tree. Trie is faster than BST, your complexity is O(M). The Achilles' heel
 * of Trie data structure is the required storage size.
 */
class Trie {
  /**
   * The trie constructor.
   */
  constructor() {
    this.head = new TrieNode()
  }

  /**
   * Check if a input data is valid.
   * @param {string} input the input data.
   * @param {string} name the input name.
   */
  checkInput(input, name) {
    if (typeof input === 'undefined') {
      throw new InvalidArgument(`The ${name} was not informed.`)
    }
    if (input === null) {
      throw new InvalidArgument(`The ${name} can not be null.`)
    }
    if (input === '') {
      throw new InvalidArgument(`The ${name} can not be a empty string.`)
    }
  }

  /**
   * Insert a word into a the trie data structure.
   * @param {string} word a word to insert into the Trie.
   */
  insert(word) {
    this.checkInput(word, 'word')

    let cursor = this.head
    word.split('').forEach(char => {
      if (!cursor.children[char]) {
        cursor.children[char] = new TrieNode()
      }
      cursor = cursor.children[char]
    })
    cursor.isCompleted = true
  }

  /**
   * Walks through a Trie following a word/path.
   * @param {string} word A word/path to walk trough.
   * @returns {TrieNode} the last node of the path.
   */
  walkThrough(word) {
    let cursor = this.head

    for (let i = 0; cursor && i < word.length; i++) {
      cursor = cursor.children[word.charAt(i)]
    }

    return cursor
  }

  /**
   * Check if there is in the Trie a word started with a given prefix.
   * @param {string} prefix a prefix word to check if there is a stored word in the Trie that starts with him.
   * @returns {boolean} returns true if there is a word in the Trie that starts with a given prefix.
   */
  startsWith(prefix) {
    this.checkInput(prefix, 'prefix')

    const cursor = this.walkThrough(prefix)

    return !!cursor
  }

  /**
   * Search for a enteire word into the Trie.
   * @param {string} word A word to search into the Trie.
   * @returns {boolean} If the word was found it returns true, otherwise it returns false.
   */
  search(word) {
    this.checkInput(word, 'word')

    const cursor = this.walkThrough(word)

    return !!cursor && cursor.isCompleted
  }
}

/**
 * A node element for a Trie data structure.
 */
class TrieNode {
  constructor() {
    this.children = {}
    this.isCompleted = false
  }
}

module.exports = Trie
