<?php

namespace App\Http\Controllers;

use App\Http\Requests\Adjustment\AdjustmentRequest;
use App\Http\Resources\Adjustment\AdjustmentCollection;
use App\Http\Resources\Adjustment\AdjustmentResource;
use App\Models\Adjustment;
use App\Repositories\Adjustment\AdjustmentRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class AdjustmentController extends Controller
{
    use ResponseTrait;

    private AdjustmentRepositoryInterface $adjustmentRepo;


    public function __construct(AdjustmentRepositoryInterface $adjustmentRepo)
    {
        $this->adjustmentRepo = $adjustmentRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->filled('search')) {
            $adjustments = $this->adjustmentRepo->multiSearch($request)
                                ->paginate($request->perPage);
            $adjustments->appends('search', $request->search);

        } else
            $adjustments = Adjustment::filter($request)->paginate($request->perPage);

            $adjustments->appends([
                'user_id'      => $request->user_id,
                'warehouse_id' => $request->warehouse_id,
                'ref'          => $request->ref,
                'date'         => $request->date,
                'perPage'      => $request->perPage
            ]);
            return new AdjustmentCollection($adjustments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdjustmentRequest $request)
    {
        $adjustmentCreated = $this->adjustmentRepo->create($request);

        $this->adjustmentRepo->createAdjustmentDetails($request, $adjustmentCreated->id);
        $this->adjustmentRepo->addProductWarehouse($request);

        if ($adjustmentCreated)
            return $this->succWithData(new AdjustmentResource($adjustmentCreated), "Adjustment Created successfully");
        else
            return $this->errMsg("Adjustment not created!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $adjustment = $this->adjustmentRepo->read($id);

        if($adjustment)
            return $this->succWithData(new AdjustmentResource($adjustment), "Adjustment found");
        else
            return $this->errMsg('This adjustment doesn\'t exist');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AdjustmentRequest $request, $id)
    {
        $adjustment = Adjustment::find($id);

        // check if it found or not
        if(!$adjustment)
            return $this->errMsg('This adjustment doesn\'t exist');

        // update
        $adjustmentUpdated = $this->adjustmentRepo->update($request, $id);
        if ($adjustmentUpdated)
            return $this->succWithData(new AdjustmentResource($adjustmentUpdated), "Adjustment updated successfully");
        else
            return $this->errMsg("adjustment not updated!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $adjustment = Adjustment::find($id);

        if(!$adjustment)
            return $this->errMsg('This adjustment doesn\'t exist');

        $adjustmentDeleted = $this->adjustmentRepo->delete($id);

        if($adjustmentDeleted)
            return $this->succWithData(new AdjustmentResource($adjustment), "Adjustment deleted successfully");
        else
            return $this->errMsg("Adjustment not deleted");
    }
}
