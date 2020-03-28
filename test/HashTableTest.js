const HashTable = require('../src/hash/HashTable')
const chai = require('chai')
const dirtyChai = require('dirty-chai')
chai.use(dirtyChai)
const expect = chai.expect

describe('HashTable', () => {
  describe('#set', () => {
    context('when set three items a get these three items', () => {
      it('should save and receive the data sucessfuly', () => {
        const hashTable = new HashTable()
        hashTable.set('John', '343-2323')
        hashTable.set('Mary', '343-4545')
        hashTable.set('Smith', '343-2121')
        const number1 = hashTable.get('John')
        const number2 = hashTable.get('Mary')
        const number3 = hashTable.get('Smith')

        expect(number1).to.be.equal('343-2323')
        expect(number2).to.be.equal('343-4545')
        expect(number3).to.be.equal('343-2121')
      })
    })

    context('when the key already exists', () => {
      it('should update the value', () => {
        const hashTable = new HashTable()
        hashTable.set('John', '343-2323')
        const number1 = hashTable.get('John')
        expect(number1).to.be.equal('343-2323')

        hashTable.set('John', '343-2324')
        const number2 = hashTable.get('John')
        expect(number2).to.be.equal('343-2324')
      })
    })

    context('when the key hash collides', () => {
      it('should stores in the same linked list', () => {
        const hashTable = new HashTable(3)
        hashTable.set('Aa', '343-2323')
        hashTable.set('BB', '222-3434')

        const number1 = hashTable.get('Aa')
        const number2 = hashTable.get('BB')

        expect(number1).to.be.equal('343-2323')
        expect(number2).to.be.equal('222-3434')
      })
    })
  })

  describe('#get', () => {
    context('when try to get a non existent item', () => {
      it('should return null', () => {
        const hashTable = new HashTable()
        const noExistent = hashTable.get('John')

        expect(noExistent).to.be.null()
      })
    })
  })

  describe('#remove', () => {
    context('when remove one inserted item', () => {
      it('shoudl remove the inserted item sucessfully', () => {
        const hashTable = new HashTable()
        hashTable.set('John', '343-2323')
        const removed = hashTable.remove('John')
        const noExistent = hashTable.remove('John')
        expect(removed).to.be.equal('343-2323')
        expect(noExistent).to.be.null()
      })
    })
  })
})
