<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pemohon extends Model
{
    use HasFactory;
    protected $table = 'pemohon';
    public $timestamps = false;
    protected $fillable=[
        'ID_PEMOHON',
        'NAMA_PEMOHON'
    ];
}
