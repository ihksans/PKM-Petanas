<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\KodeHal;
class KodeHalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      
        
        KodeHal::create([
            'KODE_HAL'=>'KM.00.00',
            'HAL'=>'Surat keterangan aktif kuliah'
        ]);
        KodeHal::create([
            'KODE_HAL'=>'KM.00.01',
            'HAL'=>'Cuti/Dispensasi mahasiswa'
        ]);
        KodeHal::create([
            'KODE_HAL'=>'KM.00.02',
            'HAL'=>'Perpanjang masa studi'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.00.03',
            'HAL'=>'Evaluasi Masa Studi'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.00.04',
            'HAL'=>'Mutasi/Perpindahan mahasiswa'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.00.05',
            'HAL'=>'Skorsing'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.00.06',
            'HAL'=>'Pengunduran diri'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.00.07',
            'HAL'=>'Pemutusan studi/Drop Out'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.00.08',
            'HAL'=>'Mahasiswa meninggal dunia'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.01.00',
            'HAL'=>'Beasiswa'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.01.01',
            'HAL'=>'Keringan/Penundaan biaya pendidikan'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.01.02',
            'HAL'=>'Layanan kesehatan mahasiswa'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.01.03',
            'HAL'=>'Penyuluhan kesehatan'
        ]);
        KodeHal::create([
            'KODE_HAL'=>'KM.03.00',
            'HAL'=>'Peraturan asrama'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.03.01',
            'HAL'=>'Seleksi dan penetapan penghuni asrama'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.03.02',
            'HAL'=>'Berkas perseorangan penghuni asrama'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.03.03',
            'HAL'=>'Kegiatan penghuni asrama'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.04',
            'HAL'=>'Penggunaan fasilitas mahasiswa '
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.05.01',
            'HAL'=>'Pembentukan organisasi ormawa'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.05.02',
            'HAL'=>'Pengangkatan/Pemberhentian pengurus ormawa'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.05.03',
            'HAL'=>'Program kerja/kegiatan ormawa'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.05.04',
            'HAL'=>'Laporan pelaksanaan kegiatan/kepengurusan ormawa'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.06.00',
            'HAL'=>'Kegiatan rutin unit kegiatan mahasiswa'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.06.01',
            'HAL'=>'Program Kreatifitas Mahasiswa'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.06.02',
            'HAL'=>'Pembinaan disiplin mahasiswa'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.06.03',
            'HAL'=>'Lembaga kemahasiswaan lokal, nasional, internasional'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.06.04',
            'HAL'=>'Pretasi mahasiswa'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.06.05',
            'HAL'=>'Inventori mahasiswa'
        ]);
        
        KodeHal::create([
            'KODE_HAL'=>'KM.07.00',
            'HAL'=>'Pembentukan organisasi IOM'
        ]);
        KodeHal::create([
            'KODE_HAL'=>'KM.07.01',
            'HAL'=>'Pengangkatan/Pemberhentikan pengurus IOM'
        ]);
        KodeHal::create([
            'KODE_HAL'=>'KM.07.02',
            'HAL'=>'Kegiatan organisasi IOM'
        ]);
        KodeHal::create([
            'KODE_HAL'=>'KM.07.03',
            'HAL'=>'Laporan kepengurusan IOM'
        ]);
        KodeHal::create([
            'KODE_HAL'=>'KM.08',
            'HAL'=>'Berkas perseorangan mahasiswa'
        ]);
        
        
    }
}
