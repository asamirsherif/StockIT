<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToQuotationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('quotations', function (Blueprint $table) {
            $table->foreign(['client_id'], 'client_id _quotation')->references(['id'])->on('clients');
            $table->foreign(['warehouse_id'], 'warehouse_id_quotation')->references(['id'])->on('warehouses');
            $table->foreign(['user_id'], 'user_id_quotation')->references(['id'])->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('quotations', function (Blueprint $table) {
            $table->dropForeign('client_id _quotation');
            $table->dropForeign('warehouse_id_quotation');
            $table->dropForeign('user_id_quotation');
        });
    }
}
