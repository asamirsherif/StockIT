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

    //    Set cookie
    public function setCookie($cookie_name, $cookie_value)
    {
        $domain = ($_SERVER['SERVER_NAME'] != 'localhost') ? $_SERVER['SERVER_NAME'] : '.'.$_SERVER['SERVER_NAME'];
        $this->destroyCookie($cookie_name);
        setcookie($cookie_name, $cookie_value, time() + 2147483647, '/', $domain); 
    }

    // Get cookie
    public function getCookie($cookie_name)
    {
        if (isset($_COOKIE[$cookie_name])) {
            return $_COOKIE[$cookie_name];
        } else {
            return false;
        }
    }

    // Has cookie
    public function hasCookie($cookie_name)
    {
        if (isset($_COOKIE[$cookie_name])) {
            return true;
        } else {
            return false;
        }
    }

    // Destroy cookie
    public function destroyCookie($cookie_name)
    {
        $domain = ($_SERVER['SERVER_NAME'] != 'localhost') ? $_SERVER['SERVER_NAME'] : '.'.$_SERVER['SERVER_NAME'];
        if (isset($_COOKIE[$cookie_name])) {
            unset($_COOKIE[$cookie_name]);
            setcookie($cookie_name, '', time() - 2147483647, '/',  $domain);

        }
    }

    // Clear cookie
    public function clearCookie()
    {
        $domain = ($_SERVER['SERVER_NAME'] != 'localhost') ? $_SERVER['SERVER_NAME'] : '.'.$_SERVER['SERVER_NAME'];
        if (isset($_COOKIE['Stocky_token'])) {
            unset($_COOKIE['Stocky_token']);
            setcookie('Stocky_token', '', time() - 2147483647, '/', $domain); // empty value and old timestamp
        }
    }
}
