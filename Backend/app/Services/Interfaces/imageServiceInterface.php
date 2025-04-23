<?php

namespace App\Services\Interfaces;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

interface imageServiceInterface{

    public function upload(UploadedFile $file, string $directory): null|string;
    public function update(Request $request, $entity, string $directory): null|string;

}