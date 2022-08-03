<?php

namespace App\Repositories\Adjustment;

use App\Repositories\CodeableInterface;
use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface AdjustmentRepositoryInterface extends CrudInterface, MultiSearchInterface, CodeableInterface {
    //
}