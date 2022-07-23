<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToAdjustmentDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('adjustment_details', function (Blueprint $table) {
            $table->foreign(['adjustment_id'], 'adjust_adjustment_id')->references(['id'])->on('adjustments');
            $table->foreign(['product_variant_id'], 'adjust_product_variant')->references(['id'])->on('product_variants');
            $table->foreign(['product_id'], 'adjust_product_id')->references(['id'])->on('products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('adjustment_details', function (Blueprint $table) {
            $table->dropForeign('adjust_adjustment_id');
            $table->dropForeign('adjust_product_variant');
            $table->dropForeign('adjust_product_id');
        });
    }
}
