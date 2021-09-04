<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToSuratKeluarTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('surat_keluar', function (Blueprint $table) {
            $table->foreign(['ID_PENGGUNA', 'ID_PENCATATAN'], 'FK_SURAT_KE_INHERITAN_PENCATAT')->references(['ID_PENGGUNA', 'ID_PENCATATAN'])->on('pencatatan')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('ID_NOMOR_SURAT', 'FK_SURAT_KE_MEMILIKI_NOMOR_SU')->references('ID_NOMOR_SURAT')->on('nomor_surat')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('ID_PEMOHON', 'FK_SURAT_KE_MEMOHON2_PEMOHON')->references('ID_PEMOHON')->on('pemohon')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('surat_keluar', function (Blueprint $table) {
            $table->dropForeign('FK_SURAT_KE_INHERITAN_PENCATAT');
            $table->dropForeign('FK_SURAT_KE_MEMILIKI_NOMOR_SU');
            $table->dropForeign('FK_SURAT_KE_MEMOHON2_PEMOHON');
        });
    }
}
