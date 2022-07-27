<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSaleReturnDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sale_return_details', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('sale_return_id')->index('return_id');
            $table->integer('product_id')->index('product_id_details_returns');
            $table->double('price');
            $table->integer('sale_unit_id')->nullable()->index('sale_unit_id_return_details');
            $table->double('TaxNet')->nullable()->default(0);
            $table->string('tax_method', 192)->nullable()->default('1');
            $table->double('discount')->nullable()->default(0);
            $table->string('discount_method', 192)->nullable()->default('1');
            $table->integer('product_variant_id')->nullable()->index('sale_return_id_product_variant_id');
            $table->double('quantity');
            $table->double('total');
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
        Schema::dropIfExists('sale_return_details');
    }
}
