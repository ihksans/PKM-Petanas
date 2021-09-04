<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuratKeluarTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('surat_keluar', function (Blueprint $table) {
            $table->unsignedInteger('ID_PENGGUNA');
            $table->integer('ID_PENCATATAN');
            $table->integer('ID_NOMOR_SURAT')->index('FK_SURAT_KE_MEMILIKI_NOMOR_SU');
            $table->integer('ID_PEMOHON')->nullable()->index('FK_SURAT_KE_MEMOHON2_PEMOHON');
            $table->date('TGL_KIRIM')->nullable();
            $table->string('NOMOR_SURAT', 40)->nullable();
            $table->primary(['ID_PENGGUNA', 'ID_PENCATATAN']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('surat_keluar');
    }
}
