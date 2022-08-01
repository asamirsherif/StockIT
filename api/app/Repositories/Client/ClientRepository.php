<?php

namespace App\Repositories\Client;

use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ClientRepository implements ClientRepositoryInterface
{
    public function read(int $id): Model
    {
        return Client::find($id);
    }

    public function create(Request $request): Model
    {
        $client = new Client();
        DB::transaction(function () use ($request, $client) {

            $client->name    = $request->name;
            $client->code    = $request->code;
            $client->email   = $request->email;
            $client->country = $request->country;
            $client->city    = $request->city;
            $client->phone   = $request->phone;
            $client->adresse = $request->adresse;

            $client->save();
        }, 3);

        return $client;
    }

    public function update(Request $request, int $id): Model
    {
        $client = $this->read($id);
        DB::transaction(function () use ($request, $client) {

            $client->name = $request->name ? $request->name : $client->name;
            $client->code = $request->code ? $request->code : $client->code;
            $client->email = $request->email ? $request->email : $client->email;
            $client->country = $request->country ? $request->country : $client->country;
            $client->city = $request->city ? $request->city : $client->city;
            $client->phone = $request->phone ? $request->phone : $client->phone;
            $client->adresse = $request->adresse ? $request->adresse : $client->adresse;

            $client->save();
    }, 3);

    return $client;
    }

    public function delete(int $id): bool
    {
        $client = $this->read($id);
        if ($client) {
            $client->delete();
            return true;
        } else
            return false;
    }

    public function multiSearch(Request $request): Builder
    {
        $clients = Client::where(function ($q) use ($request) {
            return $q->where('name', 'LIKE', "%" . $request->search . "%")
                ->orWhere('code', 'LIKE', "%" . $request->search . "%");
        });

        return $clients;
    }
}