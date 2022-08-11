<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class ClientIDFilter
{
    public function filter(Builder $builder, $value)
    {
        return $builder->orWhere('client_id', "LIKe", "%" . $value . "%");
    }
}
