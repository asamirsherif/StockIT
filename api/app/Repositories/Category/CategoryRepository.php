<?php

namespace App\Repositories\Category;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CategoryRepository implements CategoryRepositoryInterface
{
    public function read(int $id): Model
    {
        return Category::find($id);
    }

    public function create(Request $request): Model
    {
        $category = new Category();
        DB::transaction(function () use ($request, $category) {
            $category->code = $request->code;
            $category->name = $request->name;
            $category->save();
        }, 3);

        return $category;
    }

    public function update(Request $request, int $id): Model
    {
        $category = $this->read($id);
        DB::transaction(function () use ($request, $category) {
            $category->code = $request->code ? $request->code : $category->code;
            $category->name = $request->name ? $request->name : $category->name;
            $category->save();
    }, 3);

    return $category;
    }

    public function delete(int $id): bool
    {
        $category = $this->read($id);
        if ($category) {
            $category->delete();
            return true;
        } else
            return false;
    }

    public function multiSearch(Request $request): Builder
    {
        $categories = Category::where(function ($q) use ($request) {
            return $q->where('name', 'LIKE', "%" . $request->search . "%")
                ->orWhere('code', 'LIKE', "%" . $request->search . "%");
        });

        return $categories;
    }
}