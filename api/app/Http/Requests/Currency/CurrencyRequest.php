<?php

namespace App\Http\Requests\Currency;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CurrencyRequest extends FormRequest
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
            'name' => ['required', Rule::unique('currencies')->whereNull('deleted_at'), 'min:2', 'max:192'],
        ];
    }
}
