<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\JenisSurat;
class JenisSuratSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Arahan - Peraturan',
            'KETERANGAN' => 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Arahan - Instruksi',
            'KETERANGAN' => 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Arahan - SOP',
            'KETERANGAN' => 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Arahan - Surat Edaran',
            'KETERANGAN' => 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Arahan - Penetapan',
            'KETERANGAN' => 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Arahan - Surat Tugas',
            'KETERANGAN' => 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Arahan - Surat Izin',
            'KETERANGAN' => 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Korespondensi - Nota Dinas',
            'KETERANGAN' => 'Naskah dinas korespondensi merupakan naskah dinas atau surat yang dibuat oleh pejabat dalam melaksanakan tugas dan fungsinya, yang ditunjukan kepada pejabat atau pihak lain baik internal maupun eksternal',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Korespondensi - Memo',
            'KETERANGAN' => 'Naskah dinas korespondensi merupakan naskah dinas atau surat yang dibuat oleh pejabat dalam melaksanakan tugas dan fungsinya, yang ditunjukan kepada pejabat atau pihak lain baik internal maupun eksternal',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Korespondensi - Surat Dinas',
            'KETERANGAN' => 'Naskah dinas korespondensi merupakan naskah dinas atau surat yang dibuat oleh pejabat dalam melaksanakan tugas dan fungsinya, yang ditunjukan kepada pejabat atau pihak lain baik internal maupun eksternal',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Korespondensi - Surat Undangan',
            'KETERANGAN' => 'Naskah dinas korespondensi merupakan naskah dinas atau surat yang dibuat oleh pejabat dalam melaksanakan tugas dan fungsinya, yang ditunjukan kepada pejabat atau pihak lain baik internal maupun eksternal',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Korespondensi - Disposisi',
            'KETERANGAN' => 'Naskah dinas korespondensi merupakan naskah dinas atau surat yang dibuat oleh pejabat dalam melaksanakan tugas dan fungsinya, yang ditunjukan kepada pejabat atau pihak lain baik internal maupun eksternal',
        ]);

        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Khusus - Nota Kesepahaman',
            'KETERANGAN' => 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Khusus - Surat Perjanjian',
            'KETERANGAN' => 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Khusus - Surat Kuasa',
            'KETERANGAN' => 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Khusus - Pelimpahan Wewenang',
            'KETERANGAN' => 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Khusus - Surat Keterangan',
            'KETERANGAN' => 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Khusus - Berita Acara',
            'KETERANGAN' => 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Khusus - Surat Pengantar',
            'KETERANGAN' => 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Khusus - Surat Pernyataan',
            'KETERANGAN' => 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Khusus - Pengumuman',
            'KETERANGAN' => 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Khusus - Notula Rapat',
            'KETERANGAN' => 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Khusus - Proposal/KAK',
            'KETERANGAN' => 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus',
        ]);
        JenisSurat::create([
            'JENIS_SURAT' => 'Naskah Khusus - Sertifikat',
            'KETERANGAN' => 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus',
        ]);
    }
}
