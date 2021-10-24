<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\Exports\SuratKeluarPerTypeSheet;

class SuratMasukExporter implements WithMultipleSheets
{
    use Exportable;

    public function sheets(): array
    {
        $sheets = [];
        for ($jenis = 1; $jenis <= 3; $jenis++) {
            $sheets[] = new SuratMasukPerTypeSheet($jenis);
        }
        return $sheets;
    }
}
