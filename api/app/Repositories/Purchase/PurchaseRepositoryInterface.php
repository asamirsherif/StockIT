<?php

namespace App\Repositories\Purchase;

use App\Repositories\CodeableInterface;
use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface PurchaseRepositoryInterface extends CrudInterface, MultiSearchInterface, CodeableInterface {

    public function createPurchaseDateails(Request $request, int $id): array;
    public function addProductWarehouse(Request $request);
    public function updatePurchaseDateails(Request $request, int $id): array;
}