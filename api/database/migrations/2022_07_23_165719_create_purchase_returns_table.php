<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseReturnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_returns', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('user_id')->index('user_id_returns');
            $table->date('date');
            $table->string('Ref', 192);
            $table->integer('provider_id')->index('provider_id_return');
            $table->integer('warehouse_id')->index('purchase_return_warehouse_id');
            $table->double('tax_rate')->nullable()->default(0);
            $table->double('TaxNet')->nullable()->default(0);
            $table->double('discount')->nullable()->default(0);
            $table->double('shipping')->nullable()->default(0);
            $table->double('GrandTotal');
            $table->double('paid_amount')->default(0);
            $table->string('payment_statut', 192);
            $table->string('statut', 192);
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
        Schema::dropIfExists('purchase_returns');
    }
}
