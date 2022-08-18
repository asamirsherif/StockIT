<?php

namespace App\Filters\User;
use App\Filters\FilterAbstract;
use App\Filters\UsernameFilter;

class UserFilter extends FilterAbstract
{
    protected $filters = [

        'username' => UsernameFilter::class,
    ];
}