<?php

namespace App\Http\Controllers;

use App\Http\Requests\Warehouse\UpdateWarehouseRequest;
use App\Http\Requests\Warehouse\WarehouseRequest;
use App\Http\Resources\Warehouse\WarehouseResource;
use App\Models\Warehouse;
use App\Repositories\Warehouse\WarehouseRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class WarehouseController extends Controller
{

    use ResponseTrait;

    private WarehouseRepositoryInterface $warehouseRepo;

    public function __construct(WarehouseRepositoryInterface $warehouseRepo)
    {
        $this->warehouseRepo = $warehouseRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //we have 2 request .. perPage & search
        if ($request->filled('search')) {
            $brands = $this->warehouseRepo->multiSearch($request)
                ->paginate($request->perPage);
            $brands->appends(['search' => $request->search]);
        } else
            $brands = Warehouse::paginate($request->perPage);

        $brands->appends(['perPage' => $request->perPage]);
        return WarehouseResource::collection($brands);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(WarehouseRequest $request)
    {
        $created = $this->warehouseRepo->create($request);
        if ($created)
            return $this->succWithData(new WarehouseResource($created), "warehouse created");
        else
            return $this->errMsg("Warehouse not Created!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $warehouse = $this->warehouseRepo->read($id);
        if ($warehouse)
            return $this->succWithData(new WarehouseResource($warehouse));
        else
            return $this->errMsg("this warehouse does not exist");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Warehouse  $warehouse
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateWarehouseRequest $request, int $id)
    {
        $updated = $this->warehouseRepo->update($request, $id);
        if ($updated)
            return $this->succWithData(new WarehouseResource($updated), "warehouse updated");
        else
            return $this->errMsg("Warehouse not updated!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Warehouse  $warehouse
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $warehouse = Warehouse::find($id);
        if (!$warehouse)
            return $this->errMsg("The warehouse doesnt exist!");
        $deleted = $this->warehouseRepo->delete($id);
        if ($deleted)
            return $this->succWithData(new WarehouseResource($warehouse), "Warehouse Deleted");
        else
            return $this->errMsg("warehouse not deleted!");
    }
}
