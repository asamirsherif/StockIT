<?php

namespace App\Http\Controllers;

use App\Http\Resources\Product\ShowProductResource;
use App\Models\Product;
use App\Models\ProductWarehouse;
use App\Models\Warehouse;
use Illuminate\Http\Request;

class ProductWarehouseSearchController extends Controller
{
    public function purchaseSearch(Request $request)
    {

        $products = [];
        if ($request->filled('search')) {
            $products = Product::where(function ($q) use ($request) {
                return $q->where('name', 'LIKE', "%" . $request->search . "%")
                    ->orWhere('code', 'LIKE', "%" . $request->search . "%")
                    ->orWhere(function ($q) use ($request) {
                        return $q->whereHas('productVariants', function ($q) use ($request) {
                            return $q->where('name', "LIKE", "%" . $request->search . "%");
                        });
                    });
            })->paginate($request->perPage);
        }


        return $products ? ShowProductResource::collection($products) : [];
    }


    public function saleSearch(Request $request, int $id)
    {
        $products = [];
        $warehouse = Warehouse::find($id);
        if ($request->filled('search')) {
            $products = $warehouse->products()->where(function ($q) use ($request) {
                return $q->where('name', 'LIKE', "%" . $request->search . "%")
                    ->orWhere('code', 'LIKE', "%" . $request->search . "%")
                    ->orWhere(function ($q) use ($request) {
                        return $q->whereHas('productVariants', function ($q) use ($request) {
                            return $q->where('name', "LIKE", "%" . $request->search . "%");
                        });
                    });
            })->paginate($request->perPage);
        }

        return $products ? ShowProductResource::collection($products) : [];

    }
}
