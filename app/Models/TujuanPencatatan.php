<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TujuanPencatatan extends Model
{
    use HasFactory;
    protected $table = 'tujuan_pencatatan';
    public $timestamps = false;

    protected $fillable = [
        'ID_PENCATATAN',
        'ID_KODE_UNIT_KERJA'
    ];
}
