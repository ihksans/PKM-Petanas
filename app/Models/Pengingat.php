<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengingat extends Model
{
    use HasFactory;

    protected $table = 'pengingat';
    public $timestamps = false;

    protected $fillable = [
        'ID_PENGINGAT',
        'ID_PENGGUNA',
        'ID_PENCATATAN',
        'WAKTU_PENGINGAT',
        'DESKRIPSI',
        'STATUS',
        'JENIS_PENGINGAT'
        ];
}
