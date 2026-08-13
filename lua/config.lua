-- DataGovAu SDK configuration

local function make_config()
  return {
    main = {
      name = "DataGovAu",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://data.gov.au/data/api/3",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["dataset"] = {},
        ["metadata"] = {},
        ["organization"] = {},
      },
    },
    entity = {
      ["dataset"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "author",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "author_email",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "count",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "facets",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "license_id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "license_title",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "maintainer",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "maintainer_email",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "metadata_created",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "metadata_modified",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "notes",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "organization",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "resources",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 14,
          },
          {
            ["active"] = true,
            ["name"] = "results",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 15,
          },
          {
            ["active"] = true,
            ["name"] = "search_facets",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 16,
          },
          {
            ["active"] = true,
            ["name"] = "tags",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 17,
          },
          {
            ["active"] = true,
            ["name"] = "title",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 18,
          },
        },
        ["name"] = "dataset",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "facet_field",
                      ["orig"] = "facet_field",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "organization:health-dept",
                      ["kind"] = "query",
                      ["name"] = "fq",
                      ["orig"] = "fq",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "include_private",
                      ["orig"] = "include_private",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "health",
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "metadata_modified desc",
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/action/package_search",
                ["parts"] = {
                  "action",
                  "package_search",
                },
                ["select"] = {
                  ["exist"] = {
                    "facet_field",
                    "fq",
                    "include_private",
                    "q",
                    "row",
                    "sort",
                    "start",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.result`",
                },
                ["index$"] = 0,
              },
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "include_tracking",
                      ["orig"] = "include_tracking",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/action/package_show",
                ["parts"] = {
                  "action",
                  "package_show",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "include_tracking",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.result`",
                },
                ["index$"] = 1,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["metadata"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "result",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "success",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 1,
          },
        },
        ["name"] = "metadata",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "all_field",
                      ["orig"] = "all_field",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/action/tag_list",
                ["parts"] = {
                  "action",
                  "tag_list",
                },
                ["select"] = {
                  ["exist"] = {
                    "all_field",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.result`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["organization"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "created",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "description",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "image_url",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "package_count",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "packages",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "result",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "success",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "title",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 9,
          },
        },
        ["name"] = "organization",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "all_field",
                      ["orig"] = "all_field",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/action/organization_list",
                ["parts"] = {
                  "action",
                  "organization_list",
                },
                ["select"] = {
                  ["exist"] = {
                    "all_field",
                    "limit",
                    "offset",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.result`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "include_dataset",
                      ["orig"] = "include_dataset",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/action/organization_show",
                ["parts"] = {
                  "action",
                  "organization_show",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "include_dataset",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.result`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
