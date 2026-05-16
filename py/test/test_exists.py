# ProjectName SDK exists test

import pytest
from datagovau_sdk import DataGovAuSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = DataGovAuSDK.test(None, None)
        assert testsdk is not None
