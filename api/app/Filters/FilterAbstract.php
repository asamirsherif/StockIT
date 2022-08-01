<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

abstract class FilterAbstract
{
    protected $request;
    protected $filters = [];


    //passing request
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    //impliment filter
    public function filter(Builder $builder)
    {
        //loop for each filter
        foreach($this->getFilters() as $filter => $value)
        {
            //resolveFilter (create instance of filter class)
            $this->resolveFilter($filter)->filter($builder, $value);
        }
        return $builder;
    }

    //filter request for only filter keys
    public function getFilters()
    {
        // return array_filter($this->request->only(array_keys($this->filters)));
        return $this->request->only(array_keys($this->filters));
    }

    //create instance for each key (depends on Filters array classes)
    public function resolveFilter($filter)
    {
        return new $this->filters[$filter];
    }
}
