<?php

namespace App\Filters;

class CodeFilter
{
    public function filter($builder, $value)
    {
        return $builder->Where('code', "LIKE", "%" . $value . "%");
    }
}
