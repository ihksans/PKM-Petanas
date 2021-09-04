<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToRiwayatAktivitasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('riwayat_aktivitas', function (Blueprint $table) {
            $table->foreign(['ID_PENGGUNA', 'ID_PENCATATAN'], 'FK_RIWAYAT__MENDAPATK_PENCATAT')->references(['ID_PENGGUNA', 'ID_PENCATATAN'])->on('pencatatan')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('riwayat_aktivitas', function (Blueprint $table) {
            $table->dropForeign('FK_RIWAYAT__MENDAPATK_PENCATAT');
        });
    }
}
