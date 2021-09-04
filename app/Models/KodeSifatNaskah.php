<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KodeSifatNaskah extends Model
{
    use HasFactory;
    protected $table = 'kode_sifat_naskah';
    public $timestamps = false;

    protected $fillable = [
        'KODE_SIFAT_NASKAH',
        'SIFAT_NASKAH',
        ];
}
