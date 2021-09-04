<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToSuratMasukTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('surat_masuk', function (Blueprint $table) {
            $table->foreign('ID_SIFAT_NASKAH', 'FK_SURAT_MA_BERUPA2_KODE_SIF')->references('ID_SIFAT_NASKAH')->on('kode_sifat_naskah')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('ID_KODE_UNIT_KERJA', 'FK_SURAT_MA_DARI_KODE_UNI')->references('ID_KODE_UNIT_KERJA')->on('kode_unit_kerja')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign(['ID_PENGGUNA', 'ID_PENCATATAN'], 'FK_SURAT_MA_INHERITAN_PENCATAT')->references(['ID_PENGGUNA', 'ID_PENCATATAN'])->on('pencatatan')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('surat_masuk', function (Blueprint $table) {
            $table->dropForeign('FK_SURAT_MA_BERUPA2_KODE_SIF');
            $table->dropForeign('FK_SURAT_MA_DARI_KODE_UNI');
            $table->dropForeign('FK_SURAT_MA_INHERITAN_PENCATAT');
        });
    }
}
