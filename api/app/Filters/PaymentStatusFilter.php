<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class PaymentStatusFilter
{
    public function filter(Builder $builder, $value)
    {
        return $builder->orWhere('payment_status', "LIKe", "%" . $value . "%");
    }
}
