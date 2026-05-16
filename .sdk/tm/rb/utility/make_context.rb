# DataGovAu SDK utility: make_context
require_relative '../core/context'
module DataGovAuUtilities
  MakeContext = ->(ctxmap, basectx) {
    DataGovAuContext.new(ctxmap, basectx)
  }
end
