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

# Request payload for Dataset#load.
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

# Request payload for Organization#load.
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

# Request payload for Organization#list.
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

