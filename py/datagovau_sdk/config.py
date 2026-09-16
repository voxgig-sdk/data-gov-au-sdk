# DataGovAu SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "DataGovAu",
            "slug": "data-gov-au",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "name": "author",
            "type": "`$STRING`",
          },
          {
            "format": "email",
            "name": "author_email",
            "type": "`$STRING`",
          },
          {
            "name": "count",
            "short": "Total number of datasets matching the query",
            "type": "`$INTEGER`",
          },
          {
            "name": "facets",
            "short": "Faceted search results for aggregation",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "license_id",
            "type": "`$STRING`",
          },
          {
            "name": "license_title",
            "type": "`$STRING`",
          },
          {
            "name": "maintainer",
            "type": "`$STRING`",
          },
          {
            "format": "email",
            "name": "maintainer_email",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "metadata_created",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "metadata_modified",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "notes",
            "type": "`$STRING`",
          },
          {
            "name": "organization",
            "type": "`$OBJECT`",
          },
          {
            "name": "resources",
            "type": "`$ARRAY`",
          },
          {
            "name": "results",
            "type": "`$ARRAY`",
          },
          {
            "name": "search_facets",
            "short": "Search facet information",
            "type": "`$OBJECT`",
          },
          {
            "name": "tags",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": "organization:health-dept",
                      "kind": "query",
                      "name": "fq",
                      "orig": "fq",
                      "type": "`$STRING`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "include_private",
                      "orig": "include_private",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": "health",
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "row",
                      "orig": "row",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "metadata_modified desc",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/action/package_search",
                "segments": [
                  {
                    "lit": "action",
                  },
                  {
                    "lit": "package_search",
                  },
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
                "parts": [
                  "action",
                  "package_search",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "include_tracking",
                      "orig": "include_tracking",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/action/package_show",
                "segments": [
                  {
                    "lit": "action",
                  },
                  {
                    "lit": "package_show",
                  },
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
                "parts": [
                  "action",
                  "package_show",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "metadata": {
        "fields": [
          {
            "name": "result",
            "type": "`$ARRAY`",
            "union": {
              "branches": 2,
              "count": 1,
              "depth": 1,
            },
          },
          {
            "name": "success",
            "type": "`$BOOLEAN`",
          },
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
                      "example": False,
                      "kind": "query",
                      "name": "all_field",
                      "orig": "all_field",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/action/tag_list",
                "segments": [
                  {
                    "lit": "action",
                  },
                  {
                    "lit": "tag_list",
                  },
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
                "parts": [
                  "action",
                  "tag_list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "organization": {
        "fields": [
          {
            "format": "date-time",
            "name": "created",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "image_url",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "package_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "packages",
            "type": "`$ARRAY`",
          },
          {
            "name": "result",
            "type": "`$ARRAY`",
            "union": {
              "branches": 2,
              "count": 1,
              "depth": 1,
            },
          },
          {
            "name": "success",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                      "example": False,
                      "kind": "query",
                      "name": "all_field",
                      "orig": "all_field",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/action/organization_list",
                "segments": [
                  {
                    "lit": "action",
                  },
                  {
                    "lit": "organization_list",
                  },
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
                "parts": [
                  "action",
                  "organization_list",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": True,
                      "kind": "query",
                      "name": "include_dataset",
                      "orig": "include_dataset",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/action/organization_show",
                "segments": [
                  {
                    "lit": "action",
                  },
                  {
                    "lit": "organization_show",
                  },
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
                "parts": [
                  "action",
                  "organization_show",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
