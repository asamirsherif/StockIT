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
            $client->code    = $this->makeCode();
            $client->email   = $request->email;
            $client->country = $request->country;
            $client->city    = $request->city;
            $client->phone   = $request->phone;
            $client->address = $request->address;

            $client->save();
        }, 3);

        return $client;
    }

    public function update(Request $request, int $id): Model
    {
        $client = $this->read($id);
        DB::transaction(function () use ($request, $client) {

            $client->name = $request->name ? $request->name : $client->name;
            $client->email = $request->email ? $request->email : $client->email;
            $client->country = $request->country ? $request->country : $client->country;
            $client->city = $request->city ? $request->city : $client->city;
            $client->phone = $request->phone ? $request->phone : $client->phone;
            $client->address = $request->address ? $request->address : $client->address;

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

    public function makeCode(): string
    {
        $last = Client::latest()->first();

        if ($last) {
            $code = $last->code + 1;
        } else {
            $code = 1;
        }
        return $code;
    }
}