/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */
'use strict'

const LRUCache = require('../../../src/algorithms/cache/lru-cache')
const { assert } = require('chai')

describe('LRUCacge', () => {
  describe('#get', () => {
    const cache = new LRUCache(3)

    beforeEach(() => {
      cache.clear()
      cache.set('user1', 'Paulo')
      cache.set('user2', 'Kellina')
      cache.set('user3', 'Lara')
    })

    context(
      'when get the user1 and and inserted the user4 from the cache LRU user3, user2, user1',
      () => {
        it('should hit the item user1(move it to the beginnig), evict user2 and insert user4', () => {
          const hittedData = cache.get('user1')
          cache.set('user4', 'Livia')
          const evictedData = cache.get('user2')

          assert.equal('Paulo', hittedData)
          assert.isUndefined(evictedData)
        })
      }
    )
  })
})
