<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DerajatSurat;

class DerajatSuratController extends Controller
{
    public function index($id)
    {
        $data = [
            'ID_DERAJAT_SURAT' => $id
        ];
        return response()->json($data);
    }
    public function setDerajatSurat(Request $request)
    {
        $data = [
            'DERAJAT_SURAT' => $request->derajatSurat,
            'DESKRIPSI' => $request->keterangan,
        ];
        $DerajatSurat = DerajatSurat::create($data);
        if($DerajatSurat)
        {
            $respon = [
            'Msg' => 'success',
            'content' => $DerajatSurat,
            ];
            return response()->json($respon,200);
        }
        else{
            $respon = [
                'Msg' => 'error',
                'content' => $DerajatSurat,
                ];
            return response()->json($respon);
        }
    }
    public function getDerajatSurat($id)
    {

        $DerajatSurat = DerajatSurat::where('ID_DERAJAT_SURAT', $id)->first();
        if($DerajatSurat == null){
            $respon =[
            'Msg' => 'error',
            'content' =>  $id,
            ];
        return response()->json($respon);
        }
        return response()->json($DerajatSurat);

    }
    public function getAllDerajatSurat()
    {
        $DerajatSurat = DerajatSurat::all();
        if($DerajatSurat == null){
            $respon =[
            'Msg' => 'error',
            'content' => $DerajatSurat,
            ];
        return response()->json($respon);
        }
        return response()->json($DerajatSurat);

    }
    public function delAllDerajatSurat()
    {
        $DerajatSurat = DerajatSurat::truncate();
        if($DerajatSurat == null){
            $respon =[
            'Msg' => 'error',
            'content' => $DerajatSurat,
            ];
        return response()->json($respon);
        }
        return response()->json($DerajatSurat);

    }
    public function delDerajatSurat($id)
    {
        $DerajatSurat = DerajatSurat::where('ID_DERAJAT_SURAT', $id);
        $DerajatSurat->delete();
        if($DerajatSurat != null){
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
   
    public function updateDerajatSurat(Request $request)
    {
        $DerajatSurat = DerajatSurat::where('ID_DERAJAT_SURAT', $request->id)
        ->update([
            'DERAJAT_SURAT' => $request->derajatSurat,
            'DESKRIPSI' => $request->deskripsi,
        ]);
        if(!$DerajatSurat){
            $respon =[
                'Msg' => 'failed',
                'content' => $DerajatSurat,
                ];
            return response()->json($respon);
        }
        $respon =[
            'Msg' => 'success',
            'content' => $DerajatSurat,
            ];
        return response()->json($respon);
    }
}
