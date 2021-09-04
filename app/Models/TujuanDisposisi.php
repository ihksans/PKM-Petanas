<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TujuanDisposisi extends Model
{
    use HasFactory;
    protected $table = 'tujuan_disposisi';
    public $timestamps = false;

    protected $fillable = [
        'ID_DISPOSISI',
        'ID_KODE_UNIT_KERJA'
    ];
}
