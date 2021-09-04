<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRiwayatAktivitasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('riwayat_aktivitas', function (Blueprint $table) {
            $table->integer('ID_RIWAYAT_ALTIVITAS', true);
            $table->unsignedInteger('ID_PENGGUNA');
            $table->integer('ID_PENCATATAN');
            $table->timestamp('WAKTU')->useCurrent();
            $table->string('DESKRIPSI')->nullable();
            $table->index(['ID_PENGGUNA', 'ID_PENCATATAN'], 'FK_RIWAYAT__MENDAPATK_PENCATAT');
            $table->primary(['ID_RIWAYAT_ALTIVITAS', 'ID_PENGGUNA', 'ID_PENCATATAN']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('riwayat_aktivitas');
    }
}
