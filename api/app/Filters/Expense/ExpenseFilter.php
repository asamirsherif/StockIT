<?php

namespace App\Filters\Expense;

use App\Filters\DateFilter;
use App\Filters\FilterAbstract;
use App\Filters\RefFilter;
use App\Filters\WarehouseIDFilter;

class ExpenseFilter extends FilterAbstract
{
    protected $filters = [
        'ref' => RefFilter::class,
        'date' => DateFilter::class,
        'expense_category_id' => ExpCatIDFilter::class,
        'warehouse_id' => WarehouseIDFilter::class,
    ];
}
