<?php

namespace App\Repositories\Currency;

use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface CurrencyRepositoryInterface  extends CrudInterface, MultiSearchInterface
{
    // special
}
