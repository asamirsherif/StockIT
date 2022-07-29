<?php

namespace App\Http\Requests\Warehouse;

use Illuminate\Foundation\Http\FormRequest;

class UpdateWarehouseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['sometimes', "max:192"],
            "city" => ["sometimes", 'max:192'],
            "mobile" => ["sometimes", "digits:11"],
            "zip" => ['sometimes', "max:192"],
            "email" => ['sometimes', "max:192"],
            "country" => ['sometimes', 'max:192']
        ];
    }
}
