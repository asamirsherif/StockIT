<?php

namespace App\Http\Requests\Unit;

use Illuminate\Foundation\Http\FormRequest;

class UnitRequest extends FormRequest
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
            'name' => ['required','unique:units,name', 'string', 'min:3'],
            'ShortName' => ['required', 'unique:units,ShortName', 'string'],
            // 'base_unit' => ['integer'],
            // 'operator' => ['required'],
            // 'operator_value' => ['required', 'numeric'],
        ];
    }
}
