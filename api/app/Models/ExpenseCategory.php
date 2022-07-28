<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ExpenseCategory extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = "expense_categories";

    protected $fillable = [
        "user_id","name","description"
    ];

    
}
