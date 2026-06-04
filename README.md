# DataGovAu SDK

Search and retrieve open datasets published by the Australian government via CKAN

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Data.gov.au API

[data.gov.au](https://data.gov.au/) is the Australian government's central open-data catalogue, operated by the Department of Finance. It aggregates datasets published by federal, state, territory and local government agencies and exposes them through a standard [CKAN](https://ckan.org/) Action API at `https://data.gov.au/data/api/3`.

The API follows the CKAN v3 Action API conventions. All endpoints live under `/api/3/action/<function_name>` and return JSON envelopes shaped `{ "success": bool, "result": ..., "help": "..." }`. Both GET (with query string) and POST (with JSON body) are supported for most read operations.

What you get from the API:
- Dataset (package) listing, search and full metadata — titles, descriptions, tags, resources, temporal/spatial coverage, licence.
- Organization listing and details — the agencies that publish data on the portal.
- Arbitrary metadata fields exposed by CKAN extensions used on data.gov.au (e.g. geospatial, harvest source info).

Read endpoints are public and do not require an API key. Write operations (create/update/delete) require an authenticated CKAN account and an API token sent via the `Authorization` header; this SDK is primarily useful for read access.

## Try it

**TypeScript**
```bash
npm install data-gov-au
```

**Python**
```bash
pip install data-gov-au-sdk
```

**PHP**
```bash
composer require voxgig/data-gov-au-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/data-gov-au-sdk/go
```

**Ruby**
```bash
gem install data-gov-au-sdk
```

**Lua**
```bash
luarocks install data-gov-au-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { DataGovAuSDK } from 'data-gov-au'

const client = new DataGovAuSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o data-gov-au-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "data-gov-au": {
      "command": "/abs/path/to/data-gov-au-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Dataset** | A CKAN package representing a published dataset and its resources (files, services, links); reachable via `/api/3/action/package_list`, `/api/3/action/package_show` and `/api/3/action/package_search`. | `/action/package_search` |
| **Metadata** | Descriptive fields attached to packages, resources and groups — tags, licence, temporal/spatial extent and custom extras — returned inline by `package_show` and exposed via helpers such as `/api/3/action/tag_list` and `/api/3/action/license_list`. | `/action/tag_list` |
| **Organization** | A publishing agency or body that owns datasets on the portal; reachable via `/api/3/action/organization_list` and `/api/3/action/organization_show`. | `/action/organization_list` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from datagovau_sdk import DataGovAuSDK

client = DataGovAuSDK({})


# Load a specific dataset
dataset, err = client.Dataset(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'datagovau_sdk.php';

$client = new DataGovAuSDK([]);


// Load a specific dataset
[$dataset, $err] = $client->Dataset(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/data-gov-au-sdk/go"

client := sdk.NewDataGovAuSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "DataGovAu_sdk"

client = DataGovAuSDK.new({})


# Load a specific dataset
dataset, err = client.Dataset(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("data-gov-au_sdk")

local client = sdk.new({})


-- Load a specific dataset
local dataset, err = client:Dataset(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = DataGovAuSDK.test()
const result = await client.Dataset().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = DataGovAuSDK.test(None, None)
result, err = client.Dataset(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = DataGovAuSDK::test(null, null);
[$result, $err] = $client->Dataset(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Dataset(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = DataGovAuSDK.test(nil, nil)
result, err = client.Dataset(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Dataset(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Data.gov.au API

- Upstream: [https://data.gov.au/](https://data.gov.au/)
- API docs: [https://docs.ckan.org/en/latest/api/index.html](https://docs.ckan.org/en/latest/api/index.html)

- Platform metadata and most catalogued datasets are published under [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
- Each dataset record carries its own `license_id` / `license_title`; check the package metadata before redistribution.
- Attribution to the publishing agency (and to data.gov.au) is required when reusing data.
- Some datasets may be restricted or carry custom terms — always honour the per-resource licence.

---

Generated from the Data.gov.au API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
