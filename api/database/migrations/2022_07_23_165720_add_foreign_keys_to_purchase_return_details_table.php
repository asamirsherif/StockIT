<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPurchaseReturnDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('purchase_return_details', function (Blueprint $table) {
            $table->foreign(['purchase_unit_id'], 'unit_id_purchase_return_details')->references(['id'])->on('units');
            $table->foreign(['product_id'], 'product_id_details_purchase_return')->references(['id'])->on('products');
            $table->foreign(['product_variant_id'], 'purchase_return_product_variant_id')->references(['id'])->on('product_variants');
            $table->foreign(['purchase_return_id'], 'purchase_return_id_return')->references(['id'])->on('purchase_returns');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('purchase_return_details', function (Blueprint $table) {
            $table->dropForeign('unit_id_purchase_return_details');
            $table->dropForeign('product_id_details_purchase_return');
            $table->dropForeign('purchase_return_product_variant_id');
            $table->dropForeign('purchase_return_id_return');
        });
    }
}
