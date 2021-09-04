<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KodeUnitKerja extends Model
{
    use HasFactory;
    protected $table = 'kode_unit_kerja';
    public $timestamps = false;

    protected $fillable = [
        'KODE_UNIT_KERJA',
        'NAMA_UNIT_KERJA',
    ];
}
