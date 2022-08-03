<?php

namespace App\Repositories\Product;

use App\Repositories\CrudInterface;
use App\Repositories\MultiSearchInterface;
use Illuminate\Http\Request;

interface ProductRepositoryInterface  extends CrudInterface, MultiSearchInterface
{
    public function createVariants(Request $request, int $id): array;
    public function updateVariants(Request $request, int $id): array;
    public function deleteVariants(Request $request, int $id): bool;
}
