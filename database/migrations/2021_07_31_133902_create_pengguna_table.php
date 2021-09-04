<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePenggunaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pengguna', function (Blueprint $table) {
            $table->increments('ID_PENGGUNA');
            $table->string('USERNAME', 16)->nullable();
            $table->string('PASSWORD', 100)->nullable();
            $table->string('NAMA', 30)->nullable();
            $table->char('ROLE', 1)->nullable();
            $table->char('NIP', 18)->nullable();
            $table->string('JABATAN', 50)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pengguna');
    }
}
