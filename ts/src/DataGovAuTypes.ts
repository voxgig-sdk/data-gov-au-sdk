// Typed models for the DataGovAu SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Dataset {
  author?: string
  author_email?: string
  count?: number
  facets?: Record<string, any>
  id?: string
  license_id?: string
  license_title?: string
  maintainer?: string
  maintainer_email?: string
  metadata_created?: string
  metadata_modified?: string
  name?: string
  notes?: string
  organization?: Record<string, any>
  resources?: any[]
  results?: any[]
  search_facets?: Record<string, any>
  tags?: any[]
  title?: string
}

export interface DatasetLoadMatch {
  facet_field?: any[]
  fq?: string
  include_private?: boolean
  q?: string
  row?: number
  sort?: string
  start?: number
}

export interface Metadata {
  result?: any[]
  success?: boolean
}

export interface MetadataListMatch {
  all_field?: boolean
}

export interface Organization {
  created?: string
  description?: string
  id?: string
  image_url?: string
  name?: string
  package_count?: number
  packages?: any[]
  result?: any[]
  success?: boolean
  title?: string
}

export interface OrganizationLoadMatch {
  id: string
  include_dataset?: boolean
}

export interface OrganizationListMatch {
  all_field?: boolean
  limit?: number
  offset?: number
}

