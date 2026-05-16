# DataGovAu SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module DataGovAuFeatures
  def self.make_feature(name)
    case name
    when "base"
      DataGovAuBaseFeature.new
    when "test"
      DataGovAuTestFeature.new
    else
      DataGovAuBaseFeature.new
    end
  end
end
