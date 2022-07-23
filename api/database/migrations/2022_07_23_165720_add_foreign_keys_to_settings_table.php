<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('settings', function (Blueprint $table) {
            $table->foreign(['currency_id'], 'currency_id')->references(['id'])->on('currencies');
            $table->foreign(['warehouse_id'], 'settings_warehouse_id')->references(['id'])->on('warehouses');
            $table->foreign(['client_id'], 'settings_client_id')->references(['id'])->on('clients');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('settings', function (Blueprint $table) {
            $table->dropForeign('currency_id');
            $table->dropForeign('settings_warehouse_id');
            $table->dropForeign('settings_client_id');
        });
    }
}
