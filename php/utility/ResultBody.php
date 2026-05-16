<?php
declare(strict_types=1);

// DataGovAu SDK utility: result_body

class DataGovAuResultBody
{
    public static function call(DataGovAuContext $ctx): ?DataGovAuResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
