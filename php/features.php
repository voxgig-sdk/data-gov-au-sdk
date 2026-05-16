<?php
declare(strict_types=1);

// DataGovAu SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class DataGovAuFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new DataGovAuBaseFeature();
            case "test":
                return new DataGovAuTestFeature();
            default:
                return new DataGovAuBaseFeature();
        }
    }
}
