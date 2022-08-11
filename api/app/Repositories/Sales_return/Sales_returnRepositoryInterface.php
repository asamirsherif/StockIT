<?php

namespace App\Repositories\Sales_return;

use App\Repositories\CodeableInterface;
use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface Sales_returnRepositoryInterface  extends CrudInterface, MultiSearchInterface,CodeableInterface
{


        public function createSalesReturneDateails(Request $request, int $id): array;

        public function updateSalesReturnDateails(Request $request, int $id): array;
        public function deleteSalesReturnDateails(Request $request, int $id): bool;

}
