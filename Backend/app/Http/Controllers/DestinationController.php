<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use Illuminate\Http\Request;

class DestinationController extends Controller
{
    


    public function index(){
        $destinations = Destination::all();
        return $destinations;
    }

    public function update(Request $request){
        $validated = $request->validate([
            'id'           => 'required|integer|exists:crews,id',
            'name'         => 'required|string|max:255',
            'description'         => 'required|string',
            'distance' => 'nullable|string',
            'travelTime' => 'nullable|string',
        ]);
        $destination = Destination::findOrFail($validated['id']);
        $destination->update([
            'name'         => $validated['name'],
            'description'         => $validated['description'],
            'distance' => $validated['distance'],
            'travelTime' => $validated['travelTime'],
        ]);
        return response()->json($destination, 200);
    }
}
