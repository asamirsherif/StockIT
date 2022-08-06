<?php

namespace App\Filters;

class EmailFilter
{
    public function filter($builder, $value)
    {
        return $builder->orWhere('email', $value);
    }
}
