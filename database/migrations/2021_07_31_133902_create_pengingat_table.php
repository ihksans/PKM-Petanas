<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePengingatTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pengingat', function (Blueprint $table) {
            $table->integer('ID_PENGINGAT', true);
            $table->unsignedInteger('ID_PENGGUNA');
            $table->integer('ID_PENCATATAN');
            $table->dateTime('WAKTU_PENGINGAT')->nullable();
            $table->tinyInteger('STATUS')->nullable();
            $table->string('DESKRIPSI')->nullable();
            $table->char('JENIS_PENGINGAT', 1)->nullable();
            $table->index(['ID_PENGGUNA', 'ID_PENCATATAN'], 'FK_PENGINGA_MENGINGAT_PENCATAT');
            $table->primary(['ID_PENGINGAT', 'ID_PENGGUNA', 'ID_PENCATATAN']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pengingat');
    }
}
