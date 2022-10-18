<?php

namespace App\Filters;

class UsernameFilter
{
    public function filter($builder, $value)
    {
        return $builder->Where('username', "LIKE", "%" . $value . "%");
    }
}
