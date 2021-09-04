<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToDisposisiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('disposisi', function (Blueprint $table) {
            $table->foreign(['ID_PENCATATAN', 'ID_PENGGUNA'], 'FK_DISPOSIS_MENAMBAHK_PENCATAT')->references(['ID_PENCATATAN', 'ID_PENGGUNA'])->on('pencatatan')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('disposisi', function (Blueprint $table) {
            $table->dropForeign('FK_DISPOSIS_MENAMBAHK_PENCATAT');
        });
    }
}
