<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProductRequest extends FormRequest
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
            'code' => ['required', Rule::unique('products')->ignore($this->route('product'))->withoutTrashed()],
            'name' => 'required',
            'type_barcode' => 'required',
            'price' => 'required|numeric',
            'category_id' => 'required',
            'cost' => 'required|numeric',
            'tax_method' => 'required|in:Exclusive,Inclusive',
            'unit_id' => 'required',
            'unit_sale_id' => 'required',
            // 'unit_purchase_id', 'required'
        ];
    }


    public function messages()
    {
        return [
            'code.unique' => 'This code already used. Generate Now',
            'tax_method.in' => 'Tax method should be 1 or 0'
        ];
    }
}
