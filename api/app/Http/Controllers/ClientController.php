<?php

namespace App\Http\Controllers;

use App\Http\Requests\Client\ClientRequest;
use App\Http\Requests\Client\UpdatedClientRequest;
use App\Http\Resources\Client\ClientCollection;
use App\Http\Resources\Client\ClientResource;
use App\Models\Client;
use App\Repositories\Client\ClientRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class ClientController extends Controller
{

    use ResponseTrait;

    private ClientRepositoryInterface $clientRepo;

    public function __construct(ClientRepositoryInterface $clientRepo)
    {
        $this->clientRepo = $clientRepo;

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        //$this->authorizeForUser($request->user('api'), 'customers_view', Client::class);

        if ($request->filled('search')) {
            $clients = $this->clientRepo->multiSearch($request)
            ->paginate($request->perPage);
            $clients->appends(['search' => $request->search, 'perPage' => $request->perPage]);
        } else
            $clients = Client::paginate($request->perPage)->appends(['perPage' => $request->perPage]);

        return ClientResource::collection($clients);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ClientRequest $request)
    {

       // $this->authorizeForUser($request->user('api'), 'create', Client::class);

        $clientCreated = $this->clientRepo->create($request);

        if ($clientCreated)
            return $this->succWithData(new ClientResource($clientCreated), "client created successfully");
        else
            return $this->errMsg("customer not created!");

        //********************** */
        // $clientCreated = Client::create($request->all());

        // if($clientCreated)
        //     return new ClientResource($clientCreated);
        // else
        //     return "error in creating client";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $client = Client::find($id);

        if(!$client)
            return $this->errMsg('This customer doesn\'t exist');
        else

            return $this->succWithData(new ClientResource($client), "client details");

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatedClientRequest $request, $id)
    {
        //$this->authorizeForUser($request->user('api'), 'update', Client::class);

        $client = Client::find($id);
        if(!$client)
            return $this->errMsg("This client doesn\'t exist");

        $clientUpdated = $this->clientRepo->update($request, $id);

        if ($clientUpdated)
            return $this->succWithData(new ClientResource($clientUpdated), "client updated successfully");
        else
            return $this->errMsg("Customer not updated!");

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id,Request $request)
    {
        //$this->authorizeForUser($request->user('api'), 'delete', Client::class);

        $client = Client::find($id);
        if(!$client)
            return $this->errMsg('This customer doesn\'t exist');

        $clientDeleted = $this->clientRepo->delete($id);
        if($clientDeleted)
            return $this->succWithData(new ClientResource($client), "Customer Deleted successfully");
        else
            return $this->errMsg("Customer not deleted");

        //******************** */
        // $client = Client::find($id);
        // $client->delete();
        // return "$client->name client deleted successfully";
    }
}
