<?php

namespace App\Http\Requests\Adjustment;

use Illuminate\Foundation\Http\FormRequest;

class AdjustmentRequest extends FormRequest
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
            // 'user_id' => [],
            'date' => ['date'],
            'Ref' => ['string', 'min:3'],
            // 'warehouse_id' => [],
            'items' => ['numeric'],
            'notes' => ['string', 'min:5'],

        ];
    }
}
