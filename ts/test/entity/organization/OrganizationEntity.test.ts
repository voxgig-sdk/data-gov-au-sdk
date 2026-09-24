

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"date-time","h":"Created","n":"created","r":false,"t":"`$STRING`","key$":"created","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"image_url":{"a":true,"fo":"uri","h":"Image Url","n":"image_url","r":false,"t":"`$STRING`","key$":"image_url","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":4},"package_count":{"a":true,"h":"Package Count","n":"package_count","r":false,"t":"`$INTEGER`","key$":"package_count","index$":5},"packages":{"a":true,"h":"Packages","n":"packages","r":false,"t":"`$ARRAY`","key$":"packages","index$":6},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":1},"key$":"result","index$":7},"success":{"a":true,"h":"Success","n":"success","r":false,"t":"`$BOOLEAN`","key$":"success","index$":8},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":9}},"id":{"field":"id","name":"id"},"name":"organization","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /action/organization_list","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":false,"k":"query","n":"all_field","or":"all_field","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/action/organization_list","q":{"exist":["all_field","limit","offset"]},"r":{},"s":[{"lit":"action"},{"lit":"organization_list"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /action/organization_show","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":true,"k":"query","n":"include_dataset","or":"include_dataset","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"GET","o":"/action/organization_show","q":{"exist":["id","include_dataset"]},"r":{},"s":[{"lit":"action"},{"lit":"organization_show"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"organization","name__orig":"organization","Name":"Organization","name_":"organization","name-":"organization","NAME":"ORGANIZATION","index$":2}, {"active":true,"entity":"organization","key$":"BasicOrganizationFlow","kind":"basic","name":"BasicOrganizationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"organization_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"organization_ref01","srcdatavar":"organization_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_ref01"}}],"index$":1}]}, 'Organization', {"GET /action/organization_list":{"protocol":"http","operationId":"listOrganizations","responses":{"200":{"description":"Successful response with list of organizations","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"example":true,"key$":"success","type":"boolean"},"result":{"items":{"oneOf":[{"description":"Organization name when all_fields is false","type":"string"},{"description":"Organization details when all_fields is true","properties":{"created":{"format":"date-time","type":"string"},"description":{"type":"string"},"id":{"type":"string"},"image_url":{"format":"uri","type":"string"},"name":{"type":"string"},"package_count":{"type":"integer"},"title":{"type":"string"}},"type":"object"}]},"key$":"result","type":"array"}},"index$":0}}}}},"parameters":[{"name":"all_fields","in":"query","description":"Return full organization details instead of just names","required":false,"schema":{"type":"boolean","default":false},"index$":0},{"name":"limit","in":"query","description":"Maximum number of organizations to return","required":false,"schema":{"type":"integer","minimum":1},"index$":1},{"name":"offset","in":"query","description":"Offset for pagination","required":false,"schema":{"type":"integer","minimum":0,"default":0},"index$":2}],"securitySource":"unspecified","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-CKAN-API-Key","description":"API key for authentication (required for certain operations like creating or modifying datasets)"}}},"GET /action/organization_show":{"protocol":"http","operationId":"getOrganization","responses":{"200":{"description":"Successful response with organization details","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"example":true,"key$":"success","type":"boolean"},"result":{"key$":"result","properties":{"created":{"format":"date-time","type":"string","key$":"created"},"description":{"type":"string","key$":"description"},"id":{"type":"string","key$":"id"},"image_url":{"format":"uri","type":"string","key$":"image_url"},"name":{"type":"string","key$":"name"},"package_count":{"type":"integer","key$":"package_count"},"packages":{"items":{"type":"object"},"type":"array","key$":"packages"},"title":{"type":"string","key$":"title"}},"type":"object","index$":0}}}}}},"404":{"description":"Organization not found"}},"parameters":[{"name":"id","in":"query","description":"The ID or name of the organization","required":true,"schema":{"type":"string"},"index$":0},{"name":"include_datasets","in":"query","description":"Include a list of the organization's datasets","required":false,"schema":{"type":"boolean","default":true},"index$":1}],"securitySource":"unspecified","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-CKAN-API-Key","description":"API key for authentication (required for certain operations like creating or modifying datasets)"}}}})
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
  
