<?php

namespace App\Filters;

class BrandIDFilter
{
    public function filter($builder, $value)
    {
        return $builder->Where('brand_id', $value);
    }
}
