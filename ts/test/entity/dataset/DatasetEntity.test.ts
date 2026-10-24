

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { DataGovAuSDK, BaseFeature, config, stdutil } from '../../..'

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


describe('DatasetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DATA_GOV_AU_TEST_LIVE=TRUE.
  afterEach(liveDelay('DATA_GOV_AU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DataGovAuSDK.test()
    const ent = testsdk.Dataset()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = DataGovAuSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Dataset().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DATA_GOV_AU_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dataset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author":{"a":true,"h":"Author","n":"author","r":false,"t":"`$STRING`","key$":"author","index$":0},"author_email":{"a":true,"fo":"email","h":"Author Email","n":"author_email","r":false,"t":"`$STRING`","key$":"author_email","index$":1},"count":{"a":true,"h":"Count","n":"count","r":false,"sh":"Total number of datasets matching the query","t":"`$INTEGER`","key$":"count","index$":2},"facets":{"a":true,"h":"Facets","n":"facets","r":false,"sh":"Faceted search results for aggregation","t":"`$OBJECT`","key$":"facets","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"license_id":{"a":true,"h":"License Id","n":"license_id","r":false,"t":"`$STRING`","key$":"license_id","index$":5},"license_title":{"a":true,"h":"License Title","n":"license_title","r":false,"t":"`$STRING`","key$":"license_title","index$":6},"maintainer":{"a":true,"h":"Maintainer","n":"maintainer","r":false,"t":"`$STRING`","key$":"maintainer","index$":7},"maintainer_email":{"a":true,"fo":"email","h":"Maintainer Email","n":"maintainer_email","r":false,"t":"`$STRING`","key$":"maintainer_email","index$":8},"metadata_created":{"a":true,"fo":"date-time","h":"Metadata Created","n":"metadata_created","r":false,"t":"`$STRING`","key$":"metadata_created","index$":9},"metadata_modified":{"a":true,"fo":"date-time","h":"Metadata Modified","n":"metadata_modified","r":false,"t":"`$STRING`","key$":"metadata_modified","index$":10},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":11},"notes":{"a":true,"h":"Notes","n":"notes","r":false,"t":"`$STRING`","key$":"notes","index$":12},"organization":{"a":true,"h":"Organization","n":"organization","r":false,"t":"`$OBJECT`","key$":"organization","index$":13},"resources":{"a":true,"h":"Resources","n":"resources","r":false,"t":"`$ARRAY`","key$":"resources","index$":14},"results":{"a":true,"h":"Results","n":"results","r":false,"t":"`$ARRAY`","key$":"results","index$":15},"search_facets":{"a":true,"h":"Search Facets","n":"search_facets","r":false,"sh":"Search facet information","t":"`$OBJECT`","key$":"search_facets","index$":16},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"t":"`$ARRAY`","key$":"tags","index$":17},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":18}},"id":{"field":"id","name":"id"},"name":"dataset","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /action/package_show","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":false,"k":"query","n":"include_tracking","or":"include_tracking","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"GET","o":"/action/package_show","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"action"},{"lit":"package_show"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0},{"a":true,"co":{"id":"GET /action/package_search","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"facet_field","or":"facet.field","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"ex":"organization:health-dept","k":"query","n":"fq","or":"fq","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":false,"k":"query","n":"include_private","or":"include_private","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"ex":"health","k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":10,"k":"query","n":"row","or":"rows","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":"metadata_modified desc","k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":0,"k":"query","n":"start","or":"start","r":false,"t":"`$INTEGER`","index$":6}]},"k":"http","m":"GET","o":"/action/package_search","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"action"},{"lit":"package_search"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"dataset","name__orig":"dataset","Name":"Dataset","name_":"dataset","name-":"dataset","NAME":"DATASET","index$":0}, {"active":true,"entity":"dataset","key$":"BasicDatasetFlow","kind":"basic","name":"BasicDatasetFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dataset_ref01","srcdatavar":"dataset_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dataset_ref01"}}],"index$":0}]}, 'Dataset', {"GET /action/package_show":{"protocol":"http","parameters":[{"name":"id","in":"query","description":"The ID or name of the dataset","required":true,"schema":{"type":"string"},"index$":0},{"name":"include_tracking","in":"query","description":"Include tracking information","required":false,"schema":{"type":"boolean","default":false},"index$":1}]},"GET /action/package_search":{"protocol":"http","parameters":[{"name":"q","in":"query","description":"Search query string to filter datasets","required":false,"schema":{"type":"string","example":"health"},"index$":0},{"name":"fq","in":"query","description":"Filter query using Solr syntax for advanced filtering","required":false,"schema":{"type":"string","example":"organization:health-dept"},"index$":1},{"name":"rows","in":"query","description":"Number of results to return per page","required":false,"schema":{"type":"integer","default":10,"minimum":1,"maximum":1000},"index$":2},{"name":"start","in":"query","description":"Offset for pagination","required":false,"schema":{"type":"integer","default":0,"minimum":0},"index$":3},{"name":"sort","in":"query","description":"Sort order for results (e.g., 'metadata_modified desc')","required":false,"schema":{"type":"string","example":"metadata_modified desc"},"index$":4},{"name":"facet.field","in":"query","description":"Fields to facet on for aggregated results","required":false,"schema":{"type":"array","items":{"type":"string"}},"style":"form","explode":true,"index$":5},{"name":"include_private","in":"query","description":"Include private datasets (requires authentication)","required":false,"schema":{"type":"boolean","default":false},"index$":6}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dataset_ref01_data = Object.values(setup.data.existing.dataset)[0] as any

    // LOAD
    const dataset_ref01_ent = client.Dataset()
    const dataset_ref01_match_dt0: any = {}
    dataset_ref01_match_dt0.id = dataset_ref01_data.id
    const dataset_ref01_data_dt0 = (await dataset_ref01_ent.load(dataset_ref01_match_dt0)).data()
    assert(dataset_ref01_data_dt0.id === dataset_ref01_data.id)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dataset/DatasetTestData.json')

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
    ['dataset01','dataset02','dataset03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DATA_GOV_AU_TEST_DATASET_ENTID': idmap,
    'DATA_GOV_AU_TEST_LIVE': 'FALSE',
    'DATA_GOV_AU_TEST_EXPLAIN': 'FALSE',
    'DATA_GOV_AU_APIKEY': '',
  })

  idmap = env['DATA_GOV_AU_TEST_DATASET_ENTID']

  const live = 'TRUE' === env.DATA_GOV_AU_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DATA_GOV_AU_TEST_DATASET_ENTID']
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
  
