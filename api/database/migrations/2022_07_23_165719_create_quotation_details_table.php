<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuotationDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotation_details', function (Blueprint $table) {
            $table->integer('id', true);
            $table->double('price');
            $table->integer('sale_unit_id')->nullable()->index('sale_unit_id_quotation');
            $table->double('TaxNet')->nullable()->default(0);
            $table->string('tax_method', 192)->nullable()->default('1');
            $table->double('discount')->nullable()->default(0);
            $table->string('discount_method', 192)->nullable()->default('1');
            $table->double('total');
            $table->double('quantity');
            $table->integer('product_id')->index('product_id_quotation_details');
            $table->integer('product_variant_id')->nullable()->index('quote_product_variant_id');
            $table->integer('quotation_id')->index('quotation_id');
            $table->timestamps(6);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quotation_details');
    }
}
