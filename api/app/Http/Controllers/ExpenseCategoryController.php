<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExpenseCategory\ExpenseCategoryRequest;
use App\Http\Resources\ExpenseCategory\ExpenseCategoryResource;
use App\Models\ExpenseCategory;
use App\Repositories\ExpenseCategory\ExpenseCategoryRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class ExpenseCategoryController extends Controller
{

    use ResponseTrait;

    private ExpenseCategoryRepositoryInterface $expCatRepo;

    public function __construct(ExpenseCategoryRepositoryInterface $expCatRepo)
    {
        $this->expCatRepo = $expCatRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->filled('search')) {
            $expenseCategory = $this->expCatRepo->multiSearch($request)
                ->paginate($request->perPage);
            $expenseCategory->appends(['search' => $request->search]);
        } else
            $expenseCategory = ExpenseCategory::paginate($request->perPage);

        $expenseCategory->appends(['perPage' => $request->perPage]);
        return ExpenseCategoryResource::collection($expenseCategory);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExpenseCategoryRequest $request)
    {
        $created = $this->expCatRepo->create($request);
        if ($created)
            return $this->succWithData(new ExpenseCategoryResource($created), 'Expense category created');
        else {
            return $this->errMsg("Expense category not created");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $expenseCategory = $this->expCatRepo->read($id);
        if ($expenseCategory)
            return $this->succWithData(new ExpenseCategoryResource($expenseCategory));
        else
            return $this->errMsg("this Expesnse Category dose not exist");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        if (!$this->expCatRepo->read($id))
            return $this->errMsg("this Expense category does not exist!");
        $updated = $this->expCatRepo->update($request, $id);
        if ($updated)
            return $this->succWithData(new ExpenseCategoryResource($updated), "Expense category updated");
        else
            return $this->errMsg("Expense category not updated");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $expenseCategory = ExpenseCategory::find($id);
        if (!$expenseCategory)
            return $this->errMsg("the Expense category not exist");
        $deleted = $this->expCatRepo->delete($id);
        if ($deleted)
            return $this->succWithData(new ExpenseCategoryResource($expenseCategory), "Expense category deleted");
        else
            return $this->errMsg("Expense category not deleted!");
    }
}
