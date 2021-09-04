<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToNomorSuratTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('nomor_surat', function (Blueprint $table) {
            $table->foreign('ID_SIFAT_NASKAH', 'FK_NOMOR_SU_BERSIFAT_KODE_SIF')->references('ID_SIFAT_NASKAH')->on('kode_sifat_naskah')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('ID_KODE_UNIT_KERJA', 'FK_NOMOR_SU_OLEH_KODE_UNI')->references('ID_KODE_UNIT_KERJA')->on('kode_unit_kerja')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('ID_KODE_PERGURUAN_TINGGI', 'FK_NOMOR_SU_PERGURUAN_KODE_PER')->references('ID_KODE_PERGURUAN_TINGGI')->on('kode_perguruan_tinggi')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('ID_KODE_HAL', 'FK_NOMOR_SU_PERIHAL_KODE_HAL')->references('ID_KODE_HAL')->on('kode_hal')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('nomor_surat', function (Blueprint $table) {
            $table->dropForeign('FK_NOMOR_SU_BERSIFAT_KODE_SIF');
            $table->dropForeign('FK_NOMOR_SU_OLEH_KODE_UNI');
            $table->dropForeign('FK_NOMOR_SU_PERGURUAN_KODE_PER');
            $table->dropForeign('FK_NOMOR_SU_PERIHAL_KODE_HAL');
        });
    }
}
