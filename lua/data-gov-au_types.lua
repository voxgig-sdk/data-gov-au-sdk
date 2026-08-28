-- Typed models for the DataGovAu SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Dataset
---@field author? string
---@field author_email? string
---@field count? number
---@field facets? table
---@field id? string
---@field license_id? string
---@field license_title? string
---@field maintainer? string
---@field maintainer_email? string
---@field metadata_created? string
---@field metadata_modified? string
---@field name? string
---@field notes? string
---@field organization? table
---@field resources? table
---@field results? table
---@field search_facets? table
---@field tags? table
---@field title? string

---@class DatasetLoadMatch
---@field facet_field? table
---@field fq? string
---@field include_private? boolean
---@field q? string
---@field row? number
---@field sort? string
---@field start? number

---@class Metadata
---@field result? table
---@field success? boolean

---@class MetadataListMatch
---@field all_field? boolean

---@class Organization
---@field created? string
---@field description? string
---@field id? string
---@field image_url? string
---@field name? string
---@field package_count? number
---@field packages? table
---@field result? table
---@field success? boolean
---@field title? string

---@class OrganizationLoadMatch
---@field id string
---@field include_dataset? boolean

---@class OrganizationListMatch
---@field all_field? boolean
---@field limit? number
---@field offset? number

local M = {}

return M
