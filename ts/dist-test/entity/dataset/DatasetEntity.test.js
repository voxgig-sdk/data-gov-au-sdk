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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "author": { "a": true, "h": "Author", "n": "author", "r": false, "t": "`$STRING`", "key$": "author", "index$": 0 }, "author_email": { "a": true, "fo": "email", "h": "Author Email", "n": "author_email", "r": false, "t": "`$STRING`", "key$": "author_email", "index$": 1 }, "count": { "a": true, "h": "Count", "n": "count", "r": false, "sh": "Total number of datasets matching the query", "t": "`$INTEGER`", "key$": "count", "index$": 2 }, "facets": { "a": true, "h": "Facets", "n": "facets", "r": false, "sh": "Faceted search results for aggregation", "t": "`$OBJECT`", "key$": "facets", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "license_id": { "a": true, "h": "License Id", "n": "license_id", "r": false, "t": "`$STRING`", "key$": "license_id", "index$": 5 }, "license_title": { "a": true, "h": "License Title", "n": "license_title", "r": false, "t": "`$STRING`", "key$": "license_title", "index$": 6 }, "maintainer": { "a": true, "h": "Maintainer", "n": "maintainer", "r": false, "t": "`$STRING`", "key$": "maintainer", "index$": 7 }, "maintainer_email": { "a": true, "fo": "email", "h": "Maintainer Email", "n": "maintainer_email", "r": false, "t": "`$STRING`", "key$": "maintainer_email", "index$": 8 }, "metadata_created": { "a": true, "fo": "date-time", "h": "Metadata Created", "n": "metadata_created", "r": false, "t": "`$STRING`", "key$": "metadata_created", "index$": 9 }, "metadata_modified": { "a": true, "fo": "date-time", "h": "Metadata Modified", "n": "metadata_modified", "r": false, "t": "`$STRING`", "key$": "metadata_modified", "index$": 10 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 11 }, "notes": { "a": true, "h": "Notes", "n": "notes", "r": false, "t": "`$STRING`", "key$": "notes", "index$": 12 }, "organization": { "a": true, "h": "Organization", "n": "organization", "r": false, "t": "`$OBJECT`", "key$": "organization", "index$": 13 }, "resources": { "a": true, "h": "Resources", "n": "resources", "r": false, "t": "`$ARRAY`", "key$": "resources", "index$": 14 }, "results": { "a": true, "h": "Results", "n": "results", "r": false, "t": "`$ARRAY`", "key$": "results", "index$": 15 }, "search_facets": { "a": true, "h": "Search Facets", "n": "search_facets", "r": false, "sh": "Search facet information", "t": "`$OBJECT`", "key$": "search_facets", "index$": 16 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "t": "`$ARRAY`", "key$": "tags", "index$": 17 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 18 } }, "id": { "field": "id", "name": "id" }, "name": "dataset", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /action/package_search", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "facet_field", "or": "facet_field", "r": false, "t": "`$ARRAY`", "index$": 0 }, { "a": true, "ex": "organization:health-dept", "k": "query", "n": "fq", "or": "fq", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": false, "k": "query", "n": "include_private", "or": "include_private", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "ex": "health", "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": 10, "k": "query", "n": "row", "or": "row", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "ex": "metadata_modified desc", "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": 0, "k": "query", "n": "start", "or": "start", "r": false, "t": "`$INTEGER`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/action/package_search", "q": { "exist": ["facet_field", "fq", "include_private", "q", "row", "sort", "start"] }, "r": {}, "s": [{ "lit": "action" }, { "lit": "package_search" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /action/package_show", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": false, "k": "query", "n": "include_tracking", "or": "include_tracking", "r": false, "t": "`$BOOLEAN`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/action/package_show", "q": { "exist": ["id", "include_tracking"] }, "r": {}, "s": [{ "lit": "action" }, { "lit": "package_show" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "dataset", "name__orig": "dataset", "Name": "Dataset", "name_": "dataset", "name-": "dataset", "NAME": "DATASET", "index$": 0 }, { "active": true, "entity": "dataset", "key$": "BasicDatasetFlow", "kind": "basic", "name": "BasicDatasetFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "dataset_ref01", "srcdatavar": "dataset_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dataset_ref01" } }], "index$": 0 }] }, 'Dataset', { "GET /action/package_search": { "protocol": "http", "operationId": "searchDatasets", "responses": { "200": { "description": "Successful response with dataset search results", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "example": true, "key$": "success", "type": "boolean" }, "result": { "key$": "result", "properties": { "count": { "description": "Total number of datasets matching the query", "type": "integer", "key$": "count" }, "facets": { "description": "Faceted search results for aggregation", "type": "object", "key$": "facets" }, "results": { "items": { "properties": { "author": { "description": "Author of the dataset", "type": "string" }, "author_email": { "description": "Contact email for the dataset author", "format": "email", "type": "string" }, "id": { "description": "Unique identifier for the dataset", "type": "string" }, "license_id": { "description": "License identifier for the dataset", "type": "string" }, "license_title": { "description": "License title for the dataset", "type": "string" }, "maintainer": { "description": "Maintainer of the dataset", "type": "string" }, "maintainer_email": { "description": "Contact email for the dataset maintainer", "format": "email", "type": "string" }, "metadata_created": { "description": "Date and time when the metadata was created", "format": "date-time", "type": "string" }, "metadata_modified": { "description": "Date and time when the metadata was last modified", "format": "date-time", "type": "string" }, "name": { "description": "Machine-readable name of the dataset", "type": "string" }, "notes": { "description": "Description of the dataset", "type": "string" }, "organization": { "properties": { "description": { "description": "Organization description", "type": "string" }, "id": { "description": "Organization ID", "type": "string" }, "name": { "description": "Organization name", "type": "string" }, "title": { "description": "Organization title", "type": "string" } }, "type": "object" }, "resources": { "description": "List of downloadable resources associated with the dataset", "items": { "properties": { "created": { "format": "date-time", "type": "string" }, "description": { "description": "Resource description", "type": "string" }, "format": { "description": "File format of the resource", "type": "string" }, "id": { "description": "Resource ID", "type": "string" }, "last_modified": { "format": "date-time", "type": "string" }, "name": { "description": "Resource name", "type": "string" }, "url": { "description": "URL to download the resource", "format": "uri", "type": "string" } }, "type": "object" }, "type": "array" }, "tags": { "items": { "properties": { "display_name": { "type": "string" }, "id": { "type": "string" }, "name": { "type": "string" } }, "type": "object" }, "type": "array" }, "title": { "description": "Human-readable title of the dataset", "type": "string" } }, "type": "object" }, "type": "array", "key$": "results" }, "search_facets": { "description": "Search facet information", "type": "object", "key$": "search_facets" } }, "type": "object", "index$": 0 } } } } } }, "400": { "description": "Bad request - invalid parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "object", "properties": { "message": { "type": "string" }, "__type": { "type": "string" } } } } } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "object", "properties": { "message": { "type": "string" } } } } } } } } }, "parameters": [{ "name": "q", "in": "query", "description": "Search query string to filter datasets", "required": false, "schema": { "type": "string", "example": "health" }, "index$": 0 }, { "name": "fq", "in": "query", "description": "Filter query using Solr syntax for advanced filtering", "required": false, "schema": { "type": "string", "example": "organization:health-dept" }, "index$": 1 }, { "name": "rows", "in": "query", "description": "Number of results to return per page", "required": false, "schema": { "type": "integer", "default": 10, "minimum": 1, "maximum": 1000 }, "index$": 2 }, { "name": "start", "in": "query", "description": "Offset for pagination", "required": false, "schema": { "type": "integer", "default": 0, "minimum": 0 }, "index$": 3 }, { "name": "sort", "in": "query", "description": "Sort order for results (e.g., 'metadata_modified desc')", "required": false, "schema": { "type": "string", "example": "metadata_modified desc" }, "index$": 4 }, { "name": "facet.field", "in": "query", "description": "Fields to facet on for aggregated results", "required": false, "schema": { "type": "array", "items": { "type": "string" } }, "style": "form", "explode": true, "index$": 5 }, { "name": "include_private", "in": "query", "description": "Include private datasets (requires authentication)", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 6 }], "securitySource": "unspecified", "securitySchemes": { "ApiKeyAuth": { "type": "apiKey", "in": "header", "name": "X-CKAN-API-Key", "description": "API key for authentication (required for certain operations like creating or modifying datasets)" } } }, "GET /action/package_show": { "protocol": "http", "operationId": "getDataset", "responses": { "200": { "description": "Successful response with dataset details", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "example": true, "key$": "success", "type": "boolean" }, "result": { "key$": "result", "properties": { "author": { "type": "string", "key$": "author" }, "author_email": { "format": "email", "type": "string", "key$": "author_email" }, "id": { "type": "string", "key$": "id" }, "license_id": { "type": "string", "key$": "license_id" }, "license_title": { "type": "string", "key$": "license_title" }, "maintainer": { "type": "string", "key$": "maintainer" }, "maintainer_email": { "format": "email", "type": "string", "key$": "maintainer_email" }, "metadata_created": { "format": "date-time", "type": "string", "key$": "metadata_created" }, "metadata_modified": { "format": "date-time", "type": "string", "key$": "metadata_modified" }, "name": { "type": "string", "key$": "name" }, "notes": { "type": "string", "key$": "notes" }, "organization": { "type": "object", "key$": "organization" }, "resources": { "items": { "type": "object" }, "type": "array", "key$": "resources" }, "tags": { "items": { "type": "object" }, "type": "array", "key$": "tags" }, "title": { "type": "string", "key$": "title" } }, "type": "object", "index$": 0 } } } } } }, "404": { "description": "Dataset not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "object", "properties": { "message": { "type": "string", "example": "Not found" } } } } } } } } }, "parameters": [{ "name": "id", "in": "query", "description": "The ID or name of the dataset", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "include_tracking", "in": "query", "description": "Include tracking information", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 1 }], "securitySource": "unspecified", "securitySchemes": { "ApiKeyAuth": { "type": "apiKey", "in": "header", "name": "X-CKAN-API-Key", "description": "API key for authentication (required for certain operations like creating or modifying datasets)" } } } });
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