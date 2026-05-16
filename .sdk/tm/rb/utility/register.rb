# DataGovAu SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

DataGovAuUtility.registrar = ->(u) {
  u.clean = DataGovAuUtilities::Clean
  u.done = DataGovAuUtilities::Done
  u.make_error = DataGovAuUtilities::MakeError
  u.feature_add = DataGovAuUtilities::FeatureAdd
  u.feature_hook = DataGovAuUtilities::FeatureHook
  u.feature_init = DataGovAuUtilities::FeatureInit
  u.fetcher = DataGovAuUtilities::Fetcher
  u.make_fetch_def = DataGovAuUtilities::MakeFetchDef
  u.make_context = DataGovAuUtilities::MakeContext
  u.make_options = DataGovAuUtilities::MakeOptions
  u.make_request = DataGovAuUtilities::MakeRequest
  u.make_response = DataGovAuUtilities::MakeResponse
  u.make_result = DataGovAuUtilities::MakeResult
  u.make_point = DataGovAuUtilities::MakePoint
  u.make_spec = DataGovAuUtilities::MakeSpec
  u.make_url = DataGovAuUtilities::MakeUrl
  u.param = DataGovAuUtilities::Param
  u.prepare_auth = DataGovAuUtilities::PrepareAuth
  u.prepare_body = DataGovAuUtilities::PrepareBody
  u.prepare_headers = DataGovAuUtilities::PrepareHeaders
  u.prepare_method = DataGovAuUtilities::PrepareMethod
  u.prepare_params = DataGovAuUtilities::PrepareParams
  u.prepare_path = DataGovAuUtilities::PreparePath
  u.prepare_query = DataGovAuUtilities::PrepareQuery
  u.result_basic = DataGovAuUtilities::ResultBasic
  u.result_body = DataGovAuUtilities::ResultBody
  u.result_headers = DataGovAuUtilities::ResultHeaders
  u.transform_request = DataGovAuUtilities::TransformRequest
  u.transform_response = DataGovAuUtilities::TransformResponse
}
