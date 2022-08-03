<?php

namespace App\Traits;

use Illuminate\Http\Request;

/**
 * Trait for Upload images
 */
trait ImageTrait
{
    private $noImage =  "no-image.png";

    public function setNoImage($name)
    {
        $this->noImage =  $name;
    }


    public function uploadImage(Request $request, $path, $key = "image")
    {
        $imageFileName = "";
        if ($request->hasFile($key)) {
            $image = $request->input($key);
            $imageFileName = time() . "." . $image->getClientOriginalExtension();
            $image->move(public_path($path), $imageFileName);
        } else {
            $imageFileName = $this->noImage;
        }

        return public_path($path) . "/" . $imageFileName;
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


    public function deleteImage($image, $path = null)
    {
        $this->setNoImage(public_path($path) . $this->noImage);

        if ($image != $this->noImage) {
            if (file_exists($image))
                @unlink($image);
        }

        return true;
    }



    public function uploadMultiImage(Request $request, $path, $key = "images")
    {
        $imgs = [];
        // dd($request->file($key));
        if ($request->hasFile($key)) {
            foreach ($request->file($key) as $key => $img) {
                $imgName = time() . $key . "." . $img->getClientOriginalExtension();
                $img->move(public_path($path), $imgName);
                $imgs[] = public_path($path)  . $imgName;
            }
            $imagesFileName = implode(',', $imgs);
        } else {
            $imagesFileName = $this->noImage;
        }

        return $imagesFileName;
    }



    public function deleteMultiImage($imgs, $path = null)
    {
        $imgs = explode(',', $imgs);
        foreach ($imgs as $img) {
            $this->deleteImage($img, $path);
        }

        return true;
    }
}
