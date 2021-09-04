<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NomorSuratKeluar extends Model
{
    use HasFactory;
    protected $table = 'nomor_surat';
    public $timestamps = false;

    protected $fillable=[
        'ID_NOMOR_SURAT',
        'ID_KODE_UNIT_KERJA',
        'ID_KODE_HAL',
        'ID_KODE_PERGURUAN_TINGGI',
        'ID_SIFAT_NASKAH',
        'NOMOR_URUT',
        'TAHUN',
    ];
}
