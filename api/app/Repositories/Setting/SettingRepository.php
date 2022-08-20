<?php

namespace App\Repositories\Setting;

use App\Models\Setting;
use App\Traits\ImageTrait;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class SettingRepository implements SettingRepositoryInterface
{
    use ImageTrait;

    public function read(int $id): Model
    {
        return Setting::find($id);
    }

    public function create(Request $request): Model
    {
        $setting = new Setting();
        DB::transaction(function () use ($request, $setting) {
            $setting->email = $request->email;
            $setting->CompanyName = $request->CompanyName;
            $setting->CompanyPhone = $request->CompanyPhone;
            $setting->CompanyAddress = $request->CompanyAddress;
            $setting->logo = $this->uploadImage($request, "/images/settings/");
            $setting->footer = $request->footer;
            $setting->developed_by = $request->developed_by;
            $setting->default_language = $request->default_language;
            $setting->currency_id = $request->currency_id;
            $setting->client_id = $request->client_id;
            $setting->warehouse_id = $request->warehouse_id;

            $setting->save();
        }, 3);
        return $setting;
    }

    public function update(Request $request, int $id): Model
    {
        $setting = $this->read($id);
        DB::transaction(function () use ($request, $setting) {
            $setting->email = $request->email ? $request->email : $setting->email;
            $setting->CompanyName = $request->CompanyName ? $request->CompanyName : $setting->CompanyName;
            $setting->CompanyPhone = $request->CompanyPhone ? $request->CompanyPhone : $setting->CompanyPhone;
            $setting->CompanyAddress = $request->CompanyAddress ? $request->CompanyAddress : $setting->CompanyAddress;
            $setting->logo = $this->updateImage($request, $setting->logo, "/images/settings/");
            $setting->footer = $request->footer ? $request->footer : $setting->footer;
            $setting->developed_by = $request->developed_by ? $request->developed_by : $setting->developed_by;
            $setting->default_language = $request->default_language ? $request->default_language : $setting->default_language;
            $setting->currency_id = $request->currency_id ? $request->currency_id : $setting->currency_id;
            $setting->client_id = $request->client_id ? $request->client_id : $setting->client_id;
            $setting->warehouse_id = $request->warehouse_id ? $request->warehouse_id : $setting->warehouse_id;
            $setting->save();
        }, 3);
        return $setting;

    }

    public function delete(int $id): bool
    {
        $setting = $this->read($id);
        $deleteImage = $this->deleteImage($setting->logo, "/images/settings/");
        if($deleteImage) {
            $setting->delete();
            return true;
        }
        else {
            return false;
        }
    }
}