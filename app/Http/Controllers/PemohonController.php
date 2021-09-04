<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pemohon;
class PemohonController extends Controller
{
    public function setPemohon(Request $request)
    {
        $data =[
            'NAMA_PEMOHON'=>$request->nama_pemohon,
        ];
        $pemohon = Pemohon::create($data);
        if(!$pemohon){
            $respon = [
                'Msg' => 'error',
                'content' => $pemohon,
                ];
                return response()->json($respon);
        }
        $respon = [
            'Msg' => 'success',
            'content' => $pemohon,
            ];
            return response()->json($respon,200);
    }
    public function getPemohon($id){
        $pemohon=Pemohon::where('ID_PEMOHON', $id)->first();
        if($pemohon == null){
            $respon =[
            'Msg' => 'error',
            'content' =>  $id,
            ];
        return response()->json($respon);
        }
        $respon =[
            'Msg' => 'success',
            'content' =>  $pemohon,
            ];
        return response()->json($respon);
    }
    public function getAllPemohon(){
        $pemohon=Pemohon::all();
        if($pemohon == null){
            $respon =[
            'Msg' => 'error',
            'content' =>  null,
            ];
        return response()->json($respon);
        }
        $respon =[
            'Msg' => 'success',
            'content' =>  $pemohon,
            ];
        return response()->json($respon);
    }
    public function delPemohon($id)
    {
        $pemohon=Pemohon::where('ID_PEMOHON',$id);
        $pemohon->delete();
        if(!$pemohon){
            $respon = [
                'Msg' => 'error',
                'content' => $id,
                ];
                return response()->json($respon);
        }
        $respon = [
            'Msg' => 'success',
            'content' => $id,
            ];
            return response()->json($respon,200);
    }
    public function updatePemohon(Request $request)
    {
        $pemohon=Pemohon::where('ID_PEMOHON',$request->id)
        ->update([
            'NAMA_PEMOHON'=>$request->nama_pemohon
        ]);
        if(!$pemohon){
            $respon = [
                'Msg' => 'error',
                'content' => $request->id,
                ];
                return response()->json($respon);
        }
        $respon = [
            'Msg' => 'success',
            'content' => $pemohon,
            ];
            return response()->json($respon,200);
    }
}
