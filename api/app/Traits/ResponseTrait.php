<?php

namespace App\Traits;

trait ResponseTrait
{
    /**
     * when response is success with msg
     * @param String $msg
     * @return response
     */
    public function succMsg($msg)
    {
        return response()->json([
            'success' => true,
            'message' => $msg
        ], 200);
    }

    /**
     * when response is error with msg
     * @param String $msg
     * @return response
     */
    public function errMsg($msg)
    {
        return response()->json([
            'success' => false,
            'message' => $msg
        ], 401);
    }

    /**
     * when response is success msg with data
     * @param Resourse $data
     * @param String $msg
     * @return response
     */
    public function succWithData($data, $msg = null)
    {
        return response()->json([
            'success' => true,
            'message' => $msg,
            'data' => $data
        ], 200);
    }

    /**
     * when response is error msg with data
     * @param array $data
     * @param String $msg
     * @return response
     */
    public function errWithData($data, $msg = null)
    {
        return response()->json([
            'success' => false,
            'message' => $msg,
            'data' => $data
        ], 401);
    }
}