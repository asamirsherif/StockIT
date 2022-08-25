<?php

namespace App\Filters\Permission;
use App\Filters\FilterAbstract;
use App\Filters\NameFilter;

class RoleFilter extends FilterAbstract
{
    protected $filters = [

        'name' => NameFilter::class,
    ];
}