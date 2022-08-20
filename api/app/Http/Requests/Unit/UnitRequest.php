<?php

namespace App\Http\Requests\Unit;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'name' => ['required', Rule::unique('units')->whereNull('deleted_at'), 'string', 'min:3'],
            'ShortName' => ['required', Rule::unique('units')->whereNull('deleted_at'), 'string'],
            // 'base_unit' => ['integer'],
            // 'operator' => ['required'],
            // 'operator_value' => ['required', 'numeric'],
        ];
    }
}
