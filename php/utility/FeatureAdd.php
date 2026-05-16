<?php
declare(strict_types=1);

// DataGovAu SDK utility: feature_add

class DataGovAuFeatureAdd
{
    public static function call(DataGovAuContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
