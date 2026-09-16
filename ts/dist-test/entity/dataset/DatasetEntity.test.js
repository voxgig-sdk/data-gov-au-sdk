"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('DatasetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DATA_GOV_AU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DATA_GOV_AU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.DataGovAuSDK.test();
        const ent = testsdk.Dataset();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DATA_GOV_AU_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'dataset.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "author", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "email", "name": "author_email", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "count", "req": false, "short": "Total number of datasets matching the query", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "facets", "req": false, "short": "Faceted search results for aggregation", "type": "`$OBJECT`", "index$": 3 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "license_id", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "license_title", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "maintainer", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "format": "email", "name": "maintainer_email", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "date-time", "name": "metadata_created", "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "format": "date-time", "name": "metadata_modified", "req": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "notes", "req": false, "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "organization", "req": false, "type": "`$OBJECT`", "index$": 13 }, { "active": true, "name": "resources", "req": false, "type": "`$ARRAY`", "index$": 14 }, { "active": true, "name": "results", "req": false, "type": "`$ARRAY`", "index$": 15 }, { "active": true, "name": "search_facets", "req": false, "short": "Search facet information", "type": "`$OBJECT`", "index$": 16 }, { "active": true, "name": "tags", "req": false, "type": "`$ARRAY`", "index$": 17 }, { "active": true, "name": "title", "req": false, "type": "`$STRING`", "index$": 18 }], "id": { "field": "id", "name": "id" }, "name": "dataset", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "facet_field", "orig": "facet_field", "reqd": false, "type": "`$ARRAY`", "index$": 0 }, { "active": true, "example": "organization:health-dept", "kind": "query", "name": "fq", "orig": "fq", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": false, "kind": "query", "name": "include_private", "orig": "include_private", "reqd": false, "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "example": "health", "kind": "query", "name": "q", "orig": "q", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "example": 10, "kind": "query", "name": "row", "orig": "row", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "example": "metadata_modified desc", "kind": "query", "name": "sort", "orig": "sort", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "example": 0, "kind": "query", "name": "start", "orig": "start", "reqd": false, "type": "`$INTEGER`", "index$": 6 }] }, "contract": { "id": "GET /action/package_search", "json": "{\"operationId\":\"searchDatasets\",\"parameters\":[{\"description\":\"Search query string to filter datasets\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"example\":\"health\",\"type\":\"string\"}},{\"description\":\"Filter query using Solr syntax for advanced filtering\",\"in\":\"query\",\"name\":\"fq\",\"required\":false,\"schema\":{\"example\":\"organization:health-dept\",\"type\":\"string\"}},{\"description\":\"Number of results to return per page\",\"in\":\"query\",\"name\":\"rows\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Offset for pagination\",\"in\":\"query\",\"name\":\"start\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Sort order for results (e.g., 'metadata_modified desc')\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"example\":\"metadata_modified desc\",\"type\":\"string\"}},{\"description\":\"Fields to facet on for aggregated results\",\"explode\":true,\"in\":\"query\",\"name\":\"facet.field\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Include private datasets (requires authentication)\",\"in\":\"query\",\"name\":\"include_private\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"result\":{\"properties\":{\"count\":{\"description\":\"Total number of datasets matching the query\",\"type\":\"integer\"},\"facets\":{\"description\":\"Faceted search results for aggregation\",\"type\":\"object\"},\"results\":{\"items\":{\"properties\":{\"author\":{\"description\":\"Author of the dataset\",\"type\":\"string\"},\"author_email\":{\"description\":\"Contact email for the dataset author\",\"format\":\"email\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the dataset\",\"type\":\"string\"},\"license_id\":{\"description\":\"License identifier for the dataset\",\"type\":\"string\"},\"license_title\":{\"description\":\"License title for the dataset\",\"type\":\"string\"},\"maintainer\":{\"description\":\"Maintainer of the dataset\",\"type\":\"string\"},\"maintainer_email\":{\"description\":\"Contact email for the dataset maintainer\",\"format\":\"email\",\"type\":\"string\"},\"metadata_created\":{\"description\":\"Date and time when the metadata was created\",\"format\":\"date-time\",\"type\":\"string\"},\"metadata_modified\":{\"description\":\"Date and time when the metadata was last modified\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Machine-readable name of the dataset\",\"type\":\"string\"},\"notes\":{\"description\":\"Description of the dataset\",\"type\":\"string\"},\"organization\":{\"properties\":{\"description\":{\"description\":\"Organization description\",\"type\":\"string\"},\"id\":{\"description\":\"Organization ID\",\"type\":\"string\"},\"name\":{\"description\":\"Organization name\",\"type\":\"string\"},\"title\":{\"description\":\"Organization title\",\"type\":\"string\"}},\"type\":\"object\"},\"resources\":{\"description\":\"List of downloadable resources associated with the dataset\",\"items\":{\"properties\":{\"created\":{\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Resource description\",\"type\":\"string\"},\"format\":{\"description\":\"File format of the resource\",\"type\":\"string\"},\"id\":{\"description\":\"Resource ID\",\"type\":\"string\"},\"last_modified\":{\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Resource name\",\"type\":\"string\"},\"url\":{\"description\":\"URL to download the resource\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"tags\":{\"items\":{\"properties\":{\"display_name\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"description\":\"Human-readable title of the dataset\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"search_facets\":{\"description\":\"Search facet information\",\"type\":\"object\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with dataset search results\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"__type\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (required for certain operations like creating or modifying datasets)\",\"in\":\"header\",\"name\":\"X-CKAN-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/action/package_search", "segments": [{ "lit": "action" }, { "lit": "package_search" }], "select": { "exist": ["facet_field", "fq", "include_private", "q", "row", "sort", "start"] }, "transform": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": false, "kind": "query", "name": "include_tracking", "orig": "include_tracking", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }] }, "contract": { "id": "GET /action/package_show", "json": "{\"operationId\":\"getDataset\",\"parameters\":[{\"description\":\"The ID or name of the dataset\",\"in\":\"query\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Include tracking information\",\"in\":\"query\",\"name\":\"include_tracking\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"result\":{\"properties\":{\"author\":{\"type\":\"string\"},\"author_email\":{\"format\":\"email\",\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"license_id\":{\"type\":\"string\"},\"license_title\":{\"type\":\"string\"},\"maintainer\":{\"type\":\"string\"},\"maintainer_email\":{\"format\":\"email\",\"type\":\"string\"},\"metadata_created\":{\"format\":\"date-time\",\"type\":\"string\"},\"metadata_modified\":{\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"notes\":{\"type\":\"string\"},\"organization\":{\"type\":\"object\"},\"resources\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"tags\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with dataset details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"message\":{\"example\":\"Not found\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Dataset not found\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (required for certain operations like creating or modifying datasets)\",\"in\":\"header\",\"name\":\"X-CKAN-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/action/package_show", "segments": [{ "lit": "action" }, { "lit": "package_show" }], "select": { "exist": ["id", "include_tracking"] }, "transform": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "dataset", "name__orig": "dataset", "Name": "Dataset", "name_": "dataset", "name-": "dataset", "NAME": "DATASET", "index$": 0 }, { "active": true, "entity": "dataset", "key$": "BasicDatasetFlow", "kind": "basic", "name": "BasicDatasetFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "dataset_ref01", "srcdatavar": "dataset_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dataset_ref01" } }], "index$": 0 }] }, 'Dataset');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let dataset_ref01_data = Object.values(setup.data.existing.dataset)[0];
        // LOAD
        const dataset_ref01_ent = client.Dataset();
        const dataset_ref01_match_dt0 = {};
        dataset_ref01_match_dt0.id = dataset_ref01_data.id;
        const dataset_ref01_data_dt0 = (await dataset_ref01_ent.load(dataset_ref01_match_dt0)).data();
        (0, node_assert_1.default)(dataset_ref01_data_dt0.id === dataset_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/dataset/DatasetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.DataGovAuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['dataset01', 'dataset02', 'dataset03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DATA_GOV_AU_TEST_DATASET_ENTID': idmap,
        'DATA_GOV_AU_TEST_LIVE': 'FALSE',
        'DATA_GOV_AU_TEST_EXPLAIN': 'FALSE',
        'DATA_GOV_AU_APIKEY': '',
    });
    idmap = env['DATA_GOV_AU_TEST_DATASET_ENTID'];
    const live = 'TRUE' === env.DATA_GOV_AU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DATA_GOV_AU_TEST_DATASET_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.DataGovAuSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=DatasetEntity.test.js.map