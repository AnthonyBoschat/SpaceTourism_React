<?php

namespace App\Http\Controllers;

use App\Models\Crew;
use Illuminate\Http\Request;

class CrewController extends Controller
{
   

    public function index(){
        $crews = Crew::all();
        return $crews;
    }

    public function update(Request $request){
        $validated = $request->validate([
            'id'           => 'required|integer|exists:crews,id',
            'name'         => 'required|string|max:255',
            'role'         => 'required|string|max:255',
            'presentation' => 'nullable|string',
        ]);
        $crewMember = Crew::findOrFail($validated['id']);
        $crewMember->update([
            'name'         => $validated['name'],
            'role'         => $validated['role'],
            'presentation' => $validated['presentation'],
        ]);
        return response()->json($crewMember, 200);
    }
}
