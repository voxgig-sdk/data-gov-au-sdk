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
						"name": "result",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "success",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "dataset",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "facet_field",
											"orig": "facet_field",
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
										map[string]any{
											"example": "organization:health-dept",
											"kind": "query",
											"name": "fq",
											"orig": "fq",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "include_private",
											"orig": "include_private",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
										map[string]any{
											"example": "health",
											"kind": "query",
											"name": "q",
											"orig": "q",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "row",
											"orig": "row",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": "metadata_modified desc",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "include_tracking",
											"orig": "include_tracking",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 1,
							},
						},
						"input": "data",
						"key$": "load",
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
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "success",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "metadata",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "all_field",
											"orig": "all_field",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "success",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "organization",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "all_field",
											"orig": "all_field",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "include_dataset",
											"orig": "include_dataset",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
