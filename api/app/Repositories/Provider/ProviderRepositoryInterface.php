<?php

namespace App\Repositories\Provider;

use App\Repositories\CodeableInterface;
use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;


interface ProviderRepositoryInterface  extends CrudInterface, MultiSearchInterface,CodeableInterface
{
}
