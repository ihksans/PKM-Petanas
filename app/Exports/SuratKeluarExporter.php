<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\Exports\SuratKeluarPerTypeSheet;

class SuratKeluarExporter implements WithMultipleSheets
{
    use Exportable;

    public function sheets(): array
    {
        $sheets = [];
        for ($jenis = 1; $jenis <= 3; $jenis++) {
            $sheets[] = new SuratKeluarPerTypeSheet($jenis);
        }
        return $sheets;
    }
}
