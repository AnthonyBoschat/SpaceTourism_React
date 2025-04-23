<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Technology extends Model
{
    protected $table = 'technology';
    protected $fillable = ["name", "presentation", "image"];

    protected $appends = ['image_url'];


    public function getImageUrlAttribute(): ?string
    {
         $path = $this->attributes['image'] ?? null;
         return $path ? asset(Storage::url($path)) : null;
    }
}
