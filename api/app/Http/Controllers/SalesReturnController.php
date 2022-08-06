<?php

namespace App\Http\Controllers;

use App\Http\Requests\SalesReturn\SalesReturnRequest;
use App\Http\Resources\SalesReturn\SalesReturnResource;
use App\Models\SalesReturn;
use App\Repositories\Sales_return\Sales_returnRepository;
use App\Repositories\Sales_return\Sales_returnRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class SalesReturnController extends Controller
{

use ResponseTrait;
private Sales_returnRepositoryInterface $sales_returnRepo;


public function __construct(Sales_returnRepositoryInterface $sales_returnRepo)
{
    $this->sales_returnRepo = $sales_returnRepo;
}


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'view', User::class);

        if ($request->filled('search')) {
            $salesReturns = $this->sales_returnRepo->multiSearch($request)
                ->paginate($request->perPage);
            $salesReturns->appends(['search' => $request->search]);
        } else
            $salesReturns = SalesReturn::filter($request)->paginate($request->perPage);

        $salesReturns->appends([
            "date" => $request->date,
            "ref" => $request->Ref,
            "client_id" => $request->client_id,
            "warehouse_id" => $request->warehouse_id,
            "payment_status" => $request->payment_status,
            "status" => $request->status,
            "perPage" => $request->perPage
        ]);

        return SalesReturnResource::collection($salesReturns);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SalesReturnRequest $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', User::class);

        $created = $this->sales_returnRepo->create($request);
        if ($created)
            return $this->succWithData(new SalesReturnResource($created), "a new SalesReturn has been added");
        else
            return $this->errMsg("SalesReturn not created!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $saleReturn = SalesReturn::find($id);
        if ($saleReturn)
            return $this->succWithData(new SalesReturnResource($saleReturn), 'saleReturn data');
        else
            return $this->errMsg("this saleReturn not exist!");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SalesReturnRequest $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'update', User::class);

        $saleReturn = SalesReturn::find($id);
        if (!$saleReturn)
            return $this->errMsg("this saleReturn not exist!");

        $updated = $this->sales_returnRepo->update($request, $id);
        // $this->sales_returnRepo->updateSalesReturnDateails($request, $updated->id);
        if ($updated)
            return $this->succWithData(new SalesReturnResource($updated), 'saleReturn updated');
        else
            return $this->errMsg("saleReturn does not updated!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $saleReturn = SalesReturn::find($id);
        if (!$saleReturn)
            return $this->errMsg("this saleReturn not exist!");
        $deleted = $this->sales_returnRepo->delete($id);
        if ($deleted)
            return $this->succWithData(new SalesReturnResource($saleReturn), "saleReturn deleted!");
        else
            return $this->errMsg("saleReturn dose not deleted!");
    }
}
