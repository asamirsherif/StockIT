<?php

namespace App\Repositories\Expense;

use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;


interface ExpenseRepositoryInterface  extends CrudInterface, MultiSearchInterface
{
    // special
}
