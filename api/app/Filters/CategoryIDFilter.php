<?php

namespace App\Filters;

class CategoryIDFilter {
    public function filter($builder, $value)
    {
        return $builder->orWhere('category_id', $value);
    }
}