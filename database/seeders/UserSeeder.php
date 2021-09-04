<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // User::create([
        //     'id' => '2',
        //     'username' => 'nadia',
        //     'name' => 'nadia',
        //     'password' => \Hash::make('nadia123'),
        // ]);
        User::create([
            'id' => '1',
            'username' => 'admin',
            'name' => 'admin',
            'password' => \Hash::make('admin123'),
        ]);
        User::create([
            'id' => '2',
            'username' => 'satria',
            'name' => 'satria',
            'password' => \Hash::make('satria123'),
        ]);
    }
}
