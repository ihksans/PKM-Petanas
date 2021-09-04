<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTujuanPencatatanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tujuan_pencatatan', function (Blueprint $table) {
            $table->integer('ID_PENCATATAN');
            $table->integer('ID_KODE_UNIT_KERJA')->index('FK_TUJUAN_P_DITUJU_KODE_UNI');
            $table->primary(['ID_PENCATATAN', 'ID_KODE_UNIT_KERJA']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tujuan_pencatatan');
    }
}
