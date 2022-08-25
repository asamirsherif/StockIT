<?php

namespace App\Repositories\Permission;

use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface PermissionRepositoryInterface  extends CrudInterface, MultiSearchInterface
{
    // special
}