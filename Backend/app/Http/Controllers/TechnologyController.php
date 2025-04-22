<?php

namespace App\Http\Controllers;

use App\Models\Technology;
use Illuminate\Http\Request;

class TechnologyController extends Controller
{
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
        $technology->update([
            'name'         => $validated['name'],
            'presentation'         => $validated['presentation'],
        ]);
        return response()->json($technology, 200);
    }
}
