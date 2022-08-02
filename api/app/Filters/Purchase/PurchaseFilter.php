<?php

namespace App\Filters\Purchase;

use App\Filters\DateFilter;
use App\Filters\FilterAbstract;
use App\Filters\RefFilter;
use App\Filters\UserIDFilter;
use App\Filters\WarehouseIDFilter;

class PurchaseFilter extends FilterAbstract
{
    protected $filters = [
        'user_id' => UserIDFilter::class,
        'warehouse_id' => WarehouseIDFilter::class,
        'ref' =>RefFilter::class,
        'date' =>DateFilter::class,
        'provider_id' => PurproviderIDFilter::class,
        'status' => PurStatus::class,
        'payment_status' => PurPayment_status::class
    ];
}