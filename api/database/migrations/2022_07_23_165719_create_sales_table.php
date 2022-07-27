<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('user_id')->index('user_id_sales');
            $table->date('date');
            $table->string('Ref', 192);
            $table->boolean('is_pos')->nullable()->default(false);
            $table->integer('client_id')->index('sale_client_id');
            $table->integer('warehouse_id')->index('warehouse_id_sale');
            $table->double('tax_rate')->nullable()->default(0);
            $table->double('TaxNet')->nullable()->default(0);
            $table->double('discount')->nullable()->default(0);
            $table->double('shipping')->nullable()->default(0);
            $table->double('GrandTotal')->default(0);
            $table->double('paid_amount')->default(0);
            $table->string('payment_statut', 192);
            $table->string('statut', 191);
            $table->text('notes')->nullable();
            $table->timestamps(6);
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales');
    }
}
