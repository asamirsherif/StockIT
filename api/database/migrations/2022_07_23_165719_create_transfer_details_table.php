<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransferDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transfer_details', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('transfer_id')->index('transfer_id');
            $table->integer('product_id')->index('product_id_transfers');
            $table->integer('product_variant_id')->nullable()->index('product_variant_id_transfer');
            $table->double('cost');
            $table->integer('purchase_unit_id')->nullable()->index('unit_sale_id_transfer');
            $table->double('TaxNet')->nullable();
            $table->string('tax_method', 192)->nullable()->default('1');
            $table->double('discount')->nullable();
            $table->string('discount_method', 192)->nullable()->default('1');
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
        Schema::dropIfExists('transfer_details');
    }
}
