<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\KodeUnitKerja;

class KodeUnitKerjaController extends Controller
{
    public function index($id)
    {
        $data = [
            'ID_KODE_UNIT_KERJA' => $id
        ];
        return response()->json($data);
    }
    public function setKodeUnit(Request $request)
    {
        $data = [
            'KODE_UNIT_KERJA' => $request->kodeUnit,
            'NAMA_UNIT_KERJA' => $request->namaUnit,
        ];
        $kodeUnit = KodeUnitKerja::create($data);
        if($kodeUnit)
        {
            $respon = [
            'Msg' => 'success',
            'content' => $kodeUnit,
            ];
            return response()->json($respon,200);
        }
        else{
            $respon = [
                'Msg' => 'error',
                'content' => $kodeUnit,
                ];
            return response()->json($respon);
        }
    }
    public function getKodeUnit($id)
    {

        $kodeUnit = KodeUnitKerja::where('ID_KODE_UNIT_KERJA', $id)->first();
        if($kodeUnit == null){
            $respon =[
            'Msg' => 'error',
            'content' =>  $id,
            ];
        return response()->json($respon);
        }
        return response()->json($kodeUnit);

    }
    public function getAllKodeUnit()
    {
        $kodeUnit = KodeUnitKerja::all();
        if($kodeUnit == null){
            $respon =[
            'Msg' => 'error',
            'content' => $kodeUnit,
            ];
        return response()->json($respon);
        }
        return response()->json($kodeUnit);

    }
    public function delAllKodeUnit()
    {
        $kodeUnit = KodeUnitKerja::truncate();
        if($kodeUnit == null){
            $respon =[
            'Msg' => 'error',
            'content' => $kodeUnit,
            ];
        return response()->json($respon);
        }
        return response()->json($kodeUnit);

    }
    public function delUnitKerja($id)
    {
        $kodeUnit = KodeUnitKerja::where('ID_KODE_UNIT_KERJA', $id);
        $kodeUnit->delete();
        if($kodeUnit != null){
            $respon =[
            'Msg' => 'error',
            'content' => $id,
            ];
        return response()->json($respon);
        }
        $respon =[
            'Msg' => 'success',
            'content' => $id,
            ];
        return response()->json($respon);

    }
   
    public function updateKodeUnit(Request $request)
    {
        $kodeUnit = KodeUnitKerja::where('ID_KODE_UNIT_KERJA', $request->id)
        ->update([
            'KODE_UNIT_KERJA' => $request->kodeUnit,
            'NAMA_UNIT_KERJA' => $request->namaUnit,
        ]);
        if(!$kodeUnit){
            $respon =[
                'Msg' => 'failed',
                'content' => $kodeUnit,
                ];
            return response()->json($respon);
        }
        $respon =[
            'Msg' => 'success',
            'content' => $kodeUnit,
            ];
        return response()->json($respon);
    }
}