<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\KodeHal;
class KodeHalController extends Controller
{
    public function getAllKodeHal()
    {
        try{
            $result = KodeHal::all();
            return response()->json($result);          
        }catch(\Exception $e){
            $data = [
                'Msg'=> 'error'
            ];
            return response()->json($data);          
        }
    }
    public function getKodeHal($id)
    {

        $result = KodeHal::where('ID_KODE_HAL', $id)->first();
        if($result == null){
            $respon =[
            'Msg' => 'error',
            'content' =>  $id,
            ];
            return response()->json($respon);
        }
        return response()->json($result);

    }
}
