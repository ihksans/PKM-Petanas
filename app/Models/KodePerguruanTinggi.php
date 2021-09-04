<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KodePerguruanTinggi extends Model
{
    use HasFactory;

    protected  $table = 'kode_perguruan_tinggi';
    public $timestamps = false;
    protected $fillable = [
        'KODE_PERGURUAN_TINGGI',
        'PERGURUAN_TINGGI',
    ];
}
