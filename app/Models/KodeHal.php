<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KodeHal extends Model
{
    use HasFactory;

    protected  $table = 'kode_hal';
    public $timestamps = false;
    protected $fillable = [
        'KODE_HAL',
        'HAL',
    ];
}
