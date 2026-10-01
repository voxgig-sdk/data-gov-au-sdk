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
    "path": "/action/package_search",
    "args": [],
    "select": {
      "facet_field": "v1",
      "fq": "organization:health-dept",
      "include_private": "v1",
      "q": "health",
      "row": "v1",
      "sort": "metadata_modified desc",
      "start": "v1"
    },
    "headers": [],
    "query": [
      "q",
      "fq",
      "rows",
      "start",
      "sort",
      "facet.field",
      "include_private"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "success": true,
      "result": {
        "count": 1,
        "facets": {},
        "results": [
          {
            "author": "x",
            "author_email": "x",
            "id": "x",
            "license_id": "x",
            "license_title": "x",
            "maintainer": "x",
            "maintainer_email": "x",
            "metadata_created": "2026-01-01T00:00:00Z",
            "metadata_modified": "2026-01-01T00:00:00Z",
            "name": "x",
            "notes": "x",
            "organization": {
              "description": "x",
              "id": "x",
              "name": "x",
              "title": "x"
            },
            "resources": [
              {
                "created": "2026-01-01T00:00:00Z",
                "description": "x",
                "format": "x",
                "id": "x",
                "last_modified": "2026-01-01T00:00:00Z",
                "name": "x",
                "url": "x"
              }
            ],
            "tags": [
              {
                "display_name": "x",
                "id": "x",
                "name": "x"
              }
            ],
            "title": "x"
          }
        ],
        "search_facets": {}
      }
    },
    "idField": "id"
  },
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
    "query": [
      "id",
      "include_tracking"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "success": true,
      "result": {
        "author": "x",
        "author_email": "x",
        "id": "x",
        "license_id": "x",
        "license_title": "x",
        "maintainer": "x",
        "maintainer_email": "x",
        "metadata_created": "2026-01-01T00:00:00Z",
        "metadata_modified": "2026-01-01T00:00:00Z",
        "name": "x",
        "notes": "x",
        "organization": {},
        "resources": [
          {}
        ],
        "tags": [
          {}
        ],
        "title": "x"
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
    "query": [
      "all_fields"
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
      "offset": "v1"
    },
    "headers": [],
    "query": [
      "all_fields",
      "limit",
      "offset"
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
    "query": [
      "id",
      "include_datasets"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "success": true,
      "result": {
        "created": "2026-01-01T00:00:00Z",
        "description": "x",
        "id": "x",
        "image_url": "x",
        "name": "x",
        "package_count": 1,
        "packages": [
          {}
        ],
        "title": "x"
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
