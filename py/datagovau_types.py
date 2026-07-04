# Typed models for the DataGovAu SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Dataset:
    result: Optional[dict] = None
    success: Optional[bool] = None


@dataclass
class DatasetLoadMatch:
    result: Optional[dict] = None
    success: Optional[bool] = None


@dataclass
class Metadata:
    result: Optional[list] = None
    success: Optional[bool] = None


@dataclass
class MetadataListMatch:
    result: Optional[list] = None
    success: Optional[bool] = None


@dataclass
class Organization:
    result: Optional[dict] = None
    success: Optional[bool] = None


@dataclass
class OrganizationLoadMatch:
    result: Optional[dict] = None
    success: Optional[bool] = None


@dataclass
class OrganizationListMatch:
    result: Optional[dict] = None
    success: Optional[bool] = None

