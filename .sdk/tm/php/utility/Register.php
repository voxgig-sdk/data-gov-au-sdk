<?php
declare(strict_types=1);

// DataGovAu SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

DataGovAuUtility::setRegistrar(function (DataGovAuUtility $u): void {
    $u->clean = [DataGovAuClean::class, 'call'];
    $u->done = [DataGovAuDone::class, 'call'];
    $u->make_error = [DataGovAuMakeError::class, 'call'];
    $u->feature_add = [DataGovAuFeatureAdd::class, 'call'];
    $u->feature_hook = [DataGovAuFeatureHook::class, 'call'];
    $u->feature_init = [DataGovAuFeatureInit::class, 'call'];
    $u->fetcher = [DataGovAuFetcher::class, 'call'];
    $u->make_fetch_def = [DataGovAuMakeFetchDef::class, 'call'];
    $u->make_context = [DataGovAuMakeContext::class, 'call'];
    $u->make_options = [DataGovAuMakeOptions::class, 'call'];
    $u->make_request = [DataGovAuMakeRequest::class, 'call'];
    $u->make_response = [DataGovAuMakeResponse::class, 'call'];
    $u->make_result = [DataGovAuMakeResult::class, 'call'];
    $u->make_point = [DataGovAuMakePoint::class, 'call'];
    $u->make_spec = [DataGovAuMakeSpec::class, 'call'];
    $u->make_url = [DataGovAuMakeUrl::class, 'call'];
    $u->param = [DataGovAuParam::class, 'call'];
    $u->prepare_auth = [DataGovAuPrepareAuth::class, 'call'];
    $u->prepare_body = [DataGovAuPrepareBody::class, 'call'];
    $u->prepare_headers = [DataGovAuPrepareHeaders::class, 'call'];
    $u->prepare_method = [DataGovAuPrepareMethod::class, 'call'];
    $u->prepare_params = [DataGovAuPrepareParams::class, 'call'];
    $u->prepare_path = [DataGovAuPreparePath::class, 'call'];
    $u->prepare_query = [DataGovAuPrepareQuery::class, 'call'];
    $u->result_basic = [DataGovAuResultBasic::class, 'call'];
    $u->result_body = [DataGovAuResultBody::class, 'call'];
    $u->result_headers = [DataGovAuResultHeaders::class, 'call'];
    $u->transform_request = [DataGovAuTransformRequest::class, 'call'];
    $u->transform_response = [DataGovAuTransformResponse::class, 'call'];
});
