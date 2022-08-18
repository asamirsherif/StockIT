<?php

namespace App\Http\Requests\Unit;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatedUnitRequest extends FormRequest
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
            'name'      => ['sometimes', 'required', Rule::unique('units')->ignore($this->route('unit'))->whereNull('deleted_at'), 'string', 'min:3'],
            'ShortName' => ['sometimes', 'required', Rule::unique('units')->ignore($this->route('unit'))->whereNull('deleted_at'), 'string'],
        ];
    }
}
