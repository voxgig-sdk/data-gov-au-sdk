import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "dataset",
    "accessor": "Dataset",
    "op": "load",
    "method": "GET",
    "path": "/action/package_show",
    "args": [],
    "select": {
      "id": "v1",
      "include_tracking": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "id",
      "include_tracking"
    ],
    "queryArgs": [
      {
        "name": "id",
        "wire": "id"
      },
      {
        "name": "include_tracking",
        "wire": "include_tracking"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "success": true,
      "result": {
        "id": "x",
        "name": "x",
        "title": "x",
        "notes": "x",
        "author": "x",
        "author_email": "x",
        "maintainer": "x",
        "maintainer_email": "x",
        "license_id": "x",
        "license_title": "x",
        "metadata_created": "2026-01-01T00:00:00Z",
        "metadata_modified": "2026-01-01T00:00:00Z",
        "organization": {},
        "tags": [
          {}
        ],
        "resources": [
          {}
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "dataset",
    "accessor": "Dataset",
    "op": "load",
    "method": "GET",
    "path": "/action/package_search",
    "args": [],
    "select": {
      "facet_field": "v1",
      "fq": "organization:health-dept",
      "include_private": "v1",
      "q": "health",
      "row": 10,
      "sort": "metadata_modified desc",
      "start": 0
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "fq",
      "rows",
      "start",
      "sort",
      "facet.field",
      "include_private"
    ],
    "queryArgs": [
      {
        "name": "facet_field",
        "wire": "facet.field"
      },
      {
        "name": "fq",
        "wire": "fq"
      },
      {
        "name": "include_private",
        "wire": "include_private"
      },
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "row",
        "wire": "rows"
      },
      {
        "name": "sort",
        "wire": "sort"
      },
      {
        "name": "start",
        "wire": "start"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "success": true,
      "result": {
        "count": 1,
        "results": [
          {
            "id": "x",
            "name": "x",
            "title": "x",
            "notes": "x",
            "author": "x",
            "author_email": "x",
            "maintainer": "x",
            "maintainer_email": "x",
            "license_id": "x",
            "license_title": "x",
            "metadata_created": "2026-01-01T00:00:00Z",
            "metadata_modified": "2026-01-01T00:00:00Z",
            "organization": {
              "id": "x",
              "name": "x",
              "title": "x",
              "description": "x"
            },
            "tags": [
              {
                "id": "x",
                "name": "x",
                "display_name": "x"
              }
            ],
            "resources": [
              {
                "id": "x",
                "name": "x",
                "description": "x",
                "url": "x",
                "format": "x",
                "created": "2026-01-01T00:00:00Z",
                "last_modified": "2026-01-01T00:00:00Z"
              }
            ]
          }
        ],
        "facets": {},
        "search_facets": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "metadata",
    "accessor": "Metadata",
    "op": "list",
    "method": "GET",
    "path": "/action/tag_list",
    "args": [],
    "select": {
      "all_field": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "all_fields"
    ],
    "queryArgs": [
      {
        "name": "all_field",
        "wire": "all_fields"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "success": true,
      "result": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "organization",
    "accessor": "Organization",
    "op": "list",
    "method": "GET",
    "path": "/action/organization_list",
    "args": [],
    "select": {
      "all_field": "v1",
      "limit": "v1",
      "offset": 0
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "all_fields",
      "limit",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "all_field",
        "wire": "all_fields"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "success": true,
      "result": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "organization",
    "accessor": "Organization",
    "op": "load",
    "method": "GET",
    "path": "/action/organization_show",
    "args": [],
    "select": {
      "id": "v1",
      "include_dataset": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "id",
      "include_datasets"
    ],
    "queryArgs": [
      {
        "name": "id",
        "wire": "id"
      },
      {
        "name": "include_dataset",
        "wire": "include_datasets"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "success": true,
      "result": {
        "id": "x",
        "name": "x",
        "title": "x",
        "description": "x",
        "image_url": "x",
        "created": "2026-01-01T00:00:00Z",
        "package_count": 1,
        "packages": [
          {}
        ]
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
