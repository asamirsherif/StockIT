<?php

namespace App\Traits;

use Illuminate\Http\Request;

/**
 * Trait for Upload images
 */
trait ImageTrait
{
    private $noImage = "no-image.png";

    public function setNoImage($name)
    {
        $this->noImage =  $name;
    }


    public function uploadImage(Request $request, $path, $key = "image")
    {
        $imageFileName = "";
        if ($request->hasFile($key)) {
            $image = $request->image;
            $imageFileName = time() . "." . $image->getClientOriginalExtension();
            $image->move(public_path($path), $imageFileName);
        } else {
            $imageFileName = $this->noImage;
        }

        return $imageFileName;
    }




    public function updateImage(Request $request, $old_image, $path, $key = "image")
    {

        $imageFileName = "";
        if (!$request->hasFile($key)) {
            $imageFileName = $old_image;
        } elseif ($old_image == $this->noImage) {
            $imageFileName = $this->uploadImage($request, $path, $key);
        } else {
            $deleted = $this->deleteImage($old_image, $path);
            if ($deleted)
                $imageFileName = $this->uploadImage($request, $path, $key);
        }
        return $imageFileName;
    }


    public function deleteImage($image, $path)
    {
        if ($image != $this->noImage) {
            $unlinked = unlink(public_path($path) . $image);
            if (!$unlinked) return false;
        }

        return true;
    }
}
