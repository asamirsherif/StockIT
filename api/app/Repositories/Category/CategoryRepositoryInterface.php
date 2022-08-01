<?php

namespace App\Repositories\Category;

use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface CategoryRepositoryInterface extends CrudInterface, MultiSearchInterface {
    //
}