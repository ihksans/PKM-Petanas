<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKodeUnitKerjaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kode_unit_kerja', function (Blueprint $table) {
            $table->integer('ID_KODE_UNIT_KERJA', true);
            $table->string('KODE_UNIT_KERJA', 10)->nullable();
            $table->string('NAMA_UNIT_KERJA', 100)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kode_unit_kerja');
    }
}
