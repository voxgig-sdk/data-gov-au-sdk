
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { DataGovAuSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await DataGovAuSDK.test()
    equal(null !== testsdk, true)
  })

})
