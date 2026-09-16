

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


describe('DatasetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DATA_GOV_AU_TEST_LIVE=TRUE.
  afterEach(liveDelay('DATA_GOV_AU_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DataGovAuSDK.test()
    const ent = testsdk.Dataset()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DATA_GOV_AU_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dataset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"author","req":false,"type":"`$STRING`","index$":0},{"active":true,"format":"email","name":"author_email","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"count","req":false,"short":"Total number of datasets matching the query","type":"`$INTEGER`","index$":2},{"active":true,"name":"facets","req":false,"short":"Faceted search results for aggregation","type":"`$OBJECT`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"license_id","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"license_title","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"maintainer","req":false,"type":"`$STRING`","index$":7},{"active":true,"format":"email","name":"maintainer_email","req":false,"type":"`$STRING`","index$":8},{"active":true,"format":"date-time","name":"metadata_created","req":false,"type":"`$STRING`","index$":9},{"active":true,"format":"date-time","name":"metadata_modified","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"notes","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"organization","req":false,"type":"`$OBJECT`","index$":13},{"active":true,"name":"resources","req":false,"type":"`$ARRAY`","index$":14},{"active":true,"name":"results","req":false,"type":"`$ARRAY`","index$":15},{"active":true,"name":"search_facets","req":false,"short":"Search facet information","type":"`$OBJECT`","index$":16},{"active":true,"name":"tags","req":false,"type":"`$ARRAY`","index$":17},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":18}],"id":{"field":"id","name":"id"},"name":"dataset","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"facet_field","orig":"facet_field","reqd":false,"type":"`$ARRAY`","index$":0},{"active":true,"example":"organization:health-dept","kind":"query","name":"fq","orig":"fq","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":false,"kind":"query","name":"include_private","orig":"include_private","reqd":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"example":"health","kind":"query","name":"q","orig":"q","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":10,"kind":"query","name":"row","orig":"row","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"example":"metadata_modified desc","kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"example":0,"kind":"query","name":"start","orig":"start","reqd":false,"type":"`$INTEGER`","index$":6}]},"contract":{"id":"GET /action/package_search","json":"{\"operationId\":\"searchDatasets\",\"parameters\":[{\"description\":\"Search query string to filter datasets\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"example\":\"health\",\"type\":\"string\"}},{\"description\":\"Filter query using Solr syntax for advanced filtering\",\"in\":\"query\",\"name\":\"fq\",\"required\":false,\"schema\":{\"example\":\"organization:health-dept\",\"type\":\"string\"}},{\"description\":\"Number of results to return per page\",\"in\":\"query\",\"name\":\"rows\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Offset for pagination\",\"in\":\"query\",\"name\":\"start\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Sort order for results (e.g., 'metadata_modified desc')\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"example\":\"metadata_modified desc\",\"type\":\"string\"}},{\"description\":\"Fields to facet on for aggregated results\",\"explode\":true,\"in\":\"query\",\"name\":\"facet.field\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Include private datasets (requires authentication)\",\"in\":\"query\",\"name\":\"include_private\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"result\":{\"properties\":{\"count\":{\"description\":\"Total number of datasets matching the query\",\"type\":\"integer\"},\"facets\":{\"description\":\"Faceted search results for aggregation\",\"type\":\"object\"},\"results\":{\"items\":{\"properties\":{\"author\":{\"description\":\"Author of the dataset\",\"type\":\"string\"},\"author_email\":{\"description\":\"Contact email for the dataset author\",\"format\":\"email\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the dataset\",\"type\":\"string\"},\"license_id\":{\"description\":\"License identifier for the dataset\",\"type\":\"string\"},\"license_title\":{\"description\":\"License title for the dataset\",\"type\":\"string\"},\"maintainer\":{\"description\":\"Maintainer of the dataset\",\"type\":\"string\"},\"maintainer_email\":{\"description\":\"Contact email for the dataset maintainer\",\"format\":\"email\",\"type\":\"string\"},\"metadata_created\":{\"description\":\"Date and time when the metadata was created\",\"format\":\"date-time\",\"type\":\"string\"},\"metadata_modified\":{\"description\":\"Date and time when the metadata was last modified\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Machine-readable name of the dataset\",\"type\":\"string\"},\"notes\":{\"description\":\"Description of the dataset\",\"type\":\"string\"},\"organization\":{\"properties\":{\"description\":{\"description\":\"Organization description\",\"type\":\"string\"},\"id\":{\"description\":\"Organization ID\",\"type\":\"string\"},\"name\":{\"description\":\"Organization name\",\"type\":\"string\"},\"title\":{\"description\":\"Organization title\",\"type\":\"string\"}},\"type\":\"object\"},\"resources\":{\"description\":\"List of downloadable resources associated with the dataset\",\"items\":{\"properties\":{\"created\":{\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Resource description\",\"type\":\"string\"},\"format\":{\"description\":\"File format of the resource\",\"type\":\"string\"},\"id\":{\"description\":\"Resource ID\",\"type\":\"string\"},\"last_modified\":{\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Resource name\",\"type\":\"string\"},\"url\":{\"description\":\"URL to download the resource\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"tags\":{\"items\":{\"properties\":{\"display_name\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"description\":\"Human-readable title of the dataset\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"search_facets\":{\"description\":\"Search facet information\",\"type\":\"object\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with dataset search results\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"__type\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (required for certain operations like creating or modifying datasets)\",\"in\":\"header\",\"name\":\"X-CKAN-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/action/package_search","segments":[{"lit":"action"},{"lit":"package_search"}],"select":{"exist":["facet_field","fq","include_private","q","row","sort","start"]},"transform":{"req":"`reqdata`","res":"`body.result`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":false,"kind":"query","name":"include_tracking","orig":"include_tracking","reqd":false,"type":"`$BOOLEAN`","index$":1}]},"contract":{"id":"GET /action/package_show","json":"{\"operationId\":\"getDataset\",\"parameters\":[{\"description\":\"The ID or name of the dataset\",\"in\":\"query\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Include tracking information\",\"in\":\"query\",\"name\":\"include_tracking\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"result\":{\"properties\":{\"author\":{\"type\":\"string\"},\"author_email\":{\"format\":\"email\",\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"license_id\":{\"type\":\"string\"},\"license_title\":{\"type\":\"string\"},\"maintainer\":{\"type\":\"string\"},\"maintainer_email\":{\"format\":\"email\",\"type\":\"string\"},\"metadata_created\":{\"format\":\"date-time\",\"type\":\"string\"},\"metadata_modified\":{\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"notes\":{\"type\":\"string\"},\"organization\":{\"type\":\"object\"},\"resources\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"tags\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with dataset details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"message\":{\"example\":\"Not found\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Dataset not found\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (required for certain operations like creating or modifying datasets)\",\"in\":\"header\",\"name\":\"X-CKAN-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/action/package_show","segments":[{"lit":"action"},{"lit":"package_show"}],"select":{"exist":["id","include_tracking"]},"transform":{"req":"`reqdata`","res":"`body.result`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"dataset","name__orig":"dataset","Name":"Dataset","name_":"dataset","name-":"dataset","NAME":"DATASET","index$":0}, {"active":true,"entity":"dataset","key$":"BasicDatasetFlow","kind":"basic","name":"BasicDatasetFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"dataset_ref01","srcdatavar":"dataset_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dataset_ref01"}}],"index$":0}]}, 'Dataset')
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
  
