<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToQuotationDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('quotation_details', function (Blueprint $table) {
            $table->foreign(['sale_unit_id'], 'sale_unit_id_quotation')->references(['id'])->on('units');
            $table->foreign(['product_id'], 'product_id_quotation_details')->references(['id'])->on('products');
            $table->foreign(['product_variant_id'], 'quote_product_variant_id')->references(['id'])->on('product_variants');
            $table->foreign(['quotation_id'], 'quotation_id')->references(['id'])->on('quotations');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('quotation_details', function (Blueprint $table) {
            $table->dropForeign('sale_unit_id_quotation');
            $table->dropForeign('product_id_quotation_details');
            $table->dropForeign('quote_product_variant_id');
            $table->dropForeign('quotation_id');
        });
    }
}
