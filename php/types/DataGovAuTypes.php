<?php
declare(strict_types=1);

// Typed models for the DataGovAu SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Dataset entity data model. */
class Dataset
{
    public ?array $result = null;
    public ?bool $success = null;
}

/** Match filter for Dataset#load (any subset of Dataset fields). */
class DatasetLoadMatch
{
    public ?array $result = null;
    public ?bool $success = null;
}

/** Metadata entity data model. */
class Metadata
{
    public ?array $result = null;
    public ?bool $success = null;
}

/** Match filter for Metadata#list (any subset of Metadata fields). */
class MetadataListMatch
{
    public ?array $result = null;
    public ?bool $success = null;
}

/** Organization entity data model. */
class Organization
{
    public ?array $result = null;
    public ?bool $success = null;
}

/** Match filter for Organization#load (any subset of Organization fields). */
class OrganizationLoadMatch
{
    public ?array $result = null;
    public ?bool $success = null;
}

/** Match filter for Organization#list (any subset of Organization fields). */
class OrganizationListMatch
{
    public ?array $result = null;
    public ?bool $success = null;
}

