<?php

namespace App\Repositories\Product;

use App\Models\Product;
use App\Traits\ImageTrait;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ProductRepository implements ProductRepositoryInterface
{

    use ImageTrait;


    public function read(int $id): Model
    {
        return Product::find($id);
    }

    public function create(Request $request): Model
    {
        $product = new Product();
        DB::transaction(function () use ($request, $product) {
            $product->name = $request->name;
            $product->code = $request->code;
            $product->Type_barcode = $request->type_barcode;
            $product->price = $request->price;
            $product->category_id = $request->category_id;
            $product->brand_id = $request->brand_id;
            $product->TaxNet = $request->taxNet ? $request->taxNet : 0;
            $product->tax_method = $request->tax_method;
            $product->note = $request->note;
            $product->cost = $request->cost;
            $product->unit_id = $request->unit_id;
            $product->unit_sale_id = $request->unit_sale_id;
            $product->unit_purchase_id = $request->unit_purchase_id;
            $product->stock_alert = $request->stock_alert ? $request->stock_alert : 0;
            $product->is_variant = $request->is_variant == 'true' ? 1 : 0;
            $product->image = $this->uploadMultiImage($request, '/images/products/');

            $product->save();
        }, 3);

        return $product;
    }

    public function update(Request $request, int $id): Model
    {
        $product = $this->read($id);
        DB::transaction(function () use ($request, $product) {
            $product->name = $request->name;
            $product->code = $request->code;
            $product->Type_barcode = $request->type_barcode;
            $product->price = $request->price;
            $product->category_id = $request->category_id;
            $product->brand_id = $request->brand_id ? $request->brand_id : $product->brand_id;
            $product->TaxNet = $request->taxNet ? $request->taxNet : $product->TaxNet;
            $product->tax_method = $request->tax_method ? $request->tax_method : $product->tax_method;
            $product->note = $request->note ? $request->note : $product->note;
            $product->cost = $request->cost;
            $product->unit_id = $request->unit_id;
            $product->unit_sale_id = $request->unit_sale_id ? $request->unit_sale_id : $product->unit_sale_id;
            $product->unit_purchase_id = $request->unit_purchase_id ? $request->unit_purchase_id : $product->unit_purchase_id;
            $product->stock_alert = $request->stock_alert ?  $request->stock_alert : $product->stock_alert;
            $product->is_variant = $request->is_variant == 'true' ? 1 : 0;
            $product->image = $request->hasFile('images') ? $this->uploadMultiImage($request, '/images/products/') : $product->image;

            $product->save();
        }, 3);

        return $product;
    }

    public function delete(int $id): bool
    {
        $product = $this->read($id);
        $deleteImages = $this->deleteMultiImage($product->image, "/images/products");
        if ($deleteImages) {
            $product->delete();
            return true;
        } else
            return false;
    }



    public function multiSearch(Request $request): Builder
    {
        $products = Product::filter($request)->where(function ($q) use ($request) {
            return $q->where('name', 'LIKE', "%" . $request->search . "%")
                ->orWhere('code', 'LIKE', "%" . $request->search . "%")
                ->orWhere(function ($q) use ($request) {
                    return $q->whereHas('category', function ($q) use ($request) {
                        $q->where('name', 'LIKE', "%" . $request->search . "%");
                    });
                })
                ->orWhere(function ($q) use ($request) {
                    return $q->whereHas('brand', function ($q) use ($request) {
                        $q->where('name', 'LIKE', "%" . $request->search . "%");
                    });
                });
        });

        return $products;
    }


    public function createVariants(Request $request, $id): array
    {
        $product = $this->read($id);
        $variants = [];
        foreach ($request->variants as $variant) {
            $variantModel = $product->productVariants();
            DB::transaction(function () use ($variantModel, $variant, $id) {
                $variantModel->create([
                    'product_id' => $id,
                    'name' => $variant
                ]);
            }, 3);
            $variants[] = $variantModel;
        }

        return $variants;
    }




    public function updateVariants(Request $request, int $id): array
    {
        //delete useless variants
        $this->deleteVariants($request, $id);

        $product = $this->read($id);
        $variants = [];
        foreach ($request->variants as $variant) {
            $variantModel = $product->productVariants();
            DB::transaction(function () use ($variantModel, $variant, $id) {
                $variantModel->firstOrCreate([
                    'product_id' => $id,
                    'name' => $variant
                ]);
            }, 3);
            $variants[] = $variantModel;
        }

        return $variants;
    }



    public function deleteVariants(Request $request, int $id): bool
    {
        $productVariants = $this->read($id)->productVariants()->get('name')->toArray();
        foreach ($productVariants as $proVariant) {
            $proVariant = $proVariant['name'];
            if (!in_array($proVariant, $request->variants)) {
                DB::transaction(function () use ($id, $proVariant) {
                    $this->read($id)->productVariants()->where('name', $proVariant)->delete();
                }, 3);
            }
        }

        return true;
    }
}
