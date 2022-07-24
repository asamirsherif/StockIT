<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToSaleReturnDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sale_return_details', function (Blueprint $table) {
            $table->foreign(['sale_unit_id'], 'sale_unit_id_return_details')->references(['id'])->on('units');
            $table->foreign(['product_id'], 'product_id_details_returns')->references(['id'])->on('products');
            $table->foreign(['product_variant_id'], 'sale_return_id_product_variant_id')->references(['id'])->on('product_variants');
            $table->foreign(['sale_return_id'], 'sale_return_id')->references(['id'])->on('sale_returns');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sale_return_details', function (Blueprint $table) {
            $table->dropForeign('sale_unit_id_return_details');
            $table->dropForeign('product_id_details_returns');
            $table->dropForeign('sale_return_id_product_variant_id');
            $table->dropForeign('sale_return_id');
        });
    }
}
