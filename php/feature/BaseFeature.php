<?php
declare(strict_types=1);

// DataGovAu SDK base feature

class DataGovAuBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(DataGovAuContext $ctx, array $options): void {}
    public function PostConstruct(DataGovAuContext $ctx): void {}
    public function PostConstructEntity(DataGovAuContext $ctx): void {}
    public function SetData(DataGovAuContext $ctx): void {}
    public function GetData(DataGovAuContext $ctx): void {}
    public function GetMatch(DataGovAuContext $ctx): void {}
    public function SetMatch(DataGovAuContext $ctx): void {}
    public function PrePoint(DataGovAuContext $ctx): void {}
    public function PreSpec(DataGovAuContext $ctx): void {}
    public function PreRequest(DataGovAuContext $ctx): void {}
    public function PreResponse(DataGovAuContext $ctx): void {}
    public function PreResult(DataGovAuContext $ctx): void {}
    public function PreDone(DataGovAuContext $ctx): void {}
    public function PreUnexpected(DataGovAuContext $ctx): void {}
}
