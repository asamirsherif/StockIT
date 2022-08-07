<?php

namespace App\Http\Controllers;

use App\Http\Requests\Unit\UnitRequest;
use App\Http\Resources\Unit\UnitCollection;
use App\Http\Resources\Unit\UnitResource;
use App\Models\Unit;
use App\Repositories\Unit\UnitRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    use ResponseTrait;

    private UnitRepositoryInterface $unitRepo;

    public function __construct(UnitRepositoryInterface $unitRepo)
    {
        $this->unitRepo = $unitRepo;
        
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Unit::class);

        if ($request->filled('search')) {
            $units = $this->unitRepo->multiSearch($request)
                        ->paginate($request->perPage);
            $units->appends(['search' => $request->search, 'perPage' => $request->perPage]);
        } else
            $units = Unit::paginate($request->perPage)->appends(['perPage' => $request->perPage]);

            return new UnitCollection($units);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UnitRequest $request)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Unit::class);

        $unitCreated = $this->unitRepo->create($request);

        if ($unitCreated)
        return $this->succWithData(new UnitResource($unitCreated));
        else
        return $this->errMsg("client not created!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Unit::class);

        $unit = Unit::find($id);

        if(!$unit)
            return $this->errMsg('This unit doesn\'t exist');
        else
            return $this->succWithData(new UnitResource($unit),'unit found');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UnitRequest $request, $id)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Unit::class);

        $unitUpdated = $this->unitRepo->update($request, $id);
        if ($unitUpdated)
            return $this->succWithData(new UnitResource($unitUpdated));
        else
            return $this->errMsg("unit not updated!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Unit::class);
        
        $unit = Unit::find($id);

        if(!$unit)
            return $this->errMsg('This unit doesn\'t exist');

        $unitDeleted = $this->unitRepo->delete($id);
        if($unitDeleted)
            return $this->succWithData(new UnitResource($unit), "unit deleted successfully");
        else
            return $this->errMsg("unit not deleted");
    }
}
