<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ClientRequest extends FormRequest
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
            'name'      => ['required', 'string', 'min:4'],
            'email'     => ['required', 'email:filter', Rule::unique('clients')->whereNull('deleted_at')],
            'country'   => ['required'],
            'city'      => ['required'],
            'phone'     => ['required', Rule::unique('clients')->whereNull('deleted_at'), 'regex:/^01[0125][0-9]{8}$/'],
            'address'   => ['required']
        ];
    }

    // messages function to customize error messages
    public function messages()
    {
        return [
            'phone.regex' => 'phone must begin with 010, 011, 012, 015 and be 11 char',
        ];
    }
}
