<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],
    //firebase
    'firebase' => [
        'apiKey'=> "AIzaSyAyBj2yUFd9rqnfTGzRVTFB_bQ0IJaglpI",
        'authDomain'=> "petanas-1efe5.firebaseapp.com",
        'projectId'=> "petanas-1efe5",
        'storageBucket'=> "petanas-1efe5.appspot.com",
        'messagingSenderId'=> "31527891930",
        'appId'=> "1:31527891930:web:eed071c2b917dd3931c6e3",
        'measurementId'=> "G-19TPTGHNCY"
    ]
];
