<?php

namespace App\Repositories\Currency;

use Illuminate\Http\Request;
use App\Models\Currency;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CurrencyRepository implements CurrencyRepositoryInterface
{




    public function read(int $id): Model
    {
        return Currency::find($id);
    }

    public function create(Request $request): Model
    {
        $currency = new Currency();
        DB::transaction(function () use ($request, $currency) {
            $currency->code = $request->code;
            $currency->name = $request->name;
            $currency->symbol = $request->symbol;

            $currency->save();
        }, 3);


        return $currency;
    }

    public function update(Request $request, int $id): Model
    {
        $currency = $this->read($id);
        DB::transaction(function () use ($request, $currency) {
            $currency->code = $request->code ? $request->code : $currency->code;
            $currency->name = $request->name ? $request->name : $currency->name;
            $currency->sympol = $request->sympol ? $request->sympol : $currency->sympol;

            $currency->save();
        }, 3);

        return $currency;
    }

    public function delete(int $id): bool
    {
        $currency = $this->read($id);
        if ($currency) {
            $currency->delete();
            return true;
        } else
            return false;
    }

    public function multiSearch(Request $request): Builder
    {
        $currencies = Currency::where(function ($q) use ($request) {
            return $q->where('name', 'LIKE', "%" . $request->search . "%")
                ->orWhere('code', 'LIKE', "%" . $request->search . "%");
        });

        return $currencies;
    }
}
