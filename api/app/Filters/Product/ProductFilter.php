<?php

namespace App\Filters\Product;

use App\Filters\BrandIDFilter;
use App\Filters\CategoryIDFilter;
use App\Filters\CodeFilter;
use App\Filters\FilterAbstract;
use App\Filters\NameFilter;

class ProductFilter extends FilterAbstract
{
    protected $filters = [
        'code' => CodeFilter::class,
        'name' => NameFilter::class,
        'brand_id' => BrandIDFilter::class,
        'category_id' => CategoryIDFilter::class
    ];
}
