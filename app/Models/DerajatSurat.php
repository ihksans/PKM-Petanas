<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DerajatSurat extends Model
{
    use HasFactory;
    protected $table = 'derajat_surat';
    public $timestamps = false;

    protected $fillable = [
        'DERAJAT_SURAT',
        'DESKRIPSI'
    ];
}
