<?php

namespace App\Repositories\Purchase;

use App\Repositories\CodeableInterface;
use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface PurchaseRepositoryInterface extends CrudInterface, MultiSearchInterface, CodeableInterface {
    //
}