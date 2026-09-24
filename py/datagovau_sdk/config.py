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
                "name": "X-CKAN-API-Key",
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
            "title": "Author",
            "type": "`$STRING`",
          },
          {
            "name": "author_email",
            "title": "Author Email",
            "type": "`$STRING`",
            "format": "email",
          },
          {
            "name": "count",
            "title": "Count",
            "type": "`$INTEGER`",
            "short": "Total number of datasets matching the query",
          },
          {
            "name": "facets",
            "title": "Facets",
            "type": "`$OBJECT`",
            "short": "Faceted search results for aggregation",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "license_id",
            "title": "License Id",
            "type": "`$STRING`",
          },
          {
            "name": "license_title",
            "title": "License Title",
            "type": "`$STRING`",
          },
          {
            "name": "maintainer",
            "title": "Maintainer",
            "type": "`$STRING`",
          },
          {
            "name": "maintainer_email",
            "title": "Maintainer Email",
            "type": "`$STRING`",
            "format": "email",
          },
          {
            "name": "metadata_created",
            "title": "Metadata Created",
            "type": "`$STRING`",
            "format": "date-time",
          },
          {
            "name": "metadata_modified",
            "title": "Metadata Modified",
            "type": "`$STRING`",
            "format": "date-time",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
          },
          {
            "name": "notes",
            "title": "Notes",
            "type": "`$STRING`",
          },
          {
            "name": "organization",
            "title": "Organization",
            "type": "`$OBJECT`",
          },
          {
            "name": "resources",
            "title": "Resources",
            "type": "`$ARRAY`",
          },
          {
            "name": "results",
            "title": "Results",
            "type": "`$ARRAY`",
          },
          {
            "name": "search_facets",
            "title": "Search Facets",
            "type": "`$OBJECT`",
            "short": "Search facet information",
          },
          {
            "name": "tags",
            "title": "Tags",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "title": "Title",
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
                "parts": [
                  "action",
                  "package_search",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
                "args": {
                  "query": [
                    {
                      "name": "facet_field",
                      "orig": "facet_field",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "fq",
                      "orig": "fq",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "organization:health-dept",
                    },
                    {
                      "name": "include_private",
                      "orig": "include_private",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "health",
                    },
                    {
                      "name": "row",
                      "orig": "row",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "metadata_modified desc",
                    },
                    {
                      "name": "start",
                      "orig": "start",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                  ],
                },
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
              },
              {
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
                "parts": [
                  "action",
                  "package_show",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
                "args": {
                  "query": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "include_tracking",
                      "orig": "include_tracking",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "include_tracking",
                  ],
                },
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
            "title": "Result",
            "type": "`$ARRAY`",
          },
          {
            "name": "success",
            "title": "Success",
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
                "parts": [
                  "action",
                  "tag_list",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
                "args": {
                  "query": [
                    {
                      "name": "all_field",
                      "orig": "all_field",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "all_field",
                  ],
                },
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
            "name": "created",
            "title": "Created",
            "type": "`$STRING`",
            "format": "date-time",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "image_url",
            "title": "Image Url",
            "type": "`$STRING`",
            "format": "uri",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
          },
          {
            "name": "package_count",
            "title": "Package Count",
            "type": "`$INTEGER`",
          },
          {
            "name": "packages",
            "title": "Packages",
            "type": "`$ARRAY`",
          },
          {
            "name": "result",
            "title": "Result",
            "type": "`$ARRAY`",
          },
          {
            "name": "success",
            "title": "Success",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "title",
            "title": "Title",
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
                "parts": [
                  "action",
                  "organization_list",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
                "args": {
                  "query": [
                    {
                      "name": "all_field",
                      "orig": "all_field",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "all_field",
                    "limit",
                    "offset",
                  ],
                },
              },
            ],
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
                    "lit": "action",
                  },
                  {
                    "lit": "organization_show",
                  },
                ],
                "parts": [
                  "action",
                  "organization_show",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
                "args": {
                  "query": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "include_dataset",
                      "orig": "include_dataset",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "include_dataset",
                  ],
                },
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
