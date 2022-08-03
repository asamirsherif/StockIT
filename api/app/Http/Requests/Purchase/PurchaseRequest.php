<?php

namespace App\Http\Requests\Purchase;

use Illuminate\Foundation\Http\FormRequest;

class PurchaseRequest extends FormRequest
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
            'user_id' => ['required', 'integer'],
            'date' => ['date'],
            'provider_id' => ['required', 'integer'],
            'warehouse_id' => ['required', 'integer'],
            'status' => ['string'],
            // 'payment_status' => ['string'],
            'notes' => ['min:5'],

        ];
    }
}
