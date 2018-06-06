import test from 'tape-promise/tape'

import { InvalidDIDError } from '../../../lib/errors'

export function runErrorsTests() {
  test('InvalidDIDError', (t) => {
    t.plan(3)
    const error = new InvalidDIDError('the message')

    t.assert(error.message.indexOf('the message') !== -1, 'message field contains the message')
    t.equal(error.parameter, null)
    t.equal(error.param, undefined)
  })
}
