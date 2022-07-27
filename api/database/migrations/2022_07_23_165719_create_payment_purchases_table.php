<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentPurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_purchases', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('user_id')->index('user_id_payment_purchases');
            $table->date('date');
            $table->string('Ref', 192);
            $table->integer('purchase_id')->index('payments_purchase_id');
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
        Schema::dropIfExists('payment_purchases');
    }
}
