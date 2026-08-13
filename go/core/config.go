package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "DataGovAu",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://data.gov.au/data/api/3",
			"auth": map[string]any{
				"prefix": "",
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
						"active": true,
						"name": "author",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "author_email",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "count",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "facets",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "license_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "license_title",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "maintainer",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "maintainer_email",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "metadata_created",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "metadata_modified",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "notes",
						"req": false,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "organization",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "resources",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "results",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "search_facets",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "tags",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"index$": 18,
					},
				},
				"name": "dataset",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "facet_field",
											"orig": "facet_field",
											"reqd": false,
											"type": "`$ARRAY`",
										},
										map[string]any{
											"active": true,
											"example": "organization:health-dept",
											"kind": "query",
											"name": "fq",
											"orig": "fq",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": false,
											"kind": "query",
											"name": "include_private",
											"orig": "include_private",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": "health",
											"kind": "query",
											"name": "q",
											"orig": "q",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 10,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "metadata_modified desc",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/action/package_search",
								"parts": []any{
									"action",
									"package_search",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": false,
											"kind": "query",
											"name": "include_tracking",
											"orig": "include_tracking",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/action/package_show",
								"parts": []any{
									"action",
									"package_show",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"include_tracking",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"index$": 1,
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
						"active": true,
						"name": "result",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "success",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
				},
				"name": "metadata",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": false,
											"kind": "query",
											"name": "all_field",
											"orig": "all_field",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/action/tag_list",
								"parts": []any{
									"action",
									"tag_list",
								},
								"select": map[string]any{
									"exist": []any{
										"all_field",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"index$": 0,
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
						"active": true,
						"name": "created",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "image_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "package_count",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "packages",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "result",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "success",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "organization",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": false,
											"kind": "query",
											"name": "all_field",
											"orig": "all_field",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/action/organization_list",
								"parts": []any{
									"action",
									"organization_list",
								},
								"select": map[string]any{
									"exist": []any{
										"all_field",
										"limit",
										"offset",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": true,
											"kind": "query",
											"name": "include_dataset",
											"orig": "include_dataset",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/action/organization_show",
								"parts": []any{
									"action",
									"organization_show",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"include_dataset",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"index$": 0,
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

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
