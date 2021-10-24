<?php

namespace App\Exports;

use App\Models\Pencatatan;
use App\Models\SuratKeluar;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;

use Illuminate\Support\Facades\DB;

class SuratKeluarPerTypeSheet implements FromCollection, WithTitle, WithHeadings, ShouldAutoSize, WithEvents
{
    private $jenis;

    public function __construct(int $jenis)
    {
        $this->jenis = $jenis;
    }

    public function collection()
    {
        $suratKeluar = DB::table('surat_keluar')
        ->join('pencatatan','surat_keluar.ID_PENCATATAN','=','pencatatan.ID_PENCATATAN')
        ->join('pengguna','surat_keluar.ID_PENGGUNA','=','pengguna.ID_PENGGUNA')        
        ->join('jenis_surat','jenis_surat.ID_JENIS_SURAT','=','pencatatan.ID_JENIS_SURAT')
        ->join('tujuan_pencatatan','tujuan_pencatatan.ID_PENCATATAN', '=', 'pencatatan.ID_PENCATATAN')
        ->join('pemohon','pemohon.ID_PEMOHON','=','surat_keluar.ID_PEMOHON')
        ->join('nomor_surat','nomor_surat.ID_NOMOR_SURAT','=','surat_keluar.ID_NOMOR_SURAT')
        ->where('jenis_surat.TIPE_SURAT',$this->jenis)
        ->select('nomor_surat.NOMOR_URUT','pencatatan.TGL_SURAT','surat_keluar.TGL_KIRIM','surat_keluar.NOMOR_SURAT','pencatatan.PERIHAL',
        'tujuan_pencatatan.ID_KODE_UNIT_KERJA','pencatatan.PENANDATANGAN','pemohon.NAMA_PEMOHON','pencatatan.ID_PENCATATAN as UNIT_PEMOHON' ,
        'pencatatan.KODE_ARSIP_KOM','pencatatan.KODE_ARSIP_HLM','pencatatan.KODE_ARSIP_MANUAL','pengguna.NAMA')
        ->get();
        foreach ($suratKeluar as $row){
            $tujuan = DB::table('kode_unit_kerja')
            ->where('ID_KODE_UNIT_KERJA', '=', $row->ID_KODE_UNIT_KERJA)
            ->select('NAMA_UNIT_KERJA')
            ->get()->first();
            $row->ID_KODE_UNIT_KERJA = $tujuan->NAMA_UNIT_KERJA;
            $row->UNIT_PEMOHON = 'Wakil Direktur Bidang Kemahasiswaan';
        }
        return $suratKeluar;
    }

    public function title(): string
    {
        if ($this->jenis == 1){
            $nama_jenis = 'Naskah Dinas Arahan';
        }
        if ($this->jenis == 2){
            $nama_jenis = 'Naskah Dinas Korespondensi';
        }
        if ($this->jenis == 3){
            $nama_jenis = 'Naskah Dinas Khusus';
        }
        return $nama_jenis;
    }

    public function headings(): array
    {
        if ($this->jenis == 1){
            $nama_jenis = 'Naskah Dinas Arahan';
        }
        if ($this->jenis == 2){
            $nama_jenis = 'Naskah Dinas Korespondensi';
        }
        if ($this->jenis == 3){
            $nama_jenis = 'Naskah Dinas Khusus';
        }
        return [
            [
                '(LOGO POLBAN)','','','POLITEKNIK NEGERI BANDUNG','','','','','','','NO. DOKUMEN','',''
            ],
            [
                '(LOGO POLBAN)','','','WAKIL DIREKTUR BIDANG KEMAHASISWAAN','','','','','','','NO. DOKUMEN','',''
            ],
            [
                'FORMULIR','','','BUKU AGENDA NASKAH KELUAR','','','','','','','[No. Dokumen]','',''
            ],
            [],
            [
                'KELOMPOK NASKAH','','',$nama_jenis,'','','','ATASAN LANGSUNG','','','HARITA NURWAHYU CHAMIDY','',''
            ],
            [
                'Tahun','','',date("Y"),'','','','ATASAN LANGSUNG','','','HARITA NURWAHYU CHAMIDY','',''
            ],
            [],
            [
                'NOMOR AGENDA',
                'TANGGAL',
                '',
                'NOMOR NASKAH',
                'PERIHAL',
                'TUJUAN NASKAH',
                'PENANDATANGAN',
                'PEMOHON',
                '',
                'KODE ARSIP',
                '',
                '',
                'PETUGAS YANG MENCATAT'
            ],
            [
                '',
                'NASKAH',
                'KIRIM',
                '',
                '',
                '',
                '',
                'NAMA',
                'UNIT',
                'KOM',
                'HLM',
                'MANUAL',
                ''
            ],
         ];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class=>function(AfterSheet $event) {
                //Title
                $event->sheet->getDelegate()->getStyle('D1:J3')->getFont()->setSize(14);
                $event->sheet->getDelegate()->getStyle('A1:M3')->getAlignment()->setHorizontal('center');
                $event->sheet->getDelegate()->getStyle('A1:M3')->getAlignment()->setVertical('center');
                $event->sheet->mergeCells(sprintf('A1:C2'));
                $event->sheet->mergeCells(sprintf('D1:J1'));
                $event->sheet->mergeCells(sprintf('D2:J2'));
                $event->sheet->mergeCells(sprintf('D3:J3'));
                $event->sheet->mergeCells(sprintf('K1:M2'));
                $event->sheet->mergeCells(sprintf('A3:C3'));
                $event->sheet->getDelegate()->getStyle('A3:C3')->getFont()->setSize(12);
                $event->sheet->getDelegate()->getStyle('K3:M3')->getFont()->setSize(12);
                $event->sheet->mergeCells(sprintf('K3:M3'));

                //Info Sheet
                $event->sheet->mergeCells(sprintf('A5:C5'));
                $event->sheet->mergeCells(sprintf('A6:C6'));
                $event->sheet->mergeCells(sprintf('D5:G5'));
                $event->sheet->mergeCells(sprintf('D6:G6'));
                $event->sheet->getDelegate()->getStyle('D6:G6')->getAlignment()->setHorizontal('left');
                $event->sheet->mergeCells(sprintf('H5:J6'));
                $event->sheet->mergeCells(sprintf('K5:M6'));
                $event->sheet->getDelegate()->getStyle('A5:C5')->getAlignment()->setHorizontal('center');
                $event->sheet->getDelegate()->getStyle('A6:C6')->getAlignment()->setHorizontal('center');
                $event->sheet->getDelegate()->getStyle('H5:M6')->getAlignment()->setHorizontal('center');
                $event->sheet->getDelegate()->getStyle('H5:M6')->getAlignment()->setVertical('center');      

                $event->sheet->getDelegate()->getStyle('A5:M9')->getFont()->setSize(12);
                
                //Table headers
                $headerTableRange = 'A8:M9';
                $event->sheet->getDelegate()->getStyle($headerTableRange)->getAlignment()->setHorizontal('center');
                $event->sheet->getDelegate()->getStyle($headerTableRange)->getAlignment()->setVertical('center');
                
                //merge for NOMOR AGENDA
                $event->sheet->mergeCells(sprintf('A8:A9'));

                //merge for TANGGAL
                $event->sheet->mergeCells(sprintf('B8:C8'));
                
                //merge for NOMOR NASKAH
                $event->sheet->mergeCells(sprintf('D8:D9'));
                
                //merge for PERIHAL
                $event->sheet->mergeCells(sprintf('E8:E9'));
                
                //merge for TUJUAN NASKAH
                $event->sheet->mergeCells(sprintf('F8:F9'));
                
                //merge for PENANDATANGAN
                $event->sheet->mergeCells(sprintf('G8:G9'));
                
                //merge for PEMOHON
                $event->sheet->mergeCells(sprintf('H8:I8'));
                
                //merge for KODE ARSIP
                $event->sheet->mergeCells(sprintf('J8:L8'));
                
                //merge for PETUGAS YANG MENCATAT
                $event->sheet->mergeCells(sprintf('M8:M9'));
            },
        ];
    }
}
