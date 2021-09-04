<?php

namespace Database\Seeders;

use App\Models\DerajatSurat;
use App\Models\KodePerguruanTinggi;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
    //    $this->call(PenggunaSeeder::class);
    //    $this->call(UserSeeder::class);
      $this->call(DerajatSeeder::class);
      $this->call(JenisSuratSeeder::class);
      $this->call(KodeHalSeeder::class);
      $this->call(KodePerguruanTinggiSeeder::class);
      $this->call(KodeSifatSeeder::class);
      $this->call(KodeUnitKerjaSeeder::class);
      $this->call(JenisSuratSeeder::class);
    }
}
