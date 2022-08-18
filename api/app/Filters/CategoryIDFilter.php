<?php

namespace App\Filters;

class CategoryIDFilter {
    public function filter($builder, $value)
    {
        return $builder->Where('category_id', $value);
    }
}