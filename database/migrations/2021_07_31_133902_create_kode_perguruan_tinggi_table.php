<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKodePerguruanTinggiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kode_perguruan_tinggi', function (Blueprint $table) {
            $table->integer('ID_KODE_PERGURUAN_TINGGI', true);
            $table->string('KODE_PERGURUAN_TINGGI', 10)->nullable();
            $table->string('PERGURUAN_TINGGI', 100)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kode_perguruan_tinggi');
    }
}
