<?php

namespace App\Repositories\Expense;

use App\Models\Expense;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ExpenseRepository implements ExpenseRepositoryInterface
{



    public function read(int $id): Model
    {
        return Expense::find($id);
    }

    public function create(Request $request): Model
    {
        $expense = new Expense();
        DB::transaction(function () use ($request, $expense) {
            $expense->date = $request->date;
            $expense->Ref = $request->ref;
            $expense->warehouse_id = $request->warehouse_id;
            $expense->expense_category_id = $request->expense_category_id;
            $expense->details = $request->details;
            $expense->amount = $request->amount;

            $expense->user_id = 1;
            $expense->save();
        }, 10);

        return $expense;
    }

    public function update(Request $request, int $id): Model
    {
        $expense = $this->read($id);
        DB::transaction(function () use ($request, $expense) {
            $expense->date = $request->date ? $request->date : $expense->date;
            $expense->Ref = $request->ref ? $request->ref : $expense->Ref;
            $expense->warehouse_id = $request->warehouse_id ? $request->warehouse_id : $expense->warehouse_id;
            $expense->expense_category_id = $request->expense_category_id ? $request->expense_category_id : $expense->expense_category_id;
            $expense->details = $request->details ? $request->details : $expense->details;
            $expense->amount = $request->amount ? $request->amount : $expense->amount;

            $expense->save();
        }, 10);

        return $expense;
    }

    public function delete(int $id): bool
    {
        return $this->read($id)->delete();
    }

    public function multiSearch(Request $request): Builder
    {
        $expenses = Expense::where(function ($q) use ($request) {
            return $q->where('Ref', 'LIKE', "%" . $request->search . "%")
                ->orWhere('date', 'LIKE', "%" . $request->search . "%")
                ->orWhere('details', 'LIKE', "%" . $request->search . "%");
        });

        return $expenses;
    }
}
