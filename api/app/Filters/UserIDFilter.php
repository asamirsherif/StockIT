<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class UserIDFilter
{
    public function filter(Builder $builder, $value)
    {
        return $builder->Where('user_id', $value);
    }
}
