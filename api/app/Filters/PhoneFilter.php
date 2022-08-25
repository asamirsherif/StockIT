<?php

namespace App\Filters;

class PhoneFilter
{
    public function filter($builder, $value)
    {
        return $builder->Where('phone', $value);
    }
}
