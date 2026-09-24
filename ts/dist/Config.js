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
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
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
                    "title": "Author",
                    "type": "`$STRING`"
                },
                {
                    "name": "author_email",
                    "title": "Author Email",
                    "type": "`$STRING`",
                    "format": "email"
                },
                {
                    "name": "count",
                    "title": "Count",
                    "type": "`$INTEGER`",
                    "short": "Total number of datasets matching the query"
                },
                {
                    "name": "facets",
                    "title": "Facets",
                    "type": "`$OBJECT`",
                    "short": "Faceted search results for aggregation"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "license_id",
                    "title": "License Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "license_title",
                    "title": "License Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "maintainer",
                    "title": "Maintainer",
                    "type": "`$STRING`"
                },
                {
                    "name": "maintainer_email",
                    "title": "Maintainer Email",
                    "type": "`$STRING`",
                    "format": "email"
                },
                {
                    "name": "metadata_created",
                    "title": "Metadata Created",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "metadata_modified",
                    "title": "Metadata Modified",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "notes",
                    "title": "Notes",
                    "type": "`$STRING`"
                },
                {
                    "name": "organization",
                    "title": "Organization",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "resources",
                    "title": "Resources",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "results",
                    "title": "Results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "search_facets",
                    "title": "Search Facets",
                    "type": "`$OBJECT`",
                    "short": "Search facet information"
                },
                {
                    "name": "tags",
                    "title": "Tags",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "title",
                    "title": "Title",
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
                            "parts": [
                                "action",
                                "package_search"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "facet_field",
                                        "orig": "facet_field",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "fq",
                                        "orig": "fq",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "organization:health-dept"
                                    },
                                    {
                                        "name": "include_private",
                                        "orig": "include_private",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "health"
                                    },
                                    {
                                        "name": "row",
                                        "orig": "row",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "metadata_modified desc"
                                    },
                                    {
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 0
                                    }
                                ]
                            },
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
                            }
                        },
                        {
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
                            "parts": [
                                "action",
                                "package_show"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    },
                                    {
                                        "name": "include_tracking",
                                        "orig": "include_tracking",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "include_tracking"
                                ]
                            }
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
                    "title": "Result",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "success",
                    "title": "Success",
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
                            "parts": [
                                "action",
                                "tag_list"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "all_field",
                                        "orig": "all_field",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "all_field"
                                ]
                            }
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
                    "name": "created",
                    "title": "Created",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "image_url",
                    "title": "Image Url",
                    "type": "`$STRING`",
                    "format": "uri"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "package_count",
                    "title": "Package Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "packages",
                    "title": "Packages",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "title",
                    "title": "Title",
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
                            "parts": [
                                "action",
                                "organization_list"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "all_field",
                                        "orig": "all_field",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "offset",
                                        "orig": "offset",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 0
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "all_field",
                                    "limit",
                                    "offset"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
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
                            "parts": [
                                "action",
                                "organization_show"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    },
                                    {
                                        "name": "include_dataset",
                                        "orig": "include_dataset",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "include_dataset"
                                ]
                            }
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