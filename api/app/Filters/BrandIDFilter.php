<?php

namespace App\Filters;

class BrandIDFilter
{
    public function filter($builder, $value)
    {
        return $builder->orWhere('brand_id', $value);
    }
}
