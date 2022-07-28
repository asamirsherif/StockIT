<?php

namespace App\Repositories\ExpenseCategory;

use App\Models\ExpenseCategory;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ExpenseCategoryRepository implements ExpenseCategoryRepositoryInterface
{



    public function read(int $id): Model
    {
        return ExpenseCategory::find($id);
    }

    public function create(Request $request): Model
    {
        $expenseCategory = new ExpenseCategory();
        DB::transaction(function () use ($request, $expenseCategory) {
            $expenseCategory->name = $request->name;
            $expenseCategory->description = $request->description;
            $expenseCategory->user_id = $request->user_id;
            $expenseCategory->save();
        }, 10);

        return $expenseCategory;
    }

    public function update(Request $request, int $id): Model
    {
        $expenseCategory = $this->read($id);
        DB::transaction(function () use ($request, $expenseCategory) {
            $expenseCategory->name = $request->name ? $request->name : $expenseCategory->name;
            $expenseCategory->description = $request->description ? $request->description : $expenseCategory->description;
            $expenseCategory->save();
        }, 10);

        return $expenseCategory;
    }

    public function delete(int $id): bool
    {
        return $this->read($id)->delete();
    }

    public function multiSearch(Request $request): Builder
    {
        $expenseCategories = ExpenseCategory::where(function ($q) use ($request) {
            return $q->where('name', 'LIKE', "%" . $request->search . "%")
                ->orWhere('description', 'LIKE', "%" . $request->search . "%");
        });

        return $expenseCategories;
    }
}
