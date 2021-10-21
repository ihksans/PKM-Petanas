<?php

namespace App\Exports;

use App\Models\Pencatatan;
use App\Models\SuratMasuk;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Concerns\WithDrawings;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;

use Illuminate\Support\Facades\DB;


class Exporter implements FromCollection, WithHeadings, WithEvents, ShouldAutoSize
{
    // use Exportable;
    public function collection()
    {
        return DB::table('surat_masuk')
        ->join('kode_unit_kerja','surat_masuk.ID_KODE_UNIT_KERJA','=','kode_unit_kerja.ID_KODE_UNIT_KERJA')
        ->join('pencatatan','surat_masuk.ID_PENCATATAN','=','pencatatan.ID_PENCATATAN')
        ->join('pengguna','surat_masuk.ID_PENGGUNA','=','pengguna.ID_PENGGUNA')
        ->select('surat_masuk.NOMOR_AGENDA','surat_masuk.TGL_SURAT','surat_masuk.TGL_DITERIMA','surat_masuk.NOMOR_SURAT','surat_masuk.PERIHAL',
        'surat_masuk.TUJUAN_SURAT','surat_masuk.PENANDATANGAN','surat_masuk.NAMA_PENGIRIM','kode_unit_kerja.NAMA_UNIT_KERJA','pencatatan.KODE_ARSIP_KOM',
        'pencatatan.KODE_ARSIP_HLM','pencatatan.KODE_ARSIP_MANUAL','pengguna.NAMA')
        ->get();
    }
    public function headings(): array
    {
        return [
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
                'TANGGAL NASKAH',
                'TANGGAL TERIMA',
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
                $headerTableRange = 'A1:M2'; // All headers
                $event->sheet->getDelegate()->getStyle($headerTableRange)->getFont()->setSize(12);
                $event->sheet->getDelegate()->getStyle($headerTableRange)->getAlignment()->setHorizontal('center');
                
                //merge for NOMOR AGENDA
                $event->sheet->mergeCells(sprintf('A1:A2'));
                $event->sheet->getDelegate()->getStyle('A1:A2')->getAlignment()->setVertical('center');

                //merge for TANGGAL
                $event->sheet->mergeCells(sprintf('B1:C1'));
                
                //merge for NOMOR NASKAH
                $event->sheet->mergeCells(sprintf('D1:D2'));
                $event->sheet->getDelegate()->getStyle('D1:D2')->getAlignment()->setVertical('center');
                
                //merge for PERIHAL
                $event->sheet->mergeCells(sprintf('E1:E2'));
                $event->sheet->getDelegate()->getStyle('E1:E2')->getAlignment()->setVertical('center');
                
                //merge for TUJUAN NASKAH
                $event->sheet->mergeCells(sprintf('F1:F2'));
                $event->sheet->getDelegate()->getStyle('F1:F2')->getAlignment()->setVertical('center');
                
                //merge for PENANDATANGAN
                $event->sheet->mergeCells(sprintf('G1:G2'));
                $event->sheet->getDelegate()->getStyle('G1:G2')->getAlignment()->setVertical('center');
                
                //merge for PEMOHON
                $event->sheet->mergeCells(sprintf('H1:I1'));
                
                //merge for KODE ARSIP
                $event->sheet->mergeCells(sprintf('J1:L1'));
                
                //merge for PETUGAS YANG MENCATAT
                $event->sheet->mergeCells(sprintf('M1:M2'));
                $event->sheet->getDelegate()->getStyle('M1:M2')->getAlignment()->setVertical('center');
            },
        ];
    }
    // public function drawings()
    // {
    //     $drawing = new Drawing();
    //     $drawing->setName('Logo');
    //     $drawing->setDescription('This is my logo');
    //     $drawing->setPath(public_path('assets/img/Logo Polban.png'));
    //     $drawing->setHeight(90);
    //     $drawing->setCoordinates('A1');
    //     return $drawing;
    // }
}
