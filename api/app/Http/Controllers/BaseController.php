<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function sendResponse($result,$msg){
        $response=[
            'success'=>true,
            'message'=>$msg,
        ];
        if(!empty($result)){
            $response['data']=$result;
        }
        return response()->json($response, 200);
    }

    public function sendError($error_msg, $error=null){
        $response=[
            'success'=>false,
            'message'=>$error_msg,
        ];
        if(isset($error)){
            $response['errors']= $error;
        }

        return response()->json($response, 400);
    }
}
