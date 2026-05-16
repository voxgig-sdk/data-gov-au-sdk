# DataGovAu SDK exists test

require "minitest/autorun"
require_relative "../DataGovAu_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = DataGovAuSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
