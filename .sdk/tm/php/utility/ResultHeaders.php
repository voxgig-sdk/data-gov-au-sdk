<?php
declare(strict_types=1);

// DataGovAu SDK utility: result_headers

class DataGovAuResultHeaders
{
    public static function call(DataGovAuContext $ctx): ?DataGovAuResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
