<?php

namespace App\Filters\Adjustment;

use App\Filters\DateFilter;
use App\Filters\FilterAbstract;
use App\Filters\RefFilter;
use App\Filters\UserIDFilter;
use App\Filters\WarehouseIDFilter;

class AdjustmentFilter extends FilterAbstract
{
    protected $filters = [
        'user_id'       => UserIDFilter::class,
        'warehouse_id'  => WarehouseIDFilter::class,
        'ref'           => RefFilter::class,
        'date'          => DateFilter::class
    ];
}