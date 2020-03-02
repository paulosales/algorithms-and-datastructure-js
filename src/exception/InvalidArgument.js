'use strict'

function InvalidArgument (message) {
  Error.call(this, message)
  this.message = message
}

InvalidArgument.prototype = Object.create(Error.prototype)
InvalidArgument.prototype.constructor = InvalidArgument

module.exports = { InvalidArgument }
