<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToTujuanDisposisiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tujuan_disposisi', function (Blueprint $table) {
            $table->foreign('ID_KODE_UNIT_KERJA', 'FK_TUJUAN_D_MENUJU_KODE_UNI')->references('ID_KODE_UNIT_KERJA')->on('kode_unit_kerja')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('ID_DISPOSISI', 'FK_TUJUAN_D_RELATIONS_DISPOSIS')->references('ID_DISPOSISI')->on('disposisi')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tujuan_disposisi', function (Blueprint $table) {
            $table->dropForeign('FK_TUJUAN_D_MENUJU_KODE_UNI');
            $table->dropForeign('FK_TUJUAN_D_RELATIONS_DISPOSIS');
        });
    }
}
