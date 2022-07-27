<?php

namespace App\Http\Controllers;

use App\Http\Requests\Client\ClientRequest;
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
        if ($request->filled('search')) {
            $clients = $this->clientRepo->multiSearch($request)
            ->paginate($request->perPage);
            $clients->appends(['search' => $request->search, 'perPage' => $request->perPage]);
        } else
            $clients = Client::paginate($request->perPage)->appends(['perPage' => $request->perPage]);

        return new ClientCollection($clients);

        // return new CategoryCollection(Category::all());
        // return new ClientCollection(Client::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ClientRequest $request)
    {

        $clientCreated = $this->clientRepo->create($request);

        if ($clientCreated)
            return $this->succWithData(new ClientResource($clientCreated));
        else
            return $this->errMsg("client not created!");

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
            return $this->errMsg('This client doesn\'t exist');
        else
            return $this->clientRepo->read($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ClientRequest $request, $id)
    {
        $clientUpdated = $this->clientRepo->update($request, $id);
        if ($clientUpdated)
        return $this->succWithData(new ClientResource($clientUpdated));
        else
        return $this->errMsg("client not updated!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $client = Client::find($id);
        if(!$client)
            return $this->errMsg('This client doesn\'t exist');

        $clientDeleted = $this->clientRepo->delete($id);
        if($clientDeleted)
            return $this->succWithData(new ClientResource($client), "client deleted successfully");
        else
            return $this->errMsg("client not deleted");

        //******************** */
        // $client = Client::find($id);
        // $client->delete();
        // return "$client->name client deleted successfully";
    }
}
