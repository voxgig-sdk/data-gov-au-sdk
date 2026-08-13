# DataGovAu SDK configuration


def make_config():
    return {
        "main": {
            "name": "DataGovAu",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://data.gov.au/data/api/3",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "dataset": {},
                "metadata": {},
                "organization": {},
            },
        },
        "entity": {
      "dataset": {
        "fields": [
          {
            "active": True,
            "name": "author",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "author_email",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "facets",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "license_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "license_title",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "maintainer",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "maintainer_email",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "metadata_created",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "metadata_modified",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "notes",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "organization",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "resources",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "results",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "search_facets",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "tags",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "index$": 18,
          },
        ],
        "name": "dataset",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "facet_field",
                      "orig": "facet_field",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "example": "organization:health-dept",
                      "kind": "query",
                      "name": "fq",
                      "orig": "fq",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": False,
                      "kind": "query",
                      "name": "include_private",
                      "orig": "include_private",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": "health",
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 10,
                      "kind": "query",
                      "name": "row",
                      "orig": "row",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "metadata_modified desc",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/action/package_search",
                "parts": [
                  "action",
                  "package_search",
                ],
                "select": {
                  "exist": [
                    "facet_field",
                    "fq",
                    "include_private",
                    "q",
                    "row",
                    "sort",
                    "start",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": False,
                      "kind": "query",
                      "name": "include_tracking",
                      "orig": "include_tracking",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/action/package_show",
                "parts": [
                  "action",
                  "package_show",
                ],
                "select": {
                  "exist": [
                    "id",
                    "include_tracking",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "metadata": {
        "fields": [
          {
            "active": True,
            "name": "result",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "success",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
        ],
        "name": "metadata",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": False,
                      "kind": "query",
                      "name": "all_field",
                      "orig": "all_field",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/action/tag_list",
                "parts": [
                  "action",
                  "tag_list",
                ],
                "select": {
                  "exist": [
                    "all_field",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "organization": {
        "fields": [
          {
            "active": True,
            "name": "created",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "image_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "package_count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "packages",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "result",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "success",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "organization",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": False,
                      "kind": "query",
                      "name": "all_field",
                      "orig": "all_field",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/action/organization_list",
                "parts": [
                  "action",
                  "organization_list",
                ],
                "select": {
                  "exist": [
                    "all_field",
                    "limit",
                    "offset",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": True,
                      "kind": "query",
                      "name": "include_dataset",
                      "orig": "include_dataset",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/action/organization_show",
                "parts": [
                  "action",
                  "organization_show",
                ],
                "select": {
                  "exist": [
                    "id",
                    "include_dataset",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
