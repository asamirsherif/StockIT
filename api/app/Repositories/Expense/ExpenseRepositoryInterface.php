<?php

namespace App\Repositories\Expense;

use App\Repositories\CodeableInterface;
use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;


interface ExpenseRepositoryInterface  extends CrudInterface, MultiSearchInterface,CodeableInterface
{
    // special
}
