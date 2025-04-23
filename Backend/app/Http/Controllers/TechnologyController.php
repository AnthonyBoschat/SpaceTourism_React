<?php

namespace App\Http\Controllers;

use App\Models\Technology;
use App\Services\Interfaces\imageServiceInterface;
use Illuminate\Http\Request;

class TechnologyController extends Controller
{

    public function __construct(private imageServiceInterface $imageService) {
        
    }

    public function index(){
        $all_technology = Technology::all();
        return $all_technology;
    }

    public function update(Request $request){
        $validated = $request->validate([
            'id'           => 'required|integer|exists:crews,id',
            'name'         => 'required|string|max:255',
            'presentation'         => 'required|string',
        ]);
        $technology = Technology::findOrFail($validated['id']);

        $validated['image'] = $this->imageService->update($request, $technology, "technology");

        $technology->update([
            'name'         => $validated['name'],
            'presentation'         => $validated['presentation'],
            'image'        => $validated['image'] ?? $technology->image,

        ]);
        return response()->json($technology, 200);
    }
}
