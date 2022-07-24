<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sales', function (Blueprint $table) {
            $table->foreign(['client_id'], 'sale_client_id')->references(['id'])->on('clients');
            $table->foreign(['warehouse_id'], 'warehouse_id_sale')->references(['id'])->on('warehouses');
            $table->foreign(['user_id'], 'user_id_sales')->references(['id'])->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sales', function (Blueprint $table) {
            $table->dropForeign('sale_client_id');
            $table->dropForeign('warehouse_id_sale');
            $table->dropForeign('user_id_sales');
        });
    }
}
