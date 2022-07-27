<?php

namespace App\Repositories\Brand;

use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface BrandRepositoryInterface  extends CrudInterface, MultiSearchInterface
{
    // special
}
