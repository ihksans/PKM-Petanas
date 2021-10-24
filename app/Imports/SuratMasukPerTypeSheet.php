<?php

namespace App\Imports;

use App\Models\Pencatatan;
use App\Models\SuratMasuk;
use App\Models\TujuanPencatatan;
use App\Models\KodeUnitKerja;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

use Illuminate\Support\Facades\DB;

class SuratMasukPerTypeSheet implements ToCollection, WithStartRow
{
    private $jenis;

    public function __construct(int $jenis)
    {
        $this->jenis = $jenis;
    }

    public function collection(Collection $rows)
    {   
        foreach ($rows as $row){
            $nomor_agenda = DB::table('surat_masuk')
            ->select('NOMOR_AGENDA')->where('NOMOR_AGENDA',$row[0])->first();
            if ($nomor_agenda == null){
                $user = DB::table('pengguna')
                ->where('NAMA','like','%'.$row[13].'%')->value('ID_PENGGUNA');
                
                $derajat = DB::table('derajat_surat')
                ->where('DERAJAT_SURAT',$row[14])->value('ID_DERAJAT_SURAT');

                $unit_kerja_pengirim = DB::table('kode_unit_kerja')
                ->where('KODE_UNIT_KERJA','like','%'.$row[9].'%')->value('ID_KODE_UNIT_KERJA');
                if ($unit_kerja_pengirim == null){
                    $new_unit_pengirim = KodeUnitKerja::create([
                        'KODE_UNIT_KERJA' => $row[9],
                        'NAMA_UNIT_KERJA' => $row[9],
                    ]);
                    $unit_kerja_pengirim = $new_unit_pengirim->id;
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

                SuratMasuk::create([
                    'ID_PENGGUNA' => $user,
                    'ID_PENCATATAN' => $pencatatan->id,
                    'ID_KODE_UNIT_KERJA'=> $unit_kerja_pengirim,
                    'ID_SIFAT_NASKAH'=> $sifat,
                    'NOMOR_SURAT'=> $row[3],
                    'NAMA_PENGIRIM'=> $row[8],
                    'TGL_DITERIMA'=> $row[2],
                    'NOMOR_AGENDA'=> $row[0],
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
