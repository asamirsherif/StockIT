<?php

namespace App\Models;

use App\Filters\Provider\ProviderFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;

class Provider extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name', 'code', 'adresse', 'phone', 'country', 'email', 'city',
    ];

    protected $casts = [
        'code' => 'integer',
    ];


    public function scopeFilter(Builder $builder, Request $request)
    {
        return (new ProviderFilter($request))->filter($builder);
    }
}
