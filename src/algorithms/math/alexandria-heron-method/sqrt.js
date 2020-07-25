/**
 * Copyright (c) 2019-present, Paulo Rogério Sales Santos - <paulosales@gmail.com>
 *
 * This source code is licensed under the MIT license found in then
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

function sqrt(n, precision = 0.000001) {
  let guess = n / 2
  while (Math.abs(guess * guess - n) > precision) {
    guess = (guess + n / guess) / 2
  }
  return guess
}

module.exports = sqrt
