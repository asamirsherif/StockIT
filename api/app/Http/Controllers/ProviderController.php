<?php

namespace App\Http\Controllers;

use App\Http\Requests\Provider\ProviderRequest;
use App\Http\Resources\Provider\ProviderResource;
use App\Models\Provider;
use App\Repositories\Provider\ProviderRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class ProviderController extends Controller
{

    use ResponseTrait;

    private ProviderRepositoryInterface $provideRepo;

    public function __construct(ProviderRepositoryInterface $provideRepo)
    {
        $this->provideRepo = $provideRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->filled('search')) {
            $providers = $this->provideRepo->multiSearch($request)
                ->paginate($request->perPage);
            $providers->appends(['search' => $request->search]);
        } else
            $providers = Provider::filter($request)->paginate($request->perPage);

        $providers->appends([
            "code" => $request->code,
            "name" => $request->name,
            "phone" => $request->phone,
            "email" => $request->email,
            "perPage" => $request->perPage
        ]);

        return ProviderResource::collection($providers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProviderRequest $request)
    {
        $created = $this->provideRepo->create($request);
        if ($created)
            return $this->succWithData(new ProviderResource($created), "a new Provider/supplaier has been added");
        else
            return $this->errMsg("rovider/Supplier not created!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $provider = Provider::find($id);
        if ($provider)
            return $this->succWithData(new ProviderResource($provider), 'Provider data');
        else
            return $this->errMsg("this provider/supplier not exist!");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $provider = Provider::find($id);
        if (!$provider)
            return $this->errMsg("this provider/supplier not exist!");

        $updated = $this->provideRepo->update($request, $id);
        if ($updated)
            return $this->succWithData(new ProviderResource($updated), 'Provider/supplier updated');
        else
            return $this->errMsg("Provider/Supplier does not updated!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $provider = Provider::find($id);
        if (!$provider)
            return $this->errMsg("this provider/supplier not exist!");
        $deleted = $this->provideRepo->delete($id);
        if ($deleted)
            return $this->succWithData(new ProviderResource($provider), "Provider/supplier deleted!");
        else
            return $this->errMsg("Provider/Supplier dose not deleted!");
    }
}
