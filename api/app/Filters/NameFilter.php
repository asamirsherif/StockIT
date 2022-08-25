<?php

namespace App\Filters;

class NameFilter
{
    public function filter($builder, $value)
    {
        return $builder->Where('name', "LIKE", "%" . $value . "%");
    }
}
