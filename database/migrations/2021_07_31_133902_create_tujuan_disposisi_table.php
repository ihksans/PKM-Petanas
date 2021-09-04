<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTujuanDisposisiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tujuan_disposisi', function (Blueprint $table) {
            $table->integer('ID_DISPOSISI');
            $table->integer('ID_KODE_UNIT_KERJA')->index('FK_TUJUAN_D_MENUJU_KODE_UNI');
            $table->primary(['ID_DISPOSISI', 'ID_KODE_UNIT_KERJA']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tujuan_disposisi');
    }
}
