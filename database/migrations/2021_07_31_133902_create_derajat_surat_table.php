<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDerajatSuratTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('derajat_surat', function (Blueprint $table) {
            $table->integer('ID_DERAJAT_SURAT', true);
            $table->string('DERAJAT_SURAT', 20)->nullable();
            $table->string('DESKRIPSI')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('derajat_surat');
    }
}
