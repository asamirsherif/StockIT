<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class ClientIDFilter
{
    public function filter(Builder $builder, $value)
    {
        return $builder->Where('client_id',$value);
    }
}
