<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Adjustment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id', 'date', 'Ref', 'warehouse_id', 'items', 'notes'
    ];


    // user_id relation
    public function user() {
        return $this->belongsTo(User::class);
    }

    // warehouse_id relation
    // public function warehouse()
    // {
    //     return $this->belongsTo(Warehouse::class);
    // }
}
