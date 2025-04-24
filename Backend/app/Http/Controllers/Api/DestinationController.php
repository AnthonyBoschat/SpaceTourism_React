<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use App\Services\Interfaces\imageServiceInterface;
use Illuminate\Http\Request;

class DestinationController extends Controller
{
    
    public function __construct(private imageServiceInterface $imageService) {
    }

    public function index(){
        $destinations = Destination::all();
        return $destinations;
    }

    public function update(Request $request){
        $validated = $request->validate([
            'id'            => 'required|integer|exists:crews,id',
            'name'          => 'required|string|max:255',
            'description'   => 'required|string',
            'distance'      => 'nullable|string',
            'travelTime'    => 'nullable|string',
            'image'         => 'nullable|file|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',

        ]);
        $destination = Destination::findOrFail($validated['id']);
        $validated['image'] = $this->imageService->update($request, $destination, "destinations");

        $destination->update([
            'name'         => $validated['name'],
            'description'         => $validated['description'],
            'distance' => $validated['distance'],
            'travelTime' => $validated['travelTime'],
            'image'        => $validated['image'] ?? $destination->image,
        ]);
        return response()->json($destination, 200);
    }

    public function delete(Request $request){
        $validated = $request->validate([
            "id" => "required|integer|exists:crews,id",
        ]);
        $destination = Destination::findOrFail($validated['id']);
        $destination->delete();

        return response()->json($validated['id']);
    }
}
