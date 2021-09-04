<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pengguna;

class PenggunaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Pengguna::create([
            'ID_PENGGUNA' => '2',
            'NAMA' => 'satria',
           'USERNAME' => 'satria',
           'ROLE' => '2',
           'JABATAN' => 'Staf arsip',
           'NIP' => '181511047',
           'Password' => \Hash::make('satria123'),
        ]);
        Pengguna::create([
           
            'ID_PENGGUNA' => '1',
            'NAMA' => 'admin',
            'USERNAME' => 'admin',
            'ROLE' => '1',
            'JABATAN' => null,
            'NIP' => null,
            'Password' => \Hash::make('admin123'),
        ]);
       
    }
}
