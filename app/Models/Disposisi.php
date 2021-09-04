<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disposisi extends Model
{
    use HasFactory;

    protected $table='disposisi';
    public $timestamps = false;
    protected $fillable = [
        // 'ID_DISPOSISI',
        'ID_PENGGUNA',
        'ID_PENCATATAN',
        'TANGGAL_DISPOSISI',
        'NAMA_FILE_DISPOSISI',
        'PROSES_SELANJUTNYA',
        'INFORMASI',
        'NOMOR_AGENDA',
        'JENIS_DISPOSISI',
    ];
}
