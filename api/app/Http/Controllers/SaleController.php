<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Client;
use App\Models\Unit;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\product_warehouse;
use App\Models\Role;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\Warehouse;
use App\utils\helpers;
use Carbon\Carbon;
use DB;

use App\Http\Requests\Sale\SaleRequest;
use App\Http\Resources\Sale\SaleResource;
use App\Http\Resources\Sale\ShowSaleResource;
use App\Traits\ResponseTrait;
use App\Repositories\Sale\SaleRepositoryInterface;
use App\Repositories\Sale\SaleRepository;
use App\Http\Resources\Unit\UnitResource;
// use App\Http\Resources\Product\ProductResource;

class SaleController extends Controller
{
    use ResponseTrait;

    private SaleRepositoryInterface $saleRepo;

    public function __construct(SaleRepositoryInterface $saleRepo)
    {
        $this->saleRepo = $saleRepo;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'view', Sale::class);

        if ($request->filled('search')) {
            $sales = $this->SaleRepo->multiSearch($request)
                ->paginate($request->perPage);
            $sales->appends(['search' => $request->search]);
        } else
            $sales = Sale::filter($request)->paginate($request->perPage);

        $sales->appends([
            "date" => $request->date,
            "Ref" => $request->Ref,
            "status" => $request->status,
            "client_id" => $request->client_id,
            "payment_status" => $request->payment_status,
            "warehouse_id" => $request->warehouse_id,
            "perPage" => $request->perPage
        ]);

        return SaleResource::collection($sales);
    }

    /**
     * Store a new order in database.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //$this->authorizeForUser($request->user('api'), 'create', Sale::class);

        $created = $this->saleRepo->create($request);
        if ($created)
            return $this->succWithData(new SaleResource($created), "a new Order has been added");
        else
            return $this->errMsg("Order not created!");

    }

    public function update(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'update', Sale::class);

        $sale = Sale::find($id);
        if (!$sale)
            return $this->errMsg("this order does not exist!");

        $updated = $this->saleRepo->update($request, $id);
        if ($updated)
            return $this->succWithData(new SaleResource($updated), 'Provider/supplier updated');
        else
            return $this->errMsg("Provider/Supplier does not updated!");
    }

    public function show(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'update', Sale::class);

        $sale = Sale::find($id);
        if ($sale)
            return $this->succWithData(new ShowSaleResource($sale), 'Sale found');
        else
            return $this->errMsg("Sale does not exist!");

    }

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Sale::class);

        $sale = Sale::find($id);

        if (!$sale)
            return $this->errMsg("sale dose not exist!");
        $deleted = $this->saleRepo->delete($id);
        if ($deleted)
            return $this->succWithData(new SaleResource($sale), "sale deleted");
            
    }







}
