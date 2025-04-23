<?php

namespace App\Http\Controllers;

use App\Models\Crew;
use App\Services\Interfaces\imageServiceInterface;
use Illuminate\Http\Request;

class CrewController extends Controller
{
   
    public function __construct(private imageServiceInterface $imageService) {
        
    }

    public function index(){
        $crews = Crew::all();
        return $crews;
    }

    public function update(Request $request){
        $validated = $request->validate([
            'id'            => 'required|integer|exists:crews,id',
            'name'          => 'required|string|max:255',
            'role'          => 'required|string|max:255',
            'presentation'  => 'nullable|string',
            'image'         => 'nullable|file|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);
        $crewMember = Crew::findOrFail($validated['id']);

        $validated['image'] = $this->imageService->update($request, $crewMember, "crews");

        $crewMember->update([
            'name'         => $validated['name'],
            'role'         => $validated['role'],
            'presentation' => $validated['presentation'],
            'image'        => $validated['image'] ?? $crewMember->image,
        ]);
        
        return response()->json($crewMember, 200);
    }

    public function delete(Request $request){
        $validated = $request->validate([
            "id" => "required|integer|exists:crews,id",
        ]);
        $crewMember = Crew::findOrFail($validated['id']);
        $crewMember->delete();

        return response()->json($validated['id']);
    }
}
