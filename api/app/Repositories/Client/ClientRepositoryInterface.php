<?php

namespace App\Repositories\Client;

use App\Repositories\CodeableInterface;
use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface ClientRepositoryInterface extends CrudInterface, MultiSearchInterface, CodeableInterface {
    //
}