<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuratKeluar extends Model
{
    use HasFactory;
    protected $table = 'surat_keluar';
    public $timestamps = false;

    protected $fillable = [
        'ID_PENGGUNA',
        'ID_PENCATATAN',
        'ID_NOMOR_SURAT',
        'ID_PEMOHON',
        'TGL_KIRIM', 
        'NOMOR_SURAT'
    ];
}
