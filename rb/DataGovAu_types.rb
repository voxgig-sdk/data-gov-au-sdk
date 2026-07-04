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
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
Dataset = Struct.new(
  :result,
  :success,
  keyword_init: true
)

# Match filter for Dataset#load (any subset of Dataset fields).
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
DatasetLoadMatch = Struct.new(
  :result,
  :success,
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

# Match filter for Metadata#list (any subset of Metadata fields).
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
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
Organization = Struct.new(
  :result,
  :success,
  keyword_init: true
)

# Match filter for Organization#load (any subset of Organization fields).
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
OrganizationLoadMatch = Struct.new(
  :result,
  :success,
  keyword_init: true
)

# Match filter for Organization#list (any subset of Organization fields).
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
OrganizationListMatch = Struct.new(
  :result,
  :success,
  keyword_init: true
)

