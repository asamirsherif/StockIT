<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\ProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Http\Resources\Product\ProductResource;
use App\Http\Resources\Product\ShowProductResource;
use App\Models\Product;
use App\Repositories\Product\ProductRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    use ResponseTrait;

    private ProductRepositoryInterface $proRepo;

    public function __construct(ProductRepositoryInterface $proRepo)
    {
        $this->proRepo = $proRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', Product::class);
        if ($request->filled('search')) {
            $products = $this->proRepo->multiSearch($request)
                ->paginate($request->perPage);
            $products->appends(['search' => $request->search]);
        } else {
            $products = Product::filter($request)->paginate($request->perPage);
        }

        $products->appends([
            'perPage' => $request->perPage,
            'name' => $request->name,
            'category_id' => $request->category_id,
            'brand_id' => $request->brand_id,
            'code' => $request->code
        ]);

        return ProductResource::collection($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        $this->authorizeForUser($request->user('api'), 'add', Product::class);

        $created = $this->proRepo->create($request);
        if ($request->is_variant == 'true')
            $this->proRepo->createVariants($request, $created->id);
        if ($created)
            return $this->succWithData(new ProductResource($created), 'Product created');
        else
            return $this->errMsg("product not created!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'view', Product::class);
        $product = Product::find($id);
        if ($product)
            return $this->succWithData(new ShowProductResource($product), 'Product found');
        else
            return $this->errMsg("Product not exist!");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'edit', Product::class);
        $product = Product::find($id);
        if (!$product)
            return $this->errMsg("Product dose not exist!");

        $updated = $this->proRepo->update($request, $id);

        if ($request->is_variant == 'true')
            $this->proRepo->updateVariants($request, $id);

        if ($updated)
            return $this->succWithData(new ProductResource($updated), "Product updated");
        else
            return $this->errMsg("product not updated!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Product::class);
        $product = Product::find($id);
        if (!$product)
            return $this->errMsg("Product dose not exist!");

        $variants = $product->productVariants;

        if (count($variants) > 0) {
            $request = new Request(['variants' => []]);
            $this->proRepo->deleteVariants($request, $id);
        }


        $deleted = $this->proRepo->delete($id);
        if ($deleted)
            return $this->succWithData(new ProductResource($product), "Product deleted");
    }
}
