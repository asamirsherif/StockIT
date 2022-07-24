<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPaymentSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payment_sales', function (Blueprint $table) {
            $table->foreign(['sale_id'], 'facture_sale_id')->references(['id'])->on('sales');
            $table->foreign(['user_id'], 'user_id_factures_ventes')->references(['id'])->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('payment_sales', function (Blueprint $table) {
            $table->dropForeign('facture_sale_id');
            $table->dropForeign('user_id_factures_ventes');
        });
    }
}
