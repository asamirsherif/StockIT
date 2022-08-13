<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;

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
            'email'     => ['required', 'email:filter', 'unique:clients,email'],
            'country'   => ['required'],
            'city'      => ['required'],
            'phone'     => ['required', 'unique:clients,phone', 'regex:/^01[0125][0-9]{8}$/'],
            'adresse'   => ['required']
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
