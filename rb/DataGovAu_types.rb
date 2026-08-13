# frozen_string_literal: true

# Typed models for the DataGovAu SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Dataset entity data model.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] author_email
#   @return [String, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] facets
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] license_id
#   @return [String, nil]
#
# @!attribute [rw] license_title
#   @return [String, nil]
#
# @!attribute [rw] maintainer
#   @return [String, nil]
#
# @!attribute [rw] maintainer_email
#   @return [String, nil]
#
# @!attribute [rw] metadata_created
#   @return [String, nil]
#
# @!attribute [rw] metadata_modified
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] resources
#   @return [Array, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] search_facets
#   @return [Hash, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Dataset = Struct.new(
  :author,
  :author_email,
  :count,
  :facets,
  :id,
  :license_id,
  :license_title,
  :maintainer,
  :maintainer_email,
  :metadata_created,
  :metadata_modified,
  :name,
  :notes,
  :organization,
  :resources,
  :results,
  :search_facets,
  :tags,
  :title,
  keyword_init: true
)

# Request payload for Dataset#load.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] author_email
#   @return [String, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] facets
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] license_id
#   @return [String, nil]
#
# @!attribute [rw] license_title
#   @return [String, nil]
#
# @!attribute [rw] maintainer
#   @return [String, nil]
#
# @!attribute [rw] maintainer_email
#   @return [String, nil]
#
# @!attribute [rw] metadata_created
#   @return [String, nil]
#
# @!attribute [rw] metadata_modified
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] resources
#   @return [Array, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] search_facets
#   @return [Hash, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
DatasetLoadMatch = Struct.new(
  :author,
  :author_email,
  :count,
  :facets,
  :id,
  :license_id,
  :license_title,
  :maintainer,
  :maintainer_email,
  :metadata_created,
  :metadata_modified,
  :name,
  :notes,
  :organization,
  :resources,
  :results,
  :search_facets,
  :tags,
  :title,
  keyword_init: true
)

# Metadata entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
Metadata = Struct.new(
  :result,
  :success,
  keyword_init: true
)

# Request payload for Metadata#list.
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
MetadataListMatch = Struct.new(
  :result,
  :success,
  keyword_init: true
)

# Organization entity data model.
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] package_count
#   @return [Integer, nil]
#
# @!attribute [rw] packages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Organization = Struct.new(
  :created,
  :description,
  :id,
  :image_url,
  :name,
  :package_count,
  :packages,
  :result,
  :success,
  :title,
  keyword_init: true
)

# Request payload for Organization#load.
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] package_count
#   @return [Integer, nil]
#
# @!attribute [rw] packages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
OrganizationLoadMatch = Struct.new(
  :created,
  :description,
  :id,
  :image_url,
  :name,
  :package_count,
  :packages,
  :result,
  :success,
  :title,
  keyword_init: true
)

# Request payload for Organization#list.
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] package_count
#   @return [Integer, nil]
#
# @!attribute [rw] packages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
OrganizationListMatch = Struct.new(
  :created,
  :description,
  :id,
  :image_url,
  :name,
  :package_count,
  :packages,
  :result,
  :success,
  :title,
  keyword_init: true
)

