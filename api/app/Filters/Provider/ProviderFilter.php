<?php


namespace App\Filters\Provider;

use App\Filters\CodeFilter;
use App\Filters\EmailFilter;
use App\Filters\FilterAbstract;
use App\Filters\NameFilter;
use App\Filters\PhoneFilter;

class ProviderFilter extends FilterAbstract
{
    protected $filters = [
        'code' => CodeFilter::class,
        'name' => NameFilter::class,
        'phone' => PhoneFilter::class,
        'email' => EmailFilter::class,
    ];
}
