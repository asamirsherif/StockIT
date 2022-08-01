<?php

namespace App\Filters;

class CodeFilter
{
    public function filter($builder, $value)
    {
        return $builder->orWhere('code', $value);
    }
}
