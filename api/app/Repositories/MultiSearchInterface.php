<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface MultiSearchInterface
{
    public function multiSearch(Request $request): Builder;
}
