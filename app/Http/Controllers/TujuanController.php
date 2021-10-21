<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TujuanDisposisi;
use App\Models\TujuanPencatatan;
use Illuminate\Support\Facades\DB;

class TujuanController extends Controller
{
    public function index(){

    }
    
    public function setTujuanPencatatan(Request $request)
    {
        $data=[
            'ID_PENCATATAN' => $request->idPencatatan,
            'ID_KODE_UNIT_KERJA' => $request->idUnit
        ];
        $tujuanPencatatan = TujuanPencatatan::create($data);
        if($tujuanPencatatan){
            $respon = [
                'Msg'=>'success',
                'content'=> $tujuanPencatatan
            ];
            return response()->json($respon,200);
        }
        if($tujuanPencatatan == null){

            $respon=[
                'Msg'=> 'error',
                'content'=> null
            ];
            return response()->json($respon);
        }
        
    }
    public function getTujuanPencatatan($id){
        $tujuanPencatatan = TujuanPencatatan::where('ID_PENCATATAN',$id)->get();
        if($tujuanPencatatan){
            $respon=[
                'Msg' => 'succes',
                'content'=> $tujuanPencatatan
            ];
            return response()->json($respon,200);            
        }
        $respon=[
            'Msg'=> 'error',
            'content'=> null
        ];
        return response()->json($respon);
    }
    public function delTujuanPencatatan( $id,$to)
    {
        $delTujuanPencatatan = TujuanPencatatan::where('ID_PENCATATAN', $id)->where('ID_KODE_UNIT_KERJA',$to);
        $delTujuanPencatatan->delete();
        if($delTujuanPencatatan){
            $respon=[
                'Msg' => 'succes',
                'content'=> $delTujuanPencatatan
            ];
            return response()->json($respon,200);            
        }
        $respon=[
            'Msg'=> 'error',
            'content'=> null
        ];
        return response()->json($respon);
    }
    public function upTujuanPencatatan(Request $request)
    {
        $upTujuanPencatatan =  TujuanPencatatan::where('ID_PENCATATAN', $request->idPencatatan)->where('ID_KODE_UNIT_KERJA',$request->idUnit)
        ->update([
            'ID_PENCATATAN'=>$request->idPencatatan,
            'ID_KODE_UNIT_KERJA'=>$request->idUnitNew
        ]);
        if($upTujuanPencatatan){
            $respon=[
                'Msg' => 'succes',
                'content'=> $upTujuanPencatatan
            ];
            return response()->json($respon,200);            
        }
        $respon=[
            'Msg'=> 'error',
            'content'=> null
        ];
        return response()->json($respon);
    }
    public function getDetailTujuanPencatatan($id){
        $detail = DB::table('tujuan_pencatatan')->where('ID_PENCATATAN', $id)
        ->join('kode_unit_kerja','kode_unit_kerja.ID_KODE_UNIT_KERJA','=','tujuan_pencatatan.ID_KODE_UNIT_KERJA')
        ->select('tujuan_pencatatan.*','kode_unit_kerja.*')
        ->get();
        if($detail){
            $respon=[
                'Msg' => 'succes',
                'content'=> $detail
            ];
            return response()->json($respon,200); 
        }else{
            $respon=[
                'Msg' => 'error',
                'content'=> null
            ];
            return response()->json($respon); 
        }

    }
    public function delAllTujuanPencatatan($id){
        $delTujuanPencatatan = TujuanPencatatan::where('ID_PENCATATAN', $id);
        $delTujuanPencatatan->delete();
        if($delTujuanPencatatan){
            $respon=[
                'Msg' => 'succes',
                'content'=> $delTujuanPencatatan
            ];
            return response()->json($respon,200);            
        }
        $respon=[
            'Msg'=> 'error',
            'content'=> null
        ];
        return response()->json($respon);
    }
    
    public function createTujuanDisposisi(Request $request)
    {
        $data=[
            'ID_DISPOSISI' => $request->idDisposisi,
            'ID_KODE_UNIT_KERJA' => $request->idUnit
        ];
        $tujuanDisposisi = TujuanDisposisi::create($data);
        if($tujuanDisposisi){
            $respon = [
                'Msg' => 'success',
                'content' => $tujuanDisposisi
            ];
            return response()->json($respon,200);
        }
        if($tujuanDisposisi == null){
            $respon=[
                'Msg'=>'error',
                'content'=>null
            ];
            return response()->json($respon);
        }
    }
    public function getDetailTujuanDisposisi($id){
        $detail = DB::table('tujuan_disposisi')->where('ID_DISPOSISI',$id)
        ->join('kode_unit_kerja','kode_unit_kerja.ID_KODE_UNIT_KERJA','=','tujuan_disposisi.ID_KODE_UNIT_KERJA')
        ->select('tujuan_disposisi.*','kode_unit_kerja.*')
        ->get();
        if($detail){
            $response=[
                'Msg'=> 'success',
                'content' => $detail
            ];
            return response()->json($response,200);
        }else{
            $response=[
                'Msg'=> 'success',
                'content' => null
            ];
            return response()->json($response,200);
        }
    }
    
    public function delTujuanDisposisi($id,$to){
        $delTujuanDisposisi = TujuanDisposisi::where('ID_DISPOSISI',$id)->where('ID_KODE_UNIT_KERJA',$to);
        $delTujuanDisposisi->delete();
        if($delTujuanDisposisi){
            $respon=[
                'Msg' => 'succes',
                'content'=> $delTujuanDisposisi
            ];
            return response()->json($respon,200);            
        }
        $respon=[
            'Msg'=> 'error',
            'content'=> null
        ];
        return response()->json($respon);
    }
}
