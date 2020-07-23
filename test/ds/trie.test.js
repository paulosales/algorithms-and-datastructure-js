const chai = require('chai')
const dirtyChai = require('dirty-chai')
const Trie = require('../../src/ds/trie/trie')
const InvalidArgument = require('../../src/ds/exception/invalid-argument')

chai.use(dirtyChai)

describe('Trie', () => {
  describe('#insert', () => {
    context('when insert 4 words', () => {
      it('should found all the 4 words', () => {
        const trie = new Trie()

        trie.insert('a')
        trie.insert('apple')
        trie.insert('to')
        trie.insert('top')

        chai.expect(trie.startsWith('a')).to.be.true()
        chai.expect(trie.startsWith('apple')).to.be.true()
        chai.expect(trie.startsWith('to')).to.be.true()
        chai.expect(trie.startsWith('top')).to.be.true()

        chai.expect(trie.search('a')).to.be.true()
        chai.expect(trie.search('apple')).to.be.true()
        chai.expect(trie.search('to')).to.be.true()
        chai.expect(trie.search('top')).to.be.true()
      })
    })

    context('when insert with no parameter', () => {
      it('should raise a InvalidArgument error', () => {
        const trie = new Trie()

        try {
          trie.insert()
          chai.expect.fail('InvalidArgument should be raised.')
        } catch (e) {
          chai.expect(e).to.be.an.instanceof(InvalidArgument)
          chai.expect(e.message, 'The word was not informed.')
        }
      })
    })

    context('when insert with null parameter', () => {
      it('should raise a InvalidArgument error', () => {
        const trie = new Trie()

        try {
          trie.insert(null)
          chai.expect.fail('InvalidArgument should be raised.')
        } catch (e) {
          chai.expect(e).to.be.an.instanceof(InvalidArgument)
          chai.expect(e.message, 'The word can not be null.')
        }
      })
    })

    context('when insert with empty string parameter', () => {
      it('should raise a InvalidArgument error', () => {
        const trie = new Trie()

        try {
          trie.insert('')
          chai.expect.fail('InvalidArgument should be raised.')
        } catch (e) {
          chai.expect(e).to.be.an.instanceof(InvalidArgument)
          chai.expect(e.message, 'The word can not be a empty string.')
        }
      })
    })
  })
})
