<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPaymentPurchaseReturnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payment_purchase_returns', function (Blueprint $table) {
            $table->foreign(['purchase_return_id'], 'supplier_id_payment_return_purchase')->references(['id'])->on('purchase_returns');
            $table->foreign(['user_id'], 'user_id_payment_return_purchase')->references(['id'])->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('payment_purchase_returns', function (Blueprint $table) {
            $table->dropForeign('supplier_id_payment_return_purchase');
            $table->dropForeign('user_id_payment_return_purchase');
        });
    }
}
