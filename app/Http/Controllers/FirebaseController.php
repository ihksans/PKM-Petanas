<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;

use Illuminate\Http\Request;
use Kreait\Laravel\Firebase\Facades\Firebase;
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
use Kreait\Firebase\Database;

class FirebaseController extends Controller
{
    //
    public function index(){
        $response =[
            'file' => 'null'

        ];
        return response()->json($response,200) ;
    }
    public function setFile(Request $request){
        $surat = $request->myFile;
        //get request file
        $nama_file = $surat->getClientOriginalName();
        $Documet   = app('firebase.firestore')->database()->collection('Document')->document($nama_file);
        $firebase_storage_path = 'Document/';
        $name     = $Documet->id();
        $localfolder = public_path('firebase-temp-uploads') .'/';
        $extension = $surat->getClientOriginalExtension();
        if($extension != 'pdf')
        {
            $response =[
                'file' => 'not pdf'

            ];
            return response()->json($response);
        }
        $file      = $request->namefile. '.' . $extension;
        if ($surat->move($localfolder, $file)) {
            $uploadedfile = fopen($localfolder.$file, 'r');
            app('firebase.storage')->getBucket()->upload($uploadedfile, ['name' => $firebase_storage_path . $file]);
            //will remove from local laravel folder
            unlink($localfolder . $file);

            $expiresAt = new \DateTime('tomorrow');
            $resource = 'Document/'. $file;
            $imageReference = app('firebase.storage')->getBucket()->object($resource);
            // if($imageReference->exists()){
                $image = $imageReference->signedUrl($expiresAt);
                return response()->json($image,200);

            // }
        }


    }
    public function getFile(Request $request){
        $expiresAt = new \DateTime('tomorrow');
        $resource = 'Document/'. $request->namafile. '.pdf';
        $imageReference = app('firebase.storage')->getBucket()->object($resource);

        if($imageReference->exists()){
            $image = $imageReference->signedUrl($expiresAt);
            $response =[
                'url' => $image
            ];
            return response()->json($response,200);
        }
        // if($imageReference->downloadToFile($localfolder)){
            $response =[
                'msg' => 'error',
                           ];
        // }
        return response()->json($response,200);
    }
    public function delSurat($id){
        $resource = 'Document/'. $id. '.pdf';
        $imageDeleted = app('firebase.storage')->getBucket()->object($resource)->delete();
        $response =[
            'url' => $imageDeleted,
            'id' => $id
        ];

        return response()->json($response,200);

    }
    public function donwloadFile(Request $request){
        $resource = 'Document/'. $request->namafile. '.pdf';
        $imageReference = app('firebase.storage')->getBucket()->object($resource);
        $localfolder = public_path('/'.$request->namafile.'.pdf');
        if($imageReference->downloadToFile($localfolder)){
            $response =[
                'msg' => 'success',
                'file' => 'null',
                'url' => $localfolder
            ];
        }

    	return response()->json($response);
    }
     public function cancelDownload($id){
        $localfolder = public_path('/'.$id.'.pdf');
        unlink($localfolder);
        return response()->json($localfolder);
     }
}
