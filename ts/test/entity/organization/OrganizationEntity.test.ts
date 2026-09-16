

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { DataGovAuSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('OrganizationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DATA_GOV_AU_TEST_LIVE=TRUE.
  afterEach(liveDelay('DATA_GOV_AU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DataGovAuSDK.test()
    const ent = testsdk.Organization()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DATA_GOV_AU_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"uri","name":"image_url","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"package_count","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"name":"packages","req":false,"type":"`$ARRAY`","index$":6},{"active":true,"name":"result","req":false,"type":"`$ARRAY`","union":{"branches":2,"count":1,"depth":1},"index$":7},{"active":true,"name":"success","req":false,"type":"`$BOOLEAN`","index$":8},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"organization","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":false,"kind":"query","name":"all_field","orig":"all_field","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /action/organization_list","json":"{\"operationId\":\"listOrganizations\",\"parameters\":[{\"description\":\"Return full organization details instead of just names\",\"in\":\"query\",\"name\":\"all_fields\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Maximum number of organizations to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Offset for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"result\":{\"items\":{\"oneOf\":[{\"description\":\"Organization name when all_fields is false\",\"type\":\"string\"},{\"description\":\"Organization details when all_fields is true\",\"properties\":{\"created\":{\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"image_url\":{\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"package_count\":{\"type\":\"integer\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"}]},\"type\":\"array\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of organizations\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (required for certain operations like creating or modifying datasets)\",\"in\":\"header\",\"name\":\"X-CKAN-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/action/organization_list","segments":[{"lit":"action"},{"lit":"organization_list"}],"select":{"exist":["all_field","limit","offset"]},"transform":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":true,"kind":"query","name":"include_dataset","orig":"include_dataset","reqd":false,"type":"`$BOOLEAN`","index$":1}]},"contract":{"id":"GET /action/organization_show","json":"{\"operationId\":\"getOrganization\",\"parameters\":[{\"description\":\"The ID or name of the organization\",\"in\":\"query\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Include a list of the organization's datasets\",\"in\":\"query\",\"name\":\"include_datasets\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"result\":{\"properties\":{\"created\":{\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"image_url\":{\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"package_count\":{\"type\":\"integer\"},\"packages\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with organization details\"},\"404\":{\"description\":\"Organization not found\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (required for certain operations like creating or modifying datasets)\",\"in\":\"header\",\"name\":\"X-CKAN-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/action/organization_show","segments":[{"lit":"action"},{"lit":"organization_show"}],"select":{"exist":["id","include_dataset"]},"transform":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"organization","name__orig":"organization","Name":"Organization","name_":"organization","name-":"organization","NAME":"ORGANIZATION","index$":2}, {"active":true,"entity":"organization","key$":"BasicOrganizationFlow","kind":"basic","name":"BasicOrganizationFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"organization_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"organization_ref01","srcdatavar":"organization_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_ref01"}}],"index$":1}]}, 'Organization')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let organization_ref01_data = Object.values(setup.data.existing.organization)[0] as any

    // LIST
    const organization_ref01_ent = client.Organization()
    const organization_ref01_match: any = {}

    const organization_ref01_list = (await organization_ref01_ent.list(organization_ref01_match)).map((e: any) => e.data())


    // LOAD
    const organization_ref01_match_dt0: any = {}
    organization_ref01_match_dt0.id = organization_ref01_data.id
    const organization_ref01_data_dt0 = (await organization_ref01_ent.load(organization_ref01_match_dt0)).data()
    assert(organization_ref01_data_dt0.id === organization_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization/OrganizationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = DataGovAuSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DATA_GOV_AU_TEST_ORGANIZATION_ENTID': idmap,
    'DATA_GOV_AU_TEST_LIVE': 'FALSE',
    'DATA_GOV_AU_TEST_EXPLAIN': 'FALSE',
    'DATA_GOV_AU_APIKEY': '',
  })

  idmap = env['DATA_GOV_AU_TEST_ORGANIZATION_ENTID']

  const live = 'TRUE' === env.DATA_GOV_AU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DATA_GOV_AU_TEST_ORGANIZATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new DataGovAuSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.DATA_GOV_AU_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.DATA_GOV_AU_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
