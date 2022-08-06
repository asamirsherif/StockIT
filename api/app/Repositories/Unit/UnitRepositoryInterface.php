<?php

namespace App\Repositories\Unit;

use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface UnitRepositoryInterface extends CrudInterface, MultiSearchInterface {
    //
}