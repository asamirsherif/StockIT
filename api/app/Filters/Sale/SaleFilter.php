<?php

namespace App\Filters\Sale;

use App\Filters\DateFilter;
use App\Filters\FilterAbstract;
use App\Filters\RefFilter;
use App\Filters\WarehouseIDFilter;
use App\Filters\StatusFiler;
use App\Filters\GrandTotalFilter;
use App\Filters\PaymentStatusFiler;

class SaleFilter extends FilterAbstract
{
    protected $filters = [
        'ref' => RefFilter::class,
        'date' => DateFilter::class,
        'warehouse_id' => WarehouseIDFilter::class,
        'status' => StatusFilter::class,
        'GrandTotal' => GrandTotalFilter::class,
        'payment_status' => PaymentStatusFiler::class,
        
    ];
}