<?php

namespace App\Http\Controllers;

use App\Http\Requests\Purchase\PurchaseRequest;
use App\Http\Resources\Purchase\PurchaseCollection;
use App\Http\Resources\Purchase\PurchaseResource;
use App\Models\Purchase;
use App\Repositories\Purchase\PurchaseRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    use ResponseTrait;

    private PurchaseRepositoryInterface $purchaseRepo;

    public function __construct(PurchaseRepositoryInterface $purchaseRepo)
    {
        $this->purchaseRepo = $purchaseRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->filled('search')) {
            $purchases = $this->purchaseRepo->multiSearch($request)
                                ->paginate($request->perPage);
            $purchases->appends('search', $request->search);

        } else

            $purchases = Purchase::filter($request)->paginate($request->perPage);

            $purchases->appends([
                'user_id'        => $request->user_id,
                'warehouse_id'   => $request->warehouse_id,
                'ref'            => $request->ref,
                'date'           => $request->date,
                'provider_id'    => $request->provider_id,
                'status'         => $request->status,
                'payment_status' => $request->payment_status,
                'perPage'        => $request->perPage

            ]);
            return new PurchaseCollection($purchases);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PurchaseRequest $request)
    {
        $purchaseCreated = $this->purchaseRepo->create($request);

        if ($purchaseCreated)
            return $this->succWithData(new PurchaseResource($purchaseCreated), "purchase Created successfully");
        else
            return $this->errMsg("purchase not created!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $purchase = Purchase::find($id);

        if(!$purchase)
            return $this->errMsg('This purchase doesn\'t exist');
        else
            return $this->purchaseRepo->read($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PurchaseRequest $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $purchase = Purchase::find($id);

        if(!$purchase)
            return $this->errMsg('This purchase doesn\'t exist');

            $purchaseDeleted = $this->purchaseRepo->delete($id);

        if($purchaseDeleted)
            return $this->succWithData(new PurchaseResource($purchase), "purchase deleted successfully");
        else
            return $this->errMsg("purchase not deleted");
    }
}
