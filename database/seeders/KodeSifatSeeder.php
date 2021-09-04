<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\KodeSifatNaskah;
class KodeSifatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        KodeSifatNaskah::create([
            'KODE_SIFAT_NASKAH'=>'SR',
            'SIFAT_NASKAH'=>'Sangat Rahasia'
        ]);
        KodeSifatNaskah::create([
            'KODE_SIFAT_NASKAH'=>'R',
            'SIFAT_NASKAH'=>'Rahasia'
        ]);
        KodeSifatNaskah::create([
            'KODE_SIFAT_NASKAH'=>'T',
            'SIFAT_NASKAH'=>'Terbatas'
        ]);
        KodeSifatNaskah::create([
            'KODE_SIFAT_NASKAH'=>'B',
            'SIFAT_NASKAH'=>'Biasa'
        ]);
    }
}
