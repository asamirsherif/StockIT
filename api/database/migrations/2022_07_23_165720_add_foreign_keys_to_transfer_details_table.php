<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToTransferDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('transfer_details', function (Blueprint $table) {
            $table->foreign(['purchase_unit_id'], 'unit_sale_id_transfer')->references(['id'])->on('units');
            $table->foreign(['product_id'], 'product_id_transfers')->references(['id'])->on('products');
            $table->foreign(['transfer_id'], 'transfer_id')->references(['id'])->on('transfers');
            $table->foreign(['product_variant_id'], 'product_variant_id_transfer')->references(['id'])->on('product_variants');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('transfer_details', function (Blueprint $table) {
            $table->dropForeign('unit_sale_id_transfer');
            $table->dropForeign('product_id_transfers');
            $table->dropForeign('transfer_id');
            $table->dropForeign('product_variant_id_transfer');
        });
    }
}
