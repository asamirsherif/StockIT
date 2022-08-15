<?php

namespace App\Repositories\Adjustment;

use App\Repositories\CodeableInterface;
use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface AdjustmentRepositoryInterface extends CrudInterface, MultiSearchInterface, CodeableInterface {
    public function createAdjustmentDetails(Request $request, int $id): array;
    public function addProductWarehouse(Request $request);
    public function updateAdjustmentDetails(Request $request, int $id): array;
    public function deleteAdjustmentDetails(Request $request, int $id): bool;
}