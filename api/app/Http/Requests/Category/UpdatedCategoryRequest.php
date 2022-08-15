<?php

namespace App\Http\Requests\Category;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatedCategoryRequest extends FormRequest
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
            'code' => ['sometimes','required', Rule::unique('categories')->ignore($this->route('category'))->whereNull('deleted_at')],
            'name' => ['sometimes','required', Rule::unique('categories')->ignore($this->route('category'))->whereNull('deleted_at')],
        ];
    }
}
