<?php

namespace App\Repositories\User;

use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface UserRepositoryInterface  extends CrudInterface, MultiSearchInterface
{
    // special
}