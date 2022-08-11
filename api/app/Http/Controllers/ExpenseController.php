<?php

namespace App\Http\Controllers;

use App\Http\Requests\Expense\ExpenseRequest;
use App\Http\Resources\Expense\ExpenseResource;
use App\Models\Expense;
use App\Repositories\Expense\ExpenseRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    use ResponseTrait;

    private ExpenseRepositoryInterface $expRepo;

    public function __construct(ExpenseRepositoryInterface $expRepo)
    {
        $this->expRepo = $expRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', Expense::class);

        if ($request->filled('search')) {
            $expenses = $this->expRepo->multiSearch($request)
                ->paginate($request->perPage);
            $expenses->appends('search', $request->search);
        } else
            $expenses = Expense::filter($request)->paginate($request->perPage);

        $expenses->appends([
            "ref" => $request->ref,
            "date" => $request->date,
            "warehouse_id" => $request->warehouse_id,
            "expense_category_id" => $request->expense_category_id,
            'perPage' => $request->perPage
        ]);

        return ExpenseResource::collection($expenses);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExpenseRequest $request)
    {   
        $this->authorizeForUser($request->user('api'), 'create', Expense::class);

        $created = $this->expRepo->create($request);
        if ($created)
            return $this->succWithData(new ExpenseResource($created), "Expense created");
        else
            return $this->errMsg("the expense not created!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id, Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'view', Expense::class);
        
        $expense = Expense::find($id);
        if ($expense)
            return $this->succWithData(new ExpenseResource($expense), "Expense found");
        else
            return $this->errMsg("this Expense does not exist!");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(ExpenseRequest $request, int $id)
    {    

        $this->authorizeForUser($request->user('api'), 'update', Expense::class);

        $expense = Expense::find($id);
        if (!$expense)
            return $this->errMsg("This Exepense doesnt exist!");
        $updated = $this->expRepo->update($request, $id);
        if ($updated)
            return $this->succWithData(new ExpenseResource($updated), "Expense updated");
        else
            return $this->errMsg("Expense updated");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id,Request $request)
    {   
        $this->authorizeForUser($request->user('api'), 'delete', Expense::class);

        $expense = Expense::find($id);
        if (!$expense)
            return $this->errMsg("This Exepense doesnt exist!");
        $deleted = $this->expRepo->delete($id);
        if ($deleted)
            return $this->succWithData(new ExpenseResource($expense), "Expense deleted");
        else
            return $this->errMsg("Expense not deleted");
    }
}
