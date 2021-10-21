<?php

namespace App\Imports;

use App\Models\Pencatatan;
use App\Models\SuratKeluar;
use App\Models\TujuanPencatatan;
use App\Models\KodeUnitKerja;
use App\Models\Pemohon;
use App\Models\NomorSuratKeluar;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

use Illuminate\Support\Facades\DB;

class SuratKeluarPerTypeSheet implements ToCollection, WithStartRow
{
    private $jenis;

    public function __construct(int $jenis)
    {
        $this->jenis = $jenis;
    }

    public function collection(Collection $rows)
    {   
        foreach ($rows as $row){
            $nomor_agenda = DB::table('nomor_surat')
            ->select('NOMOR_URUT')->where('NOMOR_URUT',$row[0])->first();
            if ($nomor_agenda == null){
                $user = DB::table('pengguna')
                ->where('NAMA','like','%'.$row[13].'%')->value('ID_PENGGUNA');
                
                $derajat = DB::table('derajat_surat')
                ->where('DERAJAT_SURAT',$row[14])->value('ID_DERAJAT_SURAT');

                $pemohon = DB::table('pemohon')
                ->where('NAMA_PEMOHON',$row[8])->value('ID_PEMOHON');
                if ($pemohon == null){
                    $new_pemohon = Pemohon::create([
                        'NAMA_PEMOHON' => $row[8],
                    ]);
                    $pemohon = $new_pemohon->id;
                }
                
                $unit_kerja_tujuan = DB::table('kode_unit_kerja')
                ->where('KODE_UNIT_KERJA','like','%'.$row[6].'%')->value('ID_KODE_UNIT_KERJA');
                if ($unit_kerja_tujuan == null){
                    $new_unit_tujuan = KodeUnitKerja::create([
                        'KODE_UNIT_KERJA' => $row[6],
                        'NAMA_UNIT_KERJA' => $row[6],
                    ]);
                    $unit_kerja_tujuan = $new_unit_tujuan->id;
                }
                
                $sifat = DB::table('kode_sifat_naskah')
                ->where('SIFAT_NASKAH','like','%'.$row[15].'%')->value('ID_SIFAT_NASKAH');

                $nomor = NomorSuratKeluar::create([
                    'ID_KODE_UNIT_KERJA' => 1,
                    'NOMOR_URUT' => $row[0],
                    'TAHUN' => date('Y'),
                ]);

                $pencatatan = Pencatatan::create([
                    'ID_PENGGUNA' => $user,
                    'ID_JENIS_SURAT' => $row[5],
                    'ID_DERAJAT_SURAT'=> $derajat,
                    'KODE_ARSIP_KOM' => $row[10],
                    'KODE_ARSIP_HLM' => $row[11],
                    'KODE_ARSIP_MANUAL' => $row[12],
                    'PERIHAL' => $row[4],
                    'TGL_SURAT' => $row[1],
                    'PENANDATANGAN' => $row[7],
                ]);

                SuratKeluar::create([
                    'ID_PENGGUNA' => $user,
                    'ID_PENCATATAN' => $pencatatan->id,
                    'ID_NOMOR_SURAT'=> $nomor->id,
                    'ID_PEMOHON'=> $pemohon,
                    'TGL_KIRIM'=> $row[2],
                    'NOMOR_SURAT'=> $row[3],
                ]);

                TujuanPencatatan::create([
                    'ID_PENCATATAN' => $pencatatan->id,
                    'ID_KODE_UNIT_KERJA'=> $unit_kerja_tujuan,
                ]);
            }
        }
    }
    public function startRow(): int
    {
        return 10;
    }
}
