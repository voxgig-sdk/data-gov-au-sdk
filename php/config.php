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
                "slug" => "data-gov-au",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://data.gov.au/data/api/3",
                "auth" => [
                    "prefix" => "",
                    "name" => "X-CKAN-API-Key",
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
              'title' => 'Author',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'author_email',
              'title' => 'Author Email',
              'type' => '`$STRING`',
              'format' => 'email',
            ],
            [
              'name' => 'count',
              'title' => 'Count',
              'type' => '`$INTEGER`',
              'short' => 'Total number of datasets matching the query',
            ],
            [
              'name' => 'facets',
              'title' => 'Facets',
              'type' => '`$OBJECT`',
              'short' => 'Faceted search results for aggregation',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'license_id',
              'title' => 'License Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'license_title',
              'title' => 'License Title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'maintainer',
              'title' => 'Maintainer',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'maintainer_email',
              'title' => 'Maintainer Email',
              'type' => '`$STRING`',
              'format' => 'email',
            ],
            [
              'name' => 'metadata_created',
              'title' => 'Metadata Created',
              'type' => '`$STRING`',
              'format' => 'date-time',
            ],
            [
              'name' => 'metadata_modified',
              'title' => 'Metadata Modified',
              'type' => '`$STRING`',
              'format' => 'date-time',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'notes',
              'title' => 'Notes',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'organization',
              'title' => 'Organization',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'resources',
              'title' => 'Resources',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'results',
              'title' => 'Results',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'search_facets',
              'title' => 'Search Facets',
              'type' => '`$OBJECT`',
              'short' => 'Search facet information',
            ],
            [
              'name' => 'tags',
              'title' => 'Tags',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dataset',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/action/package_search',
                  'segments' => [
                    [
                      'lit' => 'action',
                    ],
                    [
                      'lit' => 'package_search',
                    ],
                  ],
                  'parts' => [
                    'action',
                    'package_search',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'facet_field',
                        'orig' => 'facet_field',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'fq',
                        'orig' => 'fq',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'organization:health-dept',
                      ],
                      [
                        'name' => 'include_private',
                        'orig' => 'include_private',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'health',
                      ],
                      [
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 10,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'metadata_modified desc',
                      ],
                      [
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                    ],
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
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/action/package_show',
                  'segments' => [
                    [
                      'lit' => 'action',
                    ],
                    [
                      'lit' => 'package_show',
                    ],
                  ],
                  'parts' => [
                    'action',
                    'package_show',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'include_tracking',
                        'orig' => 'include_tracking',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'include_tracking',
                    ],
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
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
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
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/action/tag_list',
                  'segments' => [
                    [
                      'lit' => 'action',
                    ],
                    [
                      'lit' => 'tag_list',
                    ],
                  ],
                  'parts' => [
                    'action',
                    'tag_list',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'all_field',
                        'orig' => 'all_field',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'all_field',
                    ],
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
              'title' => 'Created',
              'type' => '`$STRING`',
              'format' => 'date-time',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'image_url',
              'title' => 'Image Url',
              'type' => '`$STRING`',
              'format' => 'uri',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'package_count',
              'title' => 'Package Count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'packages',
              'title' => 'Packages',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'organization',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/action/organization_list',
                  'segments' => [
                    [
                      'lit' => 'action',
                    ],
                    [
                      'lit' => 'organization_list',
                    ],
                  ],
                  'parts' => [
                    'action',
                    'organization_list',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'all_field',
                        'orig' => 'all_field',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'all_field',
                      'limit',
                      'offset',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/action/organization_show',
                  'segments' => [
                    [
                      'lit' => 'action',
                    ],
                    [
                      'lit' => 'organization_show',
                    ],
                  ],
                  'parts' => [
                    'action',
                    'organization_show',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'include_dataset',
                        'orig' => 'include_dataset',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'include_dataset',
                    ],
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
