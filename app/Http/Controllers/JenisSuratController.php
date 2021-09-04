<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\JenisSurat;

class JenisSuratController extends Controller
{
    public function index($id)
    {
        $data = [
            'ID_JENIS_SURAT' => $id
        ];
        return response()->json($data);
    }
    public function setJenisSurat(Request $request)
    {
        $data = [
            'JENIS_SURAT' => $request->jenisSurat,
            'KETERANGAN' => $request->keterangan,
        ];
        if($request->jenisSurat==null||$request->keterangan == null){
            $respon = [
                'Msg' => 'error null content',
            
                ];
                return response()->json($respon,200);

        }
        $jenisSurat = JenisSurat::create($data);
        if($jenisSurat)
        {
            $respon = [
            'Msg' => 'success',
            'content' => $jenisSurat,
            ];
            return response()->json($respon,200);
        }
        else{
            $respon = [
                'Msg' => 'error',
                'content' => $jenisSurat,
                ];
            return response()->json($respon);
        }
    }
    public function getJenisSurat($id)
    {

        $jenisSurat = JenisSurat::where('ID_JENIS_SURAT', $id)->first();
        if($jenisSurat == null){
            $respon =[
            'Msg' => 'error',
            'content' =>  $id,
            ];
        return response()->json($respon);
        }
        return response()->json($jenisSurat);

    }
    public function getAllJenisSurat()
    {
        $jenisSurat = JenisSurat::all();
        if($jenisSurat == null){
            $respon =[
            'Msg' => 'error',
            'content' => $jenisSurat,
            ];
        return response()->json($respon);
        }
        return response()->json($jenisSurat);

    }
    public function delAllJenisSurat()
    {
        $jenisSurat = JenisSurat::truncate();
        if($jenisSurat == null){
            $respon =[
            'Msg' => 'error',
            'content' => $jenisSurat,
            ];
        return response()->json($respon);
        }
        return response()->json($jenisSurat);

    }
    public function delJenisSurat($id)
    {
        $jenisSurat = JenisSurat::where('ID_JENIS_SURAT', $id);
        $jenisSurat->delete();
        if($jenisSurat != null){
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
   
    public function updateJenisSurat(Request $request)
    {
        $jenisSurat = JenisSurat::where('ID_JENIS_SURAT', $request->id)
        ->update([
            'JENIS_SURAT' => $request->jenisSurat,
            'KETERANGAN' => $request->keterangan,
        ]);
        if(!$jenisSurat){
            $respon =[
                'Msg' => 'failed',
                'content' => $jenisSurat,
                ];
            return response()->json($respon);
        }
        $respon =[
            'Msg' => 'success',
            'content' => $jenisSurat,
            ];
        return response()->json($respon);
    }
}
