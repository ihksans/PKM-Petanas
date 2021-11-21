<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;
use App\Models\User;
use App\Models\Pengguna;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validate = \Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required',
        ]);

        if ($validate->fails()) {
            $respon = [
                'status' => 'error',
                'msg' => 'Validator error',
                'errors' => $validate->errors(),
                'content' => null,
            ];
            return response()->json($respon, 200);
        } else {
            $user = User::where('username', $request->username)->first();
            if($user == null )
            {
                $respon = [
                    'status' => 'error',
                    'msg' => 'username not found',
                    'errors' => 'username',
                    'content' => null,
                ];
                return response()->json($respon);
            }
            $pengguna = Pengguna::where('username', $request->username)->first();
            if($pengguna->IS_DELETE == true )
            {
                $respon = [
                    'status' => 'error',
                    'msg' => 'username not found',
                    'errors' => 'username',
                    'content' => null,
                ];
                return response()->json($respon);
            }
            if (!\Hash::check($request->password, $user->password)) {
                // throw new \Exception('Error in Login');
                $respon = [
                    'status' => 'error',
                    'msg' => 'wrong password',
                    'errors' => 'password',
                    'content' => null,
                ];
                return response()->json($respon);
            }
            $tokenResult = $user->createToken('token-auth')->plainTextToken;
            //$CurrentUser = $request->user();
            $respon = [
                'status' => 'success',
                'msg' => 'Login successfully',
                'errors' => null,
                'content' => [
                    'status_code' => 200,
                    'access_token' => $tokenResult,
                    'token_type' => 'Bearer',
                ]
            ];
            return response()->json($respon, 200);
        }
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        $respon = [
            'status' => 'success',
            'msg' => 'Logout successfully',
            'errors' => null,
            'content' => null,
        ];
        return response()->json($respon, 200);
    }

    public function logoutall(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        $respon = [
            'status' => 'success',
            'msg' => 'Logout successfully',
            'errors' => null,
            'content' => null,
        ];
        return response()->json($respon, 200);
    }
    public function userInfo(Request $request)
    {
        $user = $request->user();
        $token =  $user->currentAccessToken();
        $respon = [
            'token' => $token
        ];
        return response()->json($respon, 200);
    }
    public function checkToken(Request $request)
    {
        $user = $request->user();
        $respon = [
            'token' => $user
        ];
        return response()->json($respon, 200);
    }
}
