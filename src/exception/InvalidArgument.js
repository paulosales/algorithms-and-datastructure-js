/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

function InvalidArgument(message) {
  Error.call(this, message)
  this.message = message
}

InvalidArgument.prototype = Object.create(Error.prototype)
InvalidArgument.prototype.constructor = InvalidArgument

module.exports = { InvalidArgument }
