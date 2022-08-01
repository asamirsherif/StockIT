<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSaleReturnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sale_returns', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('user_id')->index('user_id_returns');
            $table->date('date');
            $table->string('Ref', 192);
            $table->integer('client_id')->index('client_id_returns');
            $table->integer('warehouse_id')->index('warehouse_id_sale_return_id');
            $table->double('tax_rate')->nullable()->default(0);
            $table->double('TaxNet')->nullable()->default(0);
            $table->double('discount')->nullable()->default(0);
            $table->double('shipping')->nullable()->default(0);
            $table->double('GrandTotal');
            $table->double('paid_amount')->default(0);
            $table->string('payment_status', 192);
            $table->string('status', 192);
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
        Schema::dropIfExists('sale_returns');
    }
}
