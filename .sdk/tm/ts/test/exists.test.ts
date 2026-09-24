
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { DataGovAuSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = DataGovAuSDK.test()
    equal(testsdk instanceof DataGovAuSDK, true,
      'DataGovAuSDK.test() must return a client synchronously')
  })

})
