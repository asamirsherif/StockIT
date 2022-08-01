<?php

namespace App\Repositories\Provider;

use App\Models\Provider;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ProviderRepository implements ProviderRepositoryInterface
{

    public function read(int $id): Model
    {
        return Provider::find($id);
    }

    public function create(Request $request): Model
    {
        $provider = new Provider();
        DB::transaction(function () use ($request, $provider) {
            $provider->name = $request->name;
            $provider->code = $this->makeCode();
            $provider->phone = $request->phone;
            $provider->email = $request->email;
            $provider->country = $request->country;
            $provider->city = $request->city;
            $provider->address = $request->address;

            $provider->save();
        }, 3);

        return $provider;
    }

    public function update(Request $request, int $id): Model
    {
        $provider = $this->read($id);
        DB::transaction(function () use ($request, $provider) {
            $provider->name = $request->name ? $request->name : $provider->name;
            $provider->phone = $request->phone ? $request->phone : $provider->phone;
            $provider->email = $request->email ? $request->email : $provider->email;
            $provider->country = $request->country ? $request->country : $provider->country;
            $provider->city = $request->city ?  $request->city : $provider->city;
            $provider->address = $request->address ? $request->address : $provider->address;

            $provider->save();
        }, 3);

        return $provider;
    }

    public function delete(int $id): bool
    {
        return $this->read($id)->delete();
    }

    public function makeCode(): string
    {
        $lastCode = Provider::latest()->first();
        if ($lastCode)
            return $lastCode->code + 1;
        else
            return 1;
    }

    public function multiSearch(Request $request): Builder
    {
        $providers = Provider::filter($request)->where(function ($q) use ($request) {
            return $q->where('name', 'LIKE', "%" . $request->search . "%")
                ->orWhere('code', 'LIKE', "%" . $request->search . "%")
                ->orWhere('phone', 'LIKE', "%" . $request->search . "%")
                ->orWhere('email', 'LIKE', "%" . $request->search . "%");
        });

        return $providers;
    }
}
