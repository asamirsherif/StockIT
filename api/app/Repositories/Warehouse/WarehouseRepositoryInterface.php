<?php

namespace App\Repositories\Warehouse;

use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface WarehouseRepositoryInterface  extends CrudInterface, MultiSearchInterface
{
    // special
}
