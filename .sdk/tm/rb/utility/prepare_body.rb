# DataGovAu SDK utility: prepare_body
require_relative 'media'
module DataGovAuUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return DataGovAuUtilities.raw_body(ctx.reqdata) if DataGovAuUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
