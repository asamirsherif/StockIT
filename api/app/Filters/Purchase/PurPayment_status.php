<?php

namespace App\Filters\Purchase;

use Illuminate\Database\Eloquent\Builder;

class PurPayment_status
{
    public function filter(Builder $builder, $value)
    {
        return $value ? $builder->orWhere('payment_status', $value) : $builder;
    }
}