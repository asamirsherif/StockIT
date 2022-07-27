<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('email', 191);
            $table->integer('currency_id')->nullable()->index('currency_id');
            $table->string('CompanyName', 191);
            $table->string('CompanyPhone', 191);
            $table->string('CompanyAdress', 191);
            $table->string('logo', 191)->nullable();
            $table->timestamps(6);
            $table->softDeletes();
            $table->string('footer', 192)->default('Stocky - Ultimate Inventory With POS');
            $table->string('developed_by', 192)->default('Stocky');
            $table->integer('client_id')->nullable()->index('client_id');
            $table->integer('warehouse_id')->nullable()->index('warehouse_id');
            $table->string('default_language', 192)->default('en');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
