<?php
declare(strict_types=1);

// DataGovAu SDK configuration

class DataGovAuConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "DataGovAu",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://data.gov.au/data/api/3",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "dataset" => [],
                    "metadata" => [],
                    "organization" => [],
                ],
            ],
            "entity" => [
        'dataset' => [
          'fields' => [
            [
              'name' => 'author',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'author_email',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'facets',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'license_id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'license_title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'maintainer',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'maintainer_email',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'metadata_created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'metadata_modified',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'notes',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'organization',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'resources',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'results',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'search_facets',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'tags',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'dataset',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'facet_field',
                        'orig' => 'facet_field',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => 'organization:health-dept',
                        'kind' => 'query',
                        'name' => 'fq',
                        'orig' => 'fq',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'include_private',
                        'orig' => 'include_private',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => 'health',
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'metadata_modified desc',
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/action/package_search',
                  'parts' => [
                    'action',
                    'package_search',
                  ],
                  'select' => [
                    'exist' => [
                      'facet_field',
                      'fq',
                      'include_private',
                      'q',
                      'row',
                      'sort',
                      'start',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'include_tracking',
                        'orig' => 'include_tracking',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/action/package_show',
                  'parts' => [
                    'action',
                    'package_show',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'include_tracking',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'metadata' => [
          'fields' => [
            [
              'name' => 'result',
              'type' => '`$ARRAY`',
              'union' => [
                'branches' => 2,
                'count' => 1,
                'depth' => 1,
              ],
            ],
            [
              'name' => 'success',
              'type' => '`$BOOLEAN`',
            ],
          ],
          'name' => 'metadata',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'all_field',
                        'orig' => 'all_field',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/action/tag_list',
                  'parts' => [
                    'action',
                    'tag_list',
                  ],
                  'select' => [
                    'exist' => [
                      'all_field',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'organization' => [
          'fields' => [
            [
              'name' => 'created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'image_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'package_count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'packages',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'result',
              'type' => '`$ARRAY`',
              'union' => [
                'branches' => 2,
                'count' => 1,
                'depth' => 1,
              ],
            ],
            [
              'name' => 'success',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'title',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'organization',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'all_field',
                        'orig' => 'all_field',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/action/organization_list',
                  'parts' => [
                    'action',
                    'organization_list',
                  ],
                  'select' => [
                    'exist' => [
                      'all_field',
                      'limit',
                      'offset',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'include_dataset',
                        'orig' => 'include_dataset',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/action/organization_show',
                  'parts' => [
                    'action',
                    'organization_show',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'include_dataset',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return DataGovAuFeatures::make_feature($name);
    }
}
