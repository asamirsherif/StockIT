<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_sales', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('user_id')->index('user_id_payments_sale');
            $table->date('date');
            $table->string('Ref', 192);
            $table->integer('sale_id')->index('payment_sale_id');
            $table->double('montant');
            $table->double('change')->default(0);
            $table->string('Reglement', 192);
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
        Schema::dropIfExists('payment_sales');
    }
}
