<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('purchases', function (Blueprint $table) {
            $table->foreign(['provider_id'], 'provider_id')->references(['id'])->on('providers');
            $table->foreign(['warehouse_id'], 'warehouse_id_purchase')->references(['id'])->on('warehouses');
            $table->foreign(['user_id'], 'user_id_purchases')->references(['id'])->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('purchases', function (Blueprint $table) {
            $table->dropForeign('provider_id');
            $table->dropForeign('warehouse_id_purchase');
            $table->dropForeign('user_id_purchases');
        });
    }
}
