<?php

namespace App\Services;

use App\Services\Interfaces\imageServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class imageService implements imageServiceInterface{

    public function upload(UploadedFile $file, string $directory, string $disk="public"): string
    {
        // Génère un nom unique
        $filename = time() . '-' . Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME))
                    . '.' . $file->getClientOriginalExtension();

        // stocke dans storage/app/public/{directory}
        return $file->storeAs($directory, $filename, $disk);
    }


    public function update(Request $request, $entity, string $directory):null|string{
        $imageURL = null;
        // Si une image est reçu
        if ($request->hasFile('image')) {
            // Si ce membre du crew a une image et qu'elle existe dans le storage public
            if ($entity->image && Storage::disk('public')->exists($entity->image)) {
                // On supprime ce fichier dans le storage public
                if(!Str::of($entity->image)->startsWith("seed/")){
                    Storage::disk('public')->delete($entity->image);
                }
            }

            // Ensuite on enregistre cette image dans le storage public, et on set validated["image"] avec
            $imageURL = $this->upload($request->file('image'), $directory);
        }
        return $imageURL;
    }
}