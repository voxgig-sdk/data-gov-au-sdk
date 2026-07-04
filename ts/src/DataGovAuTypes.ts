// Typed models for the DataGovAu SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Dataset {
  result?: Record<string, any>
  success?: boolean
}

export type DatasetLoadMatch = Partial<Dataset>

export interface Metadata {
  result?: any[]
  success?: boolean
}

export type MetadataListMatch = Partial<Metadata>

export interface Organization {
  result?: Record<string, any>
  success?: boolean
}

export type OrganizationLoadMatch = Partial<Organization>

export type OrganizationListMatch = Partial<Organization>

