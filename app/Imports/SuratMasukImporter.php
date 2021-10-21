<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\Imports\SuratMasukPerTypeSheet;

use Illuminate\Support\Facades\DB;

class SuratMasukImporter implements WithMultipleSheets
{
    public function sheets(): array
    {
        return [
            0 => new SuratMasukPerTypeSheet(1),
            1 => new SuratMasukPerTypeSheet(2),
            2 => new SuratMasukPerTypeSheet(3),
        ];
    }
}
