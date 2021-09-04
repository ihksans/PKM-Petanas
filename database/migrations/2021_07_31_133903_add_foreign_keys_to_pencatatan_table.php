<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPencatatanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pencatatan', function (Blueprint $table) {
            $table->foreign('ID_DERAJAT_SURAT', 'FK_PENCATAT_BERDERAJA_DERAJAT_')->references('ID_DERAJAT_SURAT')->on('derajat_surat')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('ID_JENIS_SURAT', 'FK_PENCATAT_BERJENIS_JENIS_SU')->references('ID_JENIS_SURAT')->on('jenis_surat')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('ID_PENGGUNA', 'FK_PENCATAT_MEMBUAT_PENGGUNA')->references('ID_PENGGUNA')->on('pengguna')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pencatatan', function (Blueprint $table) {
            $table->dropForeign('FK_PENCATAT_BERDERAJA_DERAJAT_');
            $table->dropForeign('FK_PENCATAT_BERJENIS_JENIS_SU');
            $table->dropForeign('FK_PENCATAT_MEMBUAT_PENGGUNA');
        });
    }
}
