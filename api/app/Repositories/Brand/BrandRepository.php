<?php

namespace App\Repositories\Brand;

use Illuminate\Http\Request;
use App\Models\Brand;
use App\Traits\ImageTrait;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class BrandRepository implements BrandRepositoryInterface
{
    use ImageTrait;



    public function read(int $id): Model
    {
        return Brand::find($id);
    }

    public function create(Request $request): Model
    {
        $brand = new Brand();
        DB::transaction(function () use ($request, $brand) {
            $brand->name = $request->name;
            $brand->description = $request->description;
            $brand->image = $this->uploadImage($request, "/images/brands/");
            $brand->save();
        }, 3);


        return $brand;
    }

    public function update(Request $request, int $id): Model
    {
        $brand = $this->read($id);
        DB::transaction(function () use ($request, $brand) {
            $brand->name = $request->name ? $request->name : $brand->name;
            $brand->description = $request->description ? $request->description : $brand->description;
            $brand->image = $this->updateImage($request, $brand->image, "/images/brands/");
            $brand->save();
        }, 3);

        return $brand;
    }

    public function delete(int $id): bool
    {
        $brand = $this->read($id);
        $deleteImage = $this->deleteImage($brand->image, "/images/brands/");
        if ($deleteImage) {
            $brand->delete();
            return true;
        } else
            return false;
    }

    public function multiSearch(Request $request): Builder
    {
        $brands = Brand::where(function ($q) use ($request) {
            return $q->where('name', 'LIKE', "%" . $request->search . "%")
                ->orWhere('description', 'LIKE', "%" . $request->search . "%");
        });

        return $brands;
    }
}
