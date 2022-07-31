<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Unit extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name', 'ShortName', 'base_unit', 'operator', 'operator_value'
    ];

    // edit
    public function baseunit() {
        return $this->belongsTo(Unit::class, 'base_unit', 'id');
    }

    public function units() {
        return $this->hasMany(Unit::class, 'base_unit', 'id');
    }
}
