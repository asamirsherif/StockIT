<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->foreign(['unit_sale_id'], 'unit_id_sales')->references(['id'])->on('units');
            $table->foreign(['brand_id'], 'brand_id_products')->references(['id'])->on('brands');
            $table->foreign(['unit_id'], 'unit_id_products')->references(['id'])->on('units');
            $table->foreign(['unit_purchase_id'], 'unit_purchase_products')->references(['id'])->on('units');
            $table->foreign(['category_id'], 'category_id')->references(['id'])->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropForeign('unit_id_sales');
            $table->dropForeign('brand_id_products');
            $table->dropForeign('unit_id_products');
            $table->dropForeign('unit_purchase_products');
            $table->dropForeign('category_id');
        });
    }
}
