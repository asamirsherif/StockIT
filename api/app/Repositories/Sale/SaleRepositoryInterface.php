<?php

namespace App\Repositories\Sale;

use App\Repositories\CodeableInterface;
use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;


interface SaleRepositoryInterface  extends CrudInterface, MultiSearchInterface,CodeableInterface
{
    // special
}
