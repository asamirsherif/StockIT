<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('code', 192);
            $table->string('Type_barcode', 192);
            $table->string('name', 192);
            $table->double('cost');
            $table->double('price');
            $table->integer('category_id')->index('category_id');
            $table->integer('brand_id')->nullable()->index('brand_id_products');
            $table->integer('unit_id')->nullable()->index('unit_id_products');
            $table->integer('unit_sale_id')->nullable()->index('unit_id_sales');
            $table->integer('unit_purchase_id')->nullable()->index('unit_purchase_products');
            $table->double('TaxNet')->nullable()->default(0);
            $table->string('tax_method', 192)->nullable()->default('1');
            $table->text('image')->nullable();
            $table->text('note')->nullable();
            $table->double('stock_alert')->nullable()->default(0);
            $table->boolean('is_variant')->default(false);
            $table->boolean('is_active')->nullable()->default(true);
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
        Schema::dropIfExists('products');
    }
}
