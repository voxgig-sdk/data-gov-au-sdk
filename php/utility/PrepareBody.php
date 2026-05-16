<?php
declare(strict_types=1);

// DataGovAu SDK utility: prepare_body

class DataGovAuPrepareBody
{
    public static function call(DataGovAuContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
