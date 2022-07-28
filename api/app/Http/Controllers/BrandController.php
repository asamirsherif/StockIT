<?php

namespace App\Http\Controllers;

use App\Http\Requests\Brand\BrandRequest;
use App\Http\Requests\Brand\UpdateBrandRequest;
use App\Http\Resources\Brand\BrandResource;
use App\Models\Brand;
use App\Repositories\Brand\BrandRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;


class BrandController extends Controller
{

    use ResponseTrait;

    private BrandRepositoryInterface $brandRepo;

    public function __construct(BrandRepositoryInterface $brandRepo)
    {
        $this->brandRepo = $brandRepo;
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
            $brands = $this->brandRepo->multiSearch($request)
                ->paginate($request->perPage);
            $brands->appends(['search' => $request->search]);
        } else
            $brands = Brand::paginate($request->perPage);

        $brands->appends(['perPage' => $request->perPage]);
        return BrandResource::collection($brands);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BrandRequest $request)
    {
        $created = $this->brandRepo->create($request);
        if ($created)
            return $this->succWithData(new BrandResource($created));
        else
            return $this->errMsg("Brand not created!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $this->brandRepo->read($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBrandRequest $request, $id)
    {
        $updated = $this->brandRepo->update($request, $id);
        if ($updated)
            return $this->succWithData(new BrandResource($updated));
        else
            return $this->errMsg("Brand not updated!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $brand = Brand::find($id);
        if (!$brand)
            return $this->errMsg("This brand doesnt exist");
        $deleted = $this->brandRepo->delete($id);
        if ($deleted)
            return $this->succWithData(new BrandResource($brand), "Brand deleted");
        else
            return $this->errMsg("Brand not deleted!");
    }
}
