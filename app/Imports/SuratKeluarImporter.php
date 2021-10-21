<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\Imports\SuratKeluarPerTypeSheet;

use Illuminate\Support\Facades\DB;

class SuratKeluarImporter implements WithMultipleSheets
{
    public function sheets(): array
    {
        return [
            0 => new SuratKeluarPerTypeSheet(1),
            1 => new SuratKeluarPerTypeSheet(2),
            2 => new SuratKeluarPerTypeSheet(3),
        ];
    }
}
