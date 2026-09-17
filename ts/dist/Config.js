"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'DataGovAu',
        slug: "data-gov-au",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://data.gov.au/data/api/3",
        auth: {
            prefix: '',
            name: 'X-CKAN-API-Key',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            dataset: {},
            metadata: {},
            organization: {},
        }
    };
    entity = {
        "dataset": {
            "fields": [
                {
                    "name": "author",
                    "type": "`$STRING`"
                },
                {
                    "format": "email",
                    "name": "author_email",
                    "type": "`$STRING`"
                },
                {
                    "name": "count",
                    "short": "Total number of datasets matching the query",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "facets",
                    "short": "Faceted search results for aggregation",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "license_id",
                    "type": "`$STRING`"
                },
                {
                    "name": "license_title",
                    "type": "`$STRING`"
                },
                {
                    "name": "maintainer",
                    "type": "`$STRING`"
                },
                {
                    "format": "email",
                    "name": "maintainer_email",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "metadata_created",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "metadata_modified",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "notes",
                    "type": "`$STRING`"
                },
                {
                    "name": "organization",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "resources",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "search_facets",
                    "short": "Search facet information",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "tags",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "title",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "dataset",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "facet_field",
                                        "orig": "facet_field",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": "organization:health-dept",
                                        "kind": "query",
                                        "name": "fq",
                                        "orig": "fq",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "include_private",
                                        "orig": "include_private",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "health",
                                        "kind": "query",
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 10,
                                        "kind": "query",
                                        "name": "row",
                                        "orig": "row",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "metadata_modified desc",
                                        "kind": "query",
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/action/package_search",
                            "segments": [
                                {
                                    "lit": "action"
                                },
                                {
                                    "lit": "package_search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "facet_field",
                                    "fq",
                                    "include_private",
                                    "q",
                                    "row",
                                    "sort",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "parts": [
                                "action",
                                "package_search"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "include_tracking",
                                        "orig": "include_tracking",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/action/package_show",
                            "segments": [
                                {
                                    "lit": "action"
                                },
                                {
                                    "lit": "package_show"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "include_tracking"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "parts": [
                                "action",
                                "package_show"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "metadata": {
            "fields": [
                {
                    "name": "result",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "success",
                    "type": "`$BOOLEAN`"
                }
            ],
            "name": "metadata",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "all_field",
                                        "orig": "all_field",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/action/tag_list",
                            "segments": [
                                {
                                    "lit": "action"
                                },
                                {
                                    "lit": "tag_list"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "all_field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "parts": [
                                "action",
                                "tag_list"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "organization": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "created",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "image_url",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "package_count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "packages",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "result",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "success",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "title",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "organization",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "all_field",
                                        "orig": "all_field",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "offset",
                                        "orig": "offset",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/action/organization_list",
                            "segments": [
                                {
                                    "lit": "action"
                                },
                                {
                                    "lit": "organization_list"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "all_field",
                                    "limit",
                                    "offset"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "parts": [
                                "action",
                                "organization_list"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "include_dataset",
                                        "orig": "include_dataset",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/action/organization_show",
                            "segments": [
                                {
                                    "lit": "action"
                                },
                                {
                                    "lit": "organization_show"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "include_dataset"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "parts": [
                                "action",
                                "organization_show"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map