<?php

namespace App\Http\Controllers;

use App\Http\Resources\Category\CategoryResource;
use App\Http\Resources\Category\CategoryCollection;
use App\Http\Requests\Category\CategoryRequest;
use App\Models\Category;
use App\Repositories\Category\CategoryRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    use ResponseTrait;

    private CategoryRepositoryInterface $categoryRepo;

    public function __construct(CategoryRepositoryInterface $categoryRepo)
    {   
        
        $this->categoryRepo = $categoryRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Category::class);

        // 2 params => perPage & search
        if ($request->filled('search')) {
            $categories = $this->categoryRepo->multiSearch($request)
            ->paginate($request->perPage);
            $categories->appends(['search' => $request->search, 'perPage' => $request->perPage]);
        } else
            $categories = Category::paginate($request->perPage)->appends(['perPage' => $request->perPage]);

        return new CategoryCollection($categories);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Category::class);

        $created = $this->categoryRepo->create($request);

        if ($created)
            return $this->succWithData(new CategoryResource($created));
        else
            return $this->errMsg("category not created!");

        // ******************** //
        // $categoryCreated = Category::create($request->all());

        // // dd($categoryCreated);

        // if($categoryCreated)
        //     return new CategoryResource($categoryCreated);
        // else
        //     return "error in creating category";
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Category::class);

        $category = Category::find($id);
        if(!$category)
            return $this->errMsg('This category doesn\'t exist');
        else
            return $this->categoryRepo->read($id);

        // $category = Category::find($id);
        // return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, $id)
    {

        $this->authorizeForUser($request->user('api'), 'view', Category::class);

        $updated = $this->categoryRepo->update($request, $id);
        if ($updated)
            return $this->succWithData(new CategoryResource($updated));
        else
            return $this->errMsg("category not updated!");


        // update db
        // $category = Category::find($id);
        // $category->update($request->all());
        // // return json
        // return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   
        $this->authorizeForUser($request->user('api'), 'view', Category::class);
        
        $category = Category::find($id);
        if(!$category)
            return $this->errMsg('This category doesn\'t exist');

        $categoryDeleted = $this->categoryRepo->delete($id);
        if($categoryDeleted)
            return $this->succWithData(new CategoryResource($category), "category deleted successfully");
        else
            return $this->errMsg("category not deleted");

    }
}
