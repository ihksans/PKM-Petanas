<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DerajatSurat;
class DerajatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DerajatSurat::create([
            'DERAJAT_SURAT'=>'Sangat Segera',
            'Deskripsi'=>'Naskah dinas dengan urgensi sangat segera merupakan derajat naskah dinas yang isi dari surat tersebut harus segera diketahui penerima surat dan penyelesaiannya harus dilakukan pada kesempatan pertama atau secepat mungkin'
        ]);
        DerajatSurat::create([
            'DERAJAT_SURAT'=>'Segera',
            'Deskripsi'=>'Naskah dinas dengan urgensi segera merupakan derajat surat yang isi dari surat tersebut harus segera diketahui atau ditanggapi oleh penerima surat'
        ]);
        DerajatSurat::create([
            'DERAJAT_SURAT'=>'Biasa',
            'Deskripsi'=>'Naskah dinas dengan urgensi biasa merupakan derajat naskah dinas yang penyampaian dan penyelesaiannya tidak cepat seperti derajat sangat segera dan segera'
        ]);
    }
}
