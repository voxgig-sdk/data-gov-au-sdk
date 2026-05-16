<?php
declare(strict_types=1);

// DataGovAu SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class DataGovAuMakeContext
{
    public static function call(array $ctxmap, ?DataGovAuContext $basectx): DataGovAuContext
    {
        return new DataGovAuContext($ctxmap, $basectx);
    }
}
