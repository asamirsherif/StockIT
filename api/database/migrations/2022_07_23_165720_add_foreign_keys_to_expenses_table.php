<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('expenses', function (Blueprint $table) {
            $table->foreign(['expense_category_id'], 'expense_category_id')->references(['id'])->on('expense_categories');
            $table->foreign(['warehouse_id'], 'expense_warehouse_id')->references(['id'])->on('warehouses');
            $table->foreign(['user_id'], 'expense_user_id')->references(['id'])->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('expenses', function (Blueprint $table) {
            $table->dropForeign('expense_category_id');
            $table->dropForeign('expense_warehouse_id');
            $table->dropForeign('expense_user_id');
        });
    }
}
