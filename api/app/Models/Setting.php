<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Setting extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'currency_id', 'email', 'CompanyName', 'CompanyPhone', 'CompanyAdress',
        'logo','footer','developed_by','client_id','warehouse_id','default_language',
    ];

    public function currency() {
        return $this->belongsTo(Currency::class);
    }

    public function warehouse() {
        return $this->belongsTo(Warehouse::class);
    }

    public function client() {
        return $this->belongsTo(Client::class);
    }
}
