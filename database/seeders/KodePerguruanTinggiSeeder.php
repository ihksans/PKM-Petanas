<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\KodePerguruanTinggi;
class KodePerguruanTinggiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        KodePerguruanTinggi::create([
            'Kode_PERGURUAN_TINGGI'=>'PL1',
            'PERGURUAN_TINGGI'=>'Politeknik Negeri Bandung'
        ]);
    }
}
