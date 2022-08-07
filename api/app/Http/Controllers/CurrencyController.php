<?php

namespace App\Http\Controllers;

use App\Http\Requests\Currency\CurrencyRequest;
use App\Http\Requests\Currency\UpdateCurrencyRequest;
use App\Http\Resources\Currency\CurrencyResource;
use App\Models\Currency;

use App\Repositories\Currency\CurrencyRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;
use App\Models\Permission;





class CurrencyController extends Controller
{


    use ResponseTrait;
    private CurrencyRepositoryInterface $currencyRepo;

    public function __construct(CurrencyRepositoryInterface $currencyRepo)
    {
        
        $this->currencyRepo = $currencyRepo;
        // $this->authorizeForUser($request->user('api'), 'view', Currency::class);

    }



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Currency::class);

        if ($request->filled('search')) {
            $currencies = $this->currencyRepo->multiSearch($request)
                ->paginate($request->perPage);
            $currencies->appends(['search' => $request->search, 'perPage' => $request->perPage]);
        } else
            $currencies = Currency::paginate($request->perPage);

        return CurrencyResource::collection($currencies);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CurrencyRequest $request)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Currency::class);

        $created = $this->currencyRepo->create($request);
        if ($created)
            return $this->succWithData(new CurrencyResource($created));
        else
            return $this->errMsg("Currency not created!");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Currency  $currency
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Currency::class);

        // $this->currencyRepo->read($id);
        
        $currency = Currency::find($id);
        if($currency)
            return $this->succWithData(new CurrencyResource($currency),'currency found');
        else
            return $this->errMsg('currency not exist!');
            
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Currency  $currency
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCurrencyRequest $request, $id)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Currency::class);

        $updated = $this->currencyRepo->update($request, $id);
        if ($updated)
            return $this->succWithData(new CurrencyResource($updated));
        else
            return $this->errMsg("Currency not updated!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Currency  $currency
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Currency::class);
        
        $currency = Currency::find($id);
        if (!$currency)
            return $this->errMsg("This Currency doesnt exist");
        $deleted = $this->brandRepo->delete($id);
        if ($deleted)
            return $this->succWithData(new CurrencyResource($currency), "Brand deleted");
        else
            return $this->errMsg("Currency not deleted!");
    }
}
