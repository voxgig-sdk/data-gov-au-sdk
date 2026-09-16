# DataGovAu SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module DataGovAuFeatures
  def self.make_feature(name)
    case name
    when "base"
      DataGovAuBaseFeature.new
    when "ratelimit"
      DataGovAuRatelimitFeature.new
    when "retry"
      DataGovAuRetryFeature.new
    when "test"
      DataGovAuTestFeature.new
    when "timeout"
      DataGovAuTimeoutFeature.new
    else
      DataGovAuBaseFeature.new
    end
  end
end
