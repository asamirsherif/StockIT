<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('firstname', 191)->nullable();
            $table->string('lastname', 191)->nullable();
            $table->string('name', 192);
            $table->string('email', 192);
            $table->string('password', 191);
            $table->string('avatar', 191)->nullable();
            $table->string('phone', 192)->nullable();
            $table->integer('role_id')->nullable();
            $table->boolean('statut')->default(true);
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
        Schema::dropIfExists('users');
    }
}
