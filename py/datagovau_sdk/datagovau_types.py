# Typed models for the DataGovAu SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Dataset(TypedDict, total=False):
    author: str
    author_email: str
    count: int
    facets: dict
    id: str
    license_id: str
    license_title: str
    maintainer: str
    maintainer_email: str
    metadata_created: str
    metadata_modified: str
    name: str
    notes: str
    organization: dict
    resources: list
    results: list
    search_facets: dict
    tags: list
    title: str


class DatasetLoadMatch(TypedDict, total=False):
    facet_field: list
    fq: str
    include_private: bool
    q: str
    row: int
    sort: str
    start: int


class Metadata(TypedDict, total=False):
    result: list
    success: bool


class MetadataListMatch(TypedDict, total=False):
    all_field: bool


class Organization(TypedDict, total=False):
    created: str
    description: str
    id: str
    image_url: str
    name: str
    package_count: int
    packages: list
    result: list
    success: bool
    title: str


class OrganizationLoadMatchRequired(TypedDict):
    id: str


class OrganizationLoadMatch(OrganizationLoadMatchRequired, total=False):
    include_dataset: bool


class OrganizationListMatch(TypedDict, total=False):
    all_field: bool
    limit: int
    offset: int
