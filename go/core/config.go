package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "DataGovAu",
			"slug": "data-gov-au",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://data.gov.au/data/api/3",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-CKAN-API-Key",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"dataset": map[string]any{},
				"metadata": map[string]any{},
				"organization": map[string]any{},
			},
		},
		"entity": map[string]any{
			"dataset": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"title": "Author",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "author_email",
						"title": "Author Email",
						"type": "`$STRING`",
						"format": "email",
					},
					map[string]any{
						"name": "count",
						"title": "Count",
						"type": "`$INTEGER`",
						"short": "Total number of datasets matching the query",
					},
					map[string]any{
						"name": "facets",
						"title": "Facets",
						"type": "`$OBJECT`",
						"short": "Faceted search results for aggregation",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "license_id",
						"title": "License Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "license_title",
						"title": "License Title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "maintainer",
						"title": "Maintainer",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "maintainer_email",
						"title": "Maintainer Email",
						"type": "`$STRING`",
						"format": "email",
					},
					map[string]any{
						"name": "metadata_created",
						"title": "Metadata Created",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "metadata_modified",
						"title": "Metadata Modified",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notes",
						"title": "Notes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "organization",
						"title": "Organization",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "search_facets",
						"title": "Search Facets",
						"type": "`$OBJECT`",
						"short": "Search facet information",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dataset",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/action/package_search",
								"segments": []any{
									map[string]any{
										"lit": "action",
									},
									map[string]any{
										"lit": "package_search",
									},
								},
								"parts": []any{
									"action",
									"package_search",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "facet_field",
											"orig": "facet_field",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "fq",
											"orig": "fq",
											"type": "`$STRING`",
											"kind": "query",
											"example": "organization:health-dept",
										},
										map[string]any{
											"name": "include_private",
											"orig": "include_private",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
											"example": "health",
										},
										map[string]any{
											"name": "row",
											"orig": "row",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
											"example": "metadata_modified desc",
										},
										map[string]any{
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"facet_field",
										"fq",
										"include_private",
										"q",
										"row",
										"sort",
										"start",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/action/package_show",
								"segments": []any{
									map[string]any{
										"lit": "action",
									},
									map[string]any{
										"lit": "package_show",
									},
								},
								"parts": []any{
									"action",
									"package_show",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "include_tracking",
											"orig": "include_tracking",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"include_tracking",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"metadata": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "metadata",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/action/tag_list",
								"segments": []any{
									map[string]any{
										"lit": "action",
									},
									map[string]any{
										"lit": "tag_list",
									},
								},
								"parts": []any{
									"action",
									"tag_list",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "all_field",
											"orig": "all_field",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"all_field",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "image_url",
						"title": "Image Url",
						"type": "`$STRING`",
						"format": "uri",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "package_count",
						"title": "Package Count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "packages",
						"title": "Packages",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "organization",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/action/organization_list",
								"segments": []any{
									map[string]any{
										"lit": "action",
									},
									map[string]any{
										"lit": "organization_list",
									},
								},
								"parts": []any{
									"action",
									"organization_list",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "all_field",
											"orig": "all_field",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"all_field",
										"limit",
										"offset",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/action/organization_show",
								"segments": []any{
									map[string]any{
										"lit": "action",
									},
									map[string]any{
										"lit": "organization_show",
									},
								},
								"parts": []any{
									"action",
									"organization_show",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "include_dataset",
											"orig": "include_dataset",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"include_dataset",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
