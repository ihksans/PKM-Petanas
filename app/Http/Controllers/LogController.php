<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Log;

class LogController extends Controller
{
    public function index()
    {
        $respon = [
            'msg'=> 'success'
        ];
        return response()->json($respon);
    }
    public function setLog(Request $request)
    {
        $date = now()->toDateTimeString();
        $data = [
            'WAKTU' => $date,
            'DESKRIPSI' => $request->deskripsi
        ];
        $log = Log::create($data);
        if($log)
        {
            $respon = [
            'Msg' => 'success',
            'content' => $log,
            ];
            return response()->json($respon,200);
        }
        else{
            $respon = [
                'Msg' => 'error',
                'content' => $log,
                ];
            return response()->json($respon);
        }
    }
    public function getLog($id)
    {

        $Log = Log::where('ID_RIWAYAT_ALTIVITAS', $id)->first();
        if($Log == null){
            $respon =[
            'Msg' => 'error',
            'content' =>  $id,
            ];
        return response()->json($respon);
        }
        return response()->json($Log);
    }
    public function getAllLog()
    {
        $Log = Log::all();
        if($Log == null){
            $respon =[
            'Msg' => 'error',
            'content' => $Log,
            ];


        return response()->json($respon);
        }
        return response()->json($Log);
    }
}
