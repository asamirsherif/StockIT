<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatedClientRequest extends FormRequest
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
            'email' => ['sometimes','required', 'email:filter',
                Rule::unique('clients')->ignore($this->route('client'))->whereNull('deleted_at')],
                
            'phone' => ['sometimes','required',
            Rule::unique('clients')->ignore($this->route('client'))->whereNull('deleted_at'),
            'regex:/^01[0125][0-9]{8}$/'],
        ];
    }
}
