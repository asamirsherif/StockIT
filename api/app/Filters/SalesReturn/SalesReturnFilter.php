<?php


namespace App\Filters\SalesReturn;

use App\Filters\DateFilter;
use App\Filters\RefFilter;
use App\Filters\FilterAbstract;
use App\Filters\WarehouseIDFilter;
use App\Filters\StatusFilter;
use App\Filters\ClientIDFilter;
use App\Filters\PaymentStatusFilter;

class SalesReturnFilter extends FilterAbstract
{
    protected $filters = [
        'date' => DateFilter::class,
        'ref' => RefFilter::class,
        'client_id' =>ClientIDFilter::class,
        'warehouse_id' => WarehouseIDFilter::class,
        'payment_status' => PaymentStatusFilter::class,
        'status' => StatusFilter::class,
    ];
}
