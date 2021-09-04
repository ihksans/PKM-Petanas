<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Pencatatan extends Model
{
    use HasFactory;
    protected $table = 'pencatatan';
    public $timestamps = false;
    protected $fillable = [
        'ID_PENGGUNA',
        'ID_JENIS_SURAT',
        'ID_DERAJAT_SURAT',
        'KODE_ARSIP_KOM',
        'KODE_ARSIP_HLM',
        'KODE_ARSIP_MANUAL',
        'NAMA_FILE_SURAT',
        'NAMA_FILE_LAMPIRAN',
        'PERIHAL',
        'TGL_SURAT',
        'PENANDATANGAN'
    ];
}
