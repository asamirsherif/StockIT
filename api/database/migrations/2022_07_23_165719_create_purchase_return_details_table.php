<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseReturnDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_return_details', function (Blueprint $table) {
            $table->integer('id', true);
            $table->decimal('cost', 16, 3);
            $table->integer('purchase_unit_id')->nullable()->index('unit_id_purchase_return_details');
            $table->double('TaxNet')->nullable()->default(0);
            $table->string('tax_method', 192)->nullable()->default('1');
            $table->double('discount')->nullable()->default(0);
            $table->string('discount_method', 192)->nullable()->default('1');
            $table->double('total');
            $table->double('quantity');
            $table->integer('purchase_return_id')->index('purchase_return_id_return');
            $table->integer('product_id')->index('product_id_details_purchase_return');
            $table->integer('product_variant_id')->nullable()->index('purchase_return_product_variant_id');
            $table->timestamps(6);
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchase_return_details');
    }
}
