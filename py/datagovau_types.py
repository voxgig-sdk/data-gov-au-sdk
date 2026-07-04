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
    result: dict
    success: bool


class DatasetLoadMatch(TypedDict, total=False):
    result: dict
    success: bool


class Metadata(TypedDict, total=False):
    result: list
    success: bool


class MetadataListMatch(TypedDict, total=False):
    result: list
    success: bool


class Organization(TypedDict, total=False):
    result: dict
    success: bool


class OrganizationLoadMatch(TypedDict, total=False):
    result: dict
    success: bool


class OrganizationListMatch(TypedDict, total=False):
    result: dict
    success: bool
