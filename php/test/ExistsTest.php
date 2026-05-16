<?php
declare(strict_types=1);

// DataGovAu SDK exists test

require_once __DIR__ . '/../datagovau_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = DataGovAuSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
