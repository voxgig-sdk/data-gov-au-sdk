<?php
declare(strict_types=1);

// DataGovAu SDK utility: feature_hook

class DataGovAuFeatureHook
{
    public static function call(DataGovAuContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
