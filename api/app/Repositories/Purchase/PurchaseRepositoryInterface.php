<?php

namespace App\Repositories\Purchase;

use App\Repositories\CodeableInterface;
use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Http\Request;

interface PurchaseRepositoryInterface extends CrudInterface, MultiSearchInterface, CodeableInterface {

    public function createPurchaseDateails(Request $request, int $id): array;
    public function updatePurchaseDateails(Request $request, int $id): array;
    public function deletePurchaseDateails(Request $request, int $id): bool;

    public function addProductWarehouse(Request $request);
    public function updateProductWarehouse(Request $request,int $id);
    public function deletePurchaseProducts(int $id);

    
}