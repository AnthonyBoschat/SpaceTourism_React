<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Destination extends Model
{
    protected $fillable = ["name", "description", "distance", "travelTime", "image"];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute(): ?string
    {
         $path = $this->attributes['image'] ?? null;
         return $path ? asset(Storage::url($path)) : null;
    }
}
