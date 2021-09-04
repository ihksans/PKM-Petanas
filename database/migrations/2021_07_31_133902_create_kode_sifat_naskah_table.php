<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKodeSifatNaskahTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kode_sifat_naskah', function (Blueprint $table) {
            $table->integer('ID_SIFAT_NASKAH', true);
            $table->string('KODE_SIFAT_NASKAH', 2)->nullable();
            $table->string('SIFAT_NASKAH', 100)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kode_sifat_naskah');
    }
}
