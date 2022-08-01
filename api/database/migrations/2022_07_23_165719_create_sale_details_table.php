<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSaleDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sale_details', function (Blueprint $table) {
            $table->integer('id', true);
            $table->date('date');
            $table->integer('sale_id')->index('Details_Sale_id');
            $table->integer('product_id')->index('sale_product_id');
            $table->integer('product_variant_id')->nullable()->index('sale_product_variant_id');
            $table->double('price');
            $table->integer('sale_unit_id')->nullable()->index('sales_sale_unit_id');
            $table->double('TaxNet')->nullable();
            $table->string('tax_method', 192)->nullable()->default('1');
            $table->double('discount')->nullable();
            $table->string('discount_method', 192)->nullable()->default('1');
            $table->double('total');
            $table->double('quantity');
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
        Schema::dropIfExists('sale_details');
    }
}
