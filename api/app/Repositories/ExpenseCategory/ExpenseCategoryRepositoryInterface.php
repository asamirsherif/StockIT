<?php

namespace App\Repositories\ExpenseCategory;

use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface ExpenseCategoryRepositoryInterface  extends CrudInterface, MultiSearchInterface
{
    // special
}
