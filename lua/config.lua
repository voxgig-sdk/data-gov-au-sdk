-- ProjectName SDK configuration

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
            ["name"] = "result",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "success",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["active"] = true,
            ["index$"] = 1,
          },
        },
        ["name"] = "dataset",
        ["op"] = {
          ["load"] = {
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "facet_field",
                      ["orig"] = "facet_field",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = "organization:health-dept",
                      ["kind"] = "query",
                      ["name"] = "fq",
                      ["orig"] = "fq",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "include_private",
                      ["orig"] = "include_private",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = "health",
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = "metadata_modified desc",
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "include_tracking",
                      ["orig"] = "include_tracking",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 1,
              },
            },
            ["input"] = "data",
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
            ["name"] = "result",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "success",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["active"] = true,
            ["index$"] = 1,
          },
        },
        ["name"] = "metadata",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "all_field",
                      ["orig"] = "all_field",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
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
            ["name"] = "result",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "success",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["active"] = true,
            ["index$"] = 1,
          },
        },
        ["name"] = "organization",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "all_field",
                      ["orig"] = "all_field",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
          },
          ["load"] = {
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "include_dataset",
                      ["orig"] = "include_dataset",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                      ["active"] = true,
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
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
